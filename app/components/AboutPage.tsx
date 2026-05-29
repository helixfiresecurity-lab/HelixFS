import Image from "next/image";
import Link from "next/link";
import {
  aboutCertifications,
  aboutClientTypes,
  aboutPillars,
  aboutServiceCards,
  aboutStats,
  aboutValues,
} from "../lib/about-data";
import { AboutPillarIcon, AboutStatIcon, AboutValueIcon } from "./AboutIcons";

const heroImage =
  "/images/001 - FIRE SYSTEMS/001 - Fire Alarm Systems/Fire Alarm Panel 1 - Shown internally only - fixed to wall - mid height.webp";
const storyImage = "/images/001 - FIRE SYSTEMS/001 - Fire Alarm Systems/Modern corporate office lobby.png";

export function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <Image
          src={heroImage}
          alt="Helix engineers working on building safety systems"
          fill
          priority
          sizes="100vw"
          className="about-hero-bg"
        />
        <div className="about-hero-overlay" aria-hidden="true" />
        <div className="about-hero-inner">
          <nav className="about-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span className="about-breadcrumb-current">About</span>
          </nav>
          <p className="about-eyebrow">About Helix</p>
          <h1>Protecting People. Securing Futures.</h1>
          <p className="about-hero-intro">
            Helix Fire &amp; Security Ltd was built around a simple frustration: property owners and
            managers should not have to chase five different contractors to keep their buildings
            safe and compliant. We do it all, in-house, with one point of accountability.
          </p>
          <div className="about-hero-actions">
            <Link className="about-btn-primary" href="/book-now">
              Get in touch
              <span aria-hidden="true">→</span>
            </Link>
            <Link className="about-btn-outline" href="/fire-systems">
              Our services
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="about-pillars-strip" aria-label="What defines Helix">
        <div className="about-pillars-grid">
          {aboutPillars.map((pillar) => (
            <article key={pillar.title} className={`about-pillar-card about-pillar-card--${pillar.tone}`}>
              <div className="about-pillar-icon">
                <AboutPillarIcon icon={pillar.icon} />
              </div>
              <h2>{pillar.title}</h2>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-story">
        <div className="about-story-grid">
          <div className="about-story-copy">
            <p className="about-section-eyebrow">Our Story</p>
            <h2>Built on Experience. Driven by Purpose.</h2>
            <p>
              The fire and security industry has a problem. Most building owners and facility
              managers juggle a fragmented mix of contractors — one for fire alarms, another for
              CCTV, a third for emergency lighting, a fourth for compliance documentation. When
              something goes wrong, no one takes responsibility.
            </p>
            <p>
              We started Helix to solve that. <strong>One team. One contact. One accountable partner</strong>{" "}
              covering everything from initial survey through to long-term maintenance and compliance
              reporting — a genuinely integrated in-house team that owns the outcome.
            </p>
            <div className="about-promise">
              <p className="about-promise-label">Our promise</p>
              <h3>If we fit it, we maintain it. If we maintain it, we document it.</h3>
              <p>
                Every system we touch is recorded, reportable and ready for compliance review. Nothing
                is left to memory or scattered across providers.
              </p>
            </div>
            <Link className="about-btn-secondary" href="/about/our-team">
              Meet our team
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="about-story-visual">
            <div className="about-story-image-wrap">
              <Image
                src={storyImage}
                alt="Helix office and brand environment"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className="about-story-image"
              />
            </div>
            <div className="about-stats-bar">
              {aboutStats.map((stat) => (
                <div key={stat.label} className="about-stat">
                  <span className="about-stat-icon">
                    <AboutStatIcon icon={stat.icon} />
                  </span>
                  <div>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-services">
        <div className="about-services-inner">
          <div className="about-services-header">
            <p className="about-section-eyebrow">What we do</p>
            <h2>Integrated fire, security and compliance</h2>
            <p>
              We deliver integrated fire protection, security and compliance services across the UK —
              all from one accountable in-house team. You get one person who knows your building, one
              set of records, one schedule of works and one place to call when something needs attention.
            </p>
          </div>
          <div className="about-services-grid">
            {aboutServiceCards.map((card) => (
              <article key={card.title} className={`about-service-card about-service-card--${card.tone}`}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-clients">
        <div className="about-clients-inner">
          <p className="about-section-eyebrow">Who we work with</p>
          <h2>Property types we support across the UK</h2>
          <p>
            Helix supports a broad range of property types — especially buildings where multiple
            safety, security and compliance disciplines need to be coordinated.
          </p>
          <ul>
            {aboutClientTypes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="about-clients-footnote">
            Helix is based in Leicester and delivers services across the UK from a single engineering
            base — keeping standards consistent, communication direct and accountability clear.
          </p>
        </div>
      </section>

      <section className="about-values-section">
        <div className="about-values-header">
          <p className="about-section-eyebrow about-section-eyebrow--center">Our Values</p>
          <h2>The Principles That Guide Us</h2>
        </div>
        <div className="about-values-grid">
          {aboutValues.map((value) => (
            <article key={value.title} className={`about-value-card about-value-card--${value.tone}`}>
              <div className="about-value-icon">
                <AboutValueIcon icon={value.icon} />
              </div>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-certifications">
        <div className="about-certifications-inner">
          <p className="about-section-eyebrow about-section-eyebrow--center">
            Certified. Accredited. Trusted.
          </p>
          <h2>Our Certifications &amp; Accreditations</h2>
          <div className="about-cert-grid">
            {aboutCertifications.map((cert) => (
              <article key={cert.name} className="about-cert-card">
                <Image src={cert.logo} alt={cert.name} width={120} height={48} className="about-cert-logo" />
                <span className="about-cert-name">{cert.name}</span>
              </article>
            ))}
          </div>
          <Link className="about-cert-link" href="/our-company/accreditations-memberships">
            View all certifications
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="about-cta-banner" aria-labelledby="about-cta-heading">
        <div className="about-cta-shell">
          <div className="about-cta-visual">
            <Image
              src="/images/000 - HOME PAGE/Contact Helix.png"
              alt="Helix support team member"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className="about-cta-image"
            />
          </div>
          <div className="about-cta-copy">
            <h2 id="about-cta-heading">Let&apos;s Build a Safer Future Together</h2>
            <p>
              Talk to Helix about your property — whether a single building or a wider portfolio. We
              will arrange a survey, review what is in place and give you a clear view of an
              integrated service plan.
            </p>
            <div className="about-cta-actions">
              <Link className="about-btn-primary" href="/book-now">
                Contact our team
                <span aria-hidden="true">→</span>
              </Link>
              <Link className="about-btn-outline about-btn-outline--on-blue" href="/book-now">
                Request a callback
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
