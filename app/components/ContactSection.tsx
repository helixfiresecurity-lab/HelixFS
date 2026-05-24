import { ContactForm } from "./ContactForm";

export function ContactSection({ standalone = false }: { standalone?: boolean }) {
  return (
    <section className={`contact-section${standalone ? " standalone pt-12 lg:pt-20" : ""}`} id="contact">
      <div className="contact-shell">
        <div className="contact-copy">
          <h2>Contact Us Now</h2>
          <p>
            Tell us about your site and requirements. We&apos;ll review your enquiry and follow up with
            the right next step — survey, quote, or quick callback.
          </p>
          <p>
            Our typical response time is within 2 hours during business hours.
          </p>

          <div className="contact-quick-links">
            <a className="contact-quick-card" href="https://wa.me/447359589933?text=Hi%20Helix%2C%20I%20would%20like%20to%20book%20a%20survey." target="_blank" rel="noreferrer">
              <strong>Quick contact via WhatsApp</strong>
              <span>Start a fast conversation with our team</span>
            </a>

            <a className="contact-quick-card" href="tel:07359589933">
              <strong>Call 07359 589933</strong>
              <span>Speak to us directly about your requirements</span>
            </a>
          </div>
        </div>

        <div className="contact-panel">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
