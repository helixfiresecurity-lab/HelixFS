import Image from "next/image";
import Link from "next/link";
import { brochureCoveragePoints, brochureHeroFeatures, brochures } from "../lib/brochures-data";
import {
  BrochureDownloadIcon,
  BrochureFolderIcon,
  BrochureHeroFeatureIcon,
  BrochureSupportIcon,
  BrochureTypeIcon,
} from "./BrochuresIcons";

const heroImage =
  "/images/000 - HOME PAGE/Modern corporate office lobby - hero slide.png";
const heroBrochureImage =
  "/images/001 - FIRE SYSTEMS/Image for main fire systems page - reception scene.png";

export function BrochuresPage() {
  return (
    <main className="brochures-page">
      <section className="bro-hero">
        <Image
          src={heroImage}
          alt="Helix fire and security services"
          fill
          priority
          sizes="100vw"
          className="bro-hero-bg"
        />
        <div className="bro-hero-overlay" aria-hidden="true" />
        <div className="bro-hero-layout">
          <div className="bro-hero-inner">
            <nav className="bro-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/resources">Resources</Link>
              <span>/</span>
              <span className="bro-breadcrumb-current">Brochures</span>
            </nav>
            <p className="bro-eyebrow">
              <BrochureFolderIcon />
              Resource Library
            </p>
            <h1>Our Brochures</h1>
            <p className="bro-hero-intro">
              Download detailed brochures to learn more about our services, solutions and how we
              can help protect what matters most.
            </p>
            <ul className="bro-hero-features">
              {brochureHeroFeatures.map((feature) => (
                <li key={feature.title}>
                  <span className="bro-hero-feature-icon" aria-hidden="true">
                    <BrochureHeroFeatureIcon icon={feature.icon} />
                  </span>
                  <div>
                    <strong>{feature.title}</strong>
                    <span>{feature.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bro-hero-visual" aria-hidden="true">
            <div className="bro-hero-stack">
              <div className="bro-hero-stack-card bro-hero-stack-card--back" />
              <div className="bro-hero-stack-card bro-hero-stack-card--mid" />
              <div className="bro-hero-stack-card bro-hero-stack-card--front">
                <Image
                  src={heroBrochureImage}
                  alt=""
                  fill
                  sizes="280px"
                  className="bro-hero-stack-image"
                />
                <div className="bro-hero-stack-label">
                  <span>HELIX</span>
                  <p>Protecting People. Securing Futures.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bro-intro">
        <div className="bro-intro-inner">
          <p>
            Each brochure summarises a service area in a couple of pages — what is covered, building
            types, standards we work to, and what an integrated Helix service plan looks like. They
            make conversations easier, not replace them.
          </p>
        </div>
      </section>

      <section className="bro-grid-section" aria-labelledby="bro-grid-heading">
        <div className="bro-grid-inner">
          <h2 id="bro-grid-heading">Explore Our Service Brochures</h2>
          <p className="bro-grid-intro">
            Download the overview that matches your needs, or request a tailored summary from our
            team.
          </p>
          <div className="bro-cards-grid">
            {brochures.map((brochure) => (
              <article key={brochure.id} className={`bro-card bro-card--${brochure.tone}`}>
                <div className="bro-card-top">
                  <span className="bro-card-icon" aria-hidden="true">
                    <BrochureTypeIcon icon={brochure.icon} />
                  </span>
                  <div className="bro-card-copy">
                    <h3>{brochure.title}</h3>
                    <p>{brochure.description}</p>
                    <Link className="bro-card-service-link" href={brochure.serviceHref}>
                      View service area
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
                <div className="bro-card-cover-wrap">
                  <div className="bro-card-cover">
                    <Image
                      src={brochure.coverImage}
                      alt={brochure.coverAlt}
                      fill
                      sizes="200px"
                      className="bro-card-cover-image"
                    />
                    <span className="bro-card-pdf-badge">PDF</span>
                  </div>
                </div>
                <div className="bro-card-actions">
                  <a
                    className="bro-btn-download"
                    href={brochure.pdfUrl}
                    download={brochure.pdfFilename}
                  >
                    <BrochureDownloadIcon />
                    Download PDF
                  </a>
                  <Link className="bro-btn-request" href="/book-now">
                    Request copy
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bro-coverage" aria-labelledby="bro-coverage-heading">
        <div className="bro-coverage-inner">
          <h2 id="bro-coverage-heading">What each brochure typically covers</h2>
          <ul className="bro-coverage-list">
            {brochureCoveragePoints.map((point) => (
              <li key={point.label}>
                <strong>{point.label}</strong>
                <span>{point.text}</span>
              </li>
            ))}
          </ul>
          <p className="bro-coverage-foot">
            Brochures work well for internal reviews, procurement comparisons and early planning. For
            a tailored summary for your property type,{" "}
            <Link href="/book-now">let us know</Link> and we will put one together.
          </p>
        </div>
      </section>

      <section className="bro-help" aria-labelledby="bro-help-heading">
        <div className="bro-help-inner">
          <div className="bro-help-icon" aria-hidden="true">
            <BrochureSupportIcon />
          </div>
          <div className="bro-help-copy">
            <h2 id="bro-help-heading">Need Help Choosing the Right Brochure?</h2>
            <p>
              Our team can help you find the right information for your needs or answer any
              questions you may have.
            </p>
          </div>
          <div className="bro-help-actions">
            <a className="bro-btn-primary" href="tel:07359589933">
              Call 07359 589933
            </a>
            <a className="bro-btn-outline" href="mailto:hello@helixfs.co.uk">
              Email our team
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
