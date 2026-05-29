"use client";

import { FormEvent, useState } from "react";

const WEB3FORMS_SUBMIT_URL = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "5c6a7b21-0e14-42cc-924b-1d552ddd764d";

type FormState = {
  name: string;
  email: string;
  phone: string;
  propertyType: string;
  service: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  propertyType: "",
  service: "",
  message: "",
};

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData(event.currentTarget);

    const propertyType = String(formData.get("property_type") ?? "");
    formData.set(
      "subject",
      propertyType
        ? `Helix website enquiry — ${propertyType}`
        : "Helix website enquiry"
    );

    try {
      const response = await fetch(WEB3FORMS_SUBMIT_URL, {
        method: "POST",
        body: formData,
      });

      const data = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to submit your enquiry right now.");
      }

      setStatus("success");
      setMessage("Thanks, your enquiry has been received. Our team will be in touch shortly.");
      setForm(initialState);
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form className={`contact-form${compact ? " compact" : ""}`} onSubmit={handleSubmit}>
      <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
      {/* Web3Forms honeypot: must stay unchecked — do not use a visible/hidden text field (autofill triggers spam) */}
      <input type="checkbox" name="botcheck" defaultChecked={false} tabIndex={-1} autoComplete="off" className="hidden" style={{ display: "none" }} aria-hidden="true" />
      <div className="contact-form-grid">
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            placeholder="Your name"
            required
          />
        </label>

        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            placeholder="you@example.com"
            required
          />
        </label>

        <label>
          <span>Phone</span>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
            placeholder="Your phone number"
          />
        </label>

        <label>
          <span>Property Type</span>
          <select
            name="property_type"
            value={form.propertyType}
            onChange={(event) => setForm((current) => ({ ...current, propertyType: event.target.value }))}
            required
          >
            <option value="">Select property type</option>
            <option value="commercial">Commercial</option>
            <option value="residential">Residential</option>
            <option value="retail">Retail</option>
            <option value="industrial-warehouse">Industrial / Warehouse</option>
            <option value="education-healthcare">Education / Healthcare</option>
            <option value="hospitality-leisure">Hospitality / Leisure</option>
            <option value="mixed-use">Mixed Use Development</option>
            <option value="public-sector">Public Sector</option>
          </select>
        </label>
      </div>

      <label>
        <span>Service Required</span>
        <input
          type="text"
          name="service_required"
          value={form.service}
          onChange={(event) => setForm((current) => ({ ...current, service: event.target.value }))}
          placeholder="Fire alarms, emergency lighting, CCTV..."
        />
      </label>

      <label>
        <span>Message</span>
        <textarea
          name="message"
          value={form.message}
          onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
          placeholder="Tell us about your property and what support you need."
          rows={compact ? 4 : 6}
          required
        />
      </label>

      <div className="contact-form-actions">
        <button className="button button-primary contact-submit" type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Submit Enquiry"}
        </button>
        <p className="contact-privacy-note">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <path d="M8 11V8a4 4 0 1 1 8 0v3" strokeLinecap="round" />
          </svg>
          Your data is never shared
        </p>
        {message ? <p className={`contact-form-status ${status}`}>{message}</p> : null}
      </div>
    </form>
  );
}
