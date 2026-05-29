/** Web3Forms access key (public). Override with WEB3FORMS_ACCESS_KEY in production if needed. */
export const web3FormsAccessKey =
  process.env.WEB3FORMS_ACCESS_KEY?.trim() ?? "536a80e2-b68c-40c2-ab53-bd757805bad1";

export const web3FormsSubmitUrl = "https://api.web3forms.com/submit";

export type Web3FormsPayload = {
  name: string;
  email: string;
  phone: string;
  propertyType: string;
  service: string;
  message: string;
  botcheck?: string;
};

export async function submitToWeb3Forms(payload: Web3FormsPayload) {
  if (payload.botcheck) {
    return { success: false as const, message: "Spam detected." };
  }

  const response = await fetch(web3FormsSubmitUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: web3FormsAccessKey,
      subject: `Helix website enquiry — ${payload.propertyType}`,
      from_name: "Helix Website",
      name: payload.name,
      email: payload.email,
      phone: payload.phone || "Not provided",
      property_type: payload.propertyType,
      service_required: payload.service || "Not specified",
      message: payload.message,
    }),
  });

  const data = (await response.json()) as { success?: boolean; message?: string };

  if (!response.ok || !data.success) {
    return {
      success: false as const,
      message: data.message ?? "Unable to send your enquiry right now.",
    };
  }

  return { success: true as const, message: data.message };
}
