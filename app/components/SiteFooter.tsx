import Link from "next/link";
import Image from "next/image";
import { footerColumns } from "../site-data";

export function SiteFooter({ theme = "light" }: { theme?: "light" | "dark" }) {
  return (
    <footer className={`site-footer ${theme === "dark" ? "theme-dark" : "theme-light"}`}>
      <div className="footer-service-strip">
        <div className="footer-strip-item">
          <span className="footer-strip-icon footer-strip-icon--phone" aria-hidden="true" />
          <div>
            <strong>Call Helix</strong>
            <a href="tel:07359589933">07359 589933</a>
          </div>
        </div>
        <div className="footer-strip-item">
          <span className="footer-strip-icon footer-strip-icon--mail" aria-hidden="true" />
          <div>
            <strong>Email us</strong>
            <a href="mailto:hello@helixfiresecurity.com">Customer Services</a>
          </div>
        </div>
        <div className="footer-strip-item">
          <span className="footer-strip-icon footer-strip-icon--map" aria-hidden="true" />
          <div>
            <strong>Visit us</strong>
            <span>Leicester, LE5 3TN</span>
          </div>
        </div>
        <div className="footer-strip-item">
          <span className="footer-strip-icon footer-strip-icon--shield" aria-hidden="true" />
          <div>
            <strong>Fire &amp; Security</strong>
            <span>Compliance-led support</span>
          </div>
        </div>
      </div>

      <div className="footer-shell">
        <div className="footer-main-grid">
          <div className="footer-contact-card">
            <div className="footer-logo-circle shrink-0">
              <Image
                src="/helix-logo-footer.png"
                alt="Helix footer logo"
                width={110}
                height={91}
                className="footer-logo-image"
              />
            </div>
          </div>

          <div className="footer-nav-columns">
            {footerColumns.map((column) => (
              <div key={column.title} className="footer-nav-col">
                <h3>{column.title}</h3>
                <div className="footer-nav-links">
                  {column.links.map((link) => (
                    <Link key={link.label} href={link.href}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="footer-subscribe-card">
            <h3>Need support?</h3>
            <p>Tell us what you need and our team will help arrange the right next step.</p>
            <a className="footer-subscribe-link" href="/book-now">
              Request a callback
              <span className="homepage-inline-arrow" aria-hidden="true" />
            </a>
            <div className="footer-social-links" aria-label="Helix quick links">
              <a href="tel:07359589933">Call</a>
              <a href="mailto:hello@helixfiresecurity.com">Email</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            <p>© {new Date().getFullYear()} Helix Fire &amp; Security Ltd. All rights reserved.</p>
          </div>
          <div className="footer-legal-links">
            <a href="https://www.owlisticstudio.com/" target="_blank" rel="noopener noreferrer">
              Designed by Owlistic Studio
            </a>
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
