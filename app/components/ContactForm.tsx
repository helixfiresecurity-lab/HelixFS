"use client";

import { FormEvent, useState } from "react";

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

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Unable to submit your enquiry right now.");
      }

      setStatus("success");
      setMessage(data.message);
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form className={`contact-form${compact ? " compact" : ""}`} onSubmit={handleSubmit}>
      <div className="contact-form-grid">
        <label>
          <span>Name</span>
          <input
            type="text"
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
            value={form.phone}
            onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
            placeholder="Your phone number"
          />
        </label>

        <label>
          <span>Property Type</span>
          <select
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
          value={form.service}
          onChange={(event) => setForm((current) => ({ ...current, service: event.target.value }))}
          placeholder="Fire alarms, emergency lighting, CCTV..."
        />
      </label>

      <label>
        <span>Message</span>
        <textarea
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
