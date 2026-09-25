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
  "/brochures/covers/all-services.png";

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
              Explore our complete service brochure and find the information tailored to your
              property, business or trade.
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bro-intro">
        <div className="bro-intro-inner">
          <p>
            Start with our all services overview, or choose a brochure written for your setting.
            Each one shows how Helix approaches the work and who to contact to discuss your needs.
          </p>
        </div>
      </section>

      <section className="bro-grid-section" aria-labelledby="bro-grid-heading">
        <div className="bro-grid-inner">
          <h2 id="bro-grid-heading">Explore All Nine Brochures</h2>
          <p className="bro-grid-intro">
            Select the overview that best matches your property, business or project.
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
                  </div>
                </div>
                <div className="bro-card-cover-wrap">
                  <div className="bro-card-cover">
                    <Image
                      src={brochure.coverImage}
                      alt={brochure.coverAlt}
                      fill
                      sizes="(max-width: 900px) 100vw, 130px"
                      className="bro-card-cover-image"
                    />
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
                    Book a survey
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bro-coverage" aria-labelledby="bro-coverage-heading">
        <div className="bro-coverage-inner">
          <h2 id="bro-coverage-heading">What you will find inside</h2>
          <ul className="bro-coverage-list">
            {brochureCoveragePoints.map((point) => (
              <li key={point.label}>
                <strong>{point.label}</strong>
                <span>{point.text}</span>
              </li>
            ))}
          </ul>
          <p className="bro-coverage-foot">
            Want to discuss a specific building or project?{" "}
            <Link href="/book-now">Book a survey</Link> with the Helix team.
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
