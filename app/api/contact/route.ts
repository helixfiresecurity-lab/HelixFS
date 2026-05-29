import { NextResponse } from "next/server";

const requiredFields = ["name", "email", "propertyType", "message"] as const;

const fieldLimits: Record<(typeof requiredFields)[number] | "phone" | "service", number> = {
  name: 120,
  email: 254,
  propertyType: 80,
  message: 5000,
  phone: 40,
  service: 120,
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const rateLimitWindowMs = 60_000;
const rateLimitMax = 8;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function getClientKey(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() ?? "unknown";
  return request.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(key: string) {
  const now = Date.now();
  const entry = rateLimitStore.get(key);

  if (!entry || now >= entry.resetAt) {
    rateLimitStore.set(key, { count: 1, resetAt: now + rateLimitWindowMs });
    return false;
  }

  entry.count += 1;
  if (entry.count > rateLimitMax) return true;
  return false;
}

function sanitize(value: unknown, max: number) {
  return String(value ?? "").trim().slice(0, max);
}

export async function POST(request: Request) {
  const clientKey = getClientKey(request);
  if (isRateLimited(clientKey)) {
    return NextResponse.json(
      { ok: false, message: "Too many requests. Please wait a minute and try again." },
      { status: 429 }
    );
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 32_000) {
    return NextResponse.json(
      { ok: false, message: "Request too large. Please shorten your message and try again." },
      { status: 413 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request. Please try submitting the form again." },
      { status: 400 }
    );
  }

  const payload = {
    name: sanitize(body.name, fieldLimits.name),
    email: sanitize(body.email, fieldLimits.email),
    phone: sanitize(body.phone, fieldLimits.phone),
    propertyType: sanitize(body.propertyType, fieldLimits.propertyType),
    service: sanitize(body.service, fieldLimits.service),
    message: sanitize(body.message, fieldLimits.message),
  };

  const missing = requiredFields.filter((field) => !payload[field]);
  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, message: "Please complete all required fields before submitting." },
      { status: 400 }
    );
  }

  if (!emailPattern.test(payload.email)) {
    return NextResponse.json(
      { ok: false, message: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL?.trim();
  if (!webhookUrl) {
    if (process.env.NODE_ENV === "development") {
      console.info("[contact] dev mode — enquiry logged (set CONTACT_WEBHOOK_URL to forward)", payload);
      return NextResponse.json({
        ok: true,
        message: "Thanks, your enquiry has been received. Our team will be in touch shortly.",
      });
    }

    console.error("[contact] CONTACT_WEBHOOK_URL is not configured");
    return NextResponse.json(
      {
        ok: false,
        message:
          "Online enquiries are temporarily unavailable. Please contact us by phone or WhatsApp.",
      },
      { status: 503 }
    );
  }

  try {
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source: "helix-contact-form",
        submittedAt: new Date().toISOString(),
        ...payload,
      }),
    });

    if (!webhookResponse.ok) {
      throw new Error(`Webhook responded with ${webhookResponse.status}`);
    }
  } catch (error) {
    console.error("[contact] Failed to forward enquiry", error);
    return NextResponse.json(
      {
        ok: false,
        message: "We could not send your enquiry right now. Please try again shortly.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Thanks, your enquiry has been received. Our team will be in touch shortly.",
  });
}
