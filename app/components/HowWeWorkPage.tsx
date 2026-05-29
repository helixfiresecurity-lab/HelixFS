import Image from "next/image";
import Link from "next/link";
import {
  clientExpectations,
  processBenefits,
  processPillars,
  processSteps,
} from "../lib/how-we-work-data";
import {
  ProcessBenefitIcon,
  ProcessPillarIcon,
  ProcessStepIcon,
} from "./HowWeWorkIcons";

const heroImage =
  "/images/001 - FIRE SYSTEMS/001 - Fire Alarm Systems/Modern corporate office lobby.png";

export function HowWeWorkPage() {
  return (
    <main className="how-we-work-page">
      <section className="hww-hero">
        <Image
          src={heroImage}
          alt="Helix technicians working on a fire alarm control panel"
          fill
          priority
          sizes="100vw"
          className="hww-hero-bg"
        />
        <div className="hww-hero-overlay" aria-hidden="true" />
        <div className="hww-hero-inner">
          <nav className="hww-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/about">About</Link>
            <span>/</span>
            <span className="hww-breadcrumb-current">How We Work</span>
          </nav>
          <p className="hww-eyebrow">Our Process</p>
          <h1>How We Work With You</h1>
          <p className="hww-hero-intro">
            A simple, proven process that ensures the right safety and security solutions for your
            building, business and responsibilities — with one team accountable at every step.
          </p>
          <div className="hww-hero-actions">
            <Link className="hww-btn-primary" href="/book-now">
              Get in touch
              <span aria-hidden="true">→</span>
            </Link>
            <Link className="hww-btn-outline" href="/fire-systems">
              View our services
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="hww-pillars-strip" aria-label="How we deliver">
        <div className="hww-pillars-grid">
          {processPillars.map((pillar) => (
            <article key={pillar.title} className={`hww-pillar-card hww-pillar-card--${pillar.tone}`}>
              <div className="hww-pillar-icon" aria-hidden="true">
                <ProcessPillarIcon icon={pillar.icon} />
              </div>
              <h2>{pillar.title}</h2>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="hww-process" aria-labelledby="hww-process-heading">
        <div className="hww-process-inner">
          <p className="hww-section-eyebrow hww-section-eyebrow--center">Our Process</p>
          <h2 id="hww-process-heading">A Clear 6-Step Process</h2>
          <p className="hww-process-intro">
            Every Helix project follows the same structured path — from first conversation through
            survey, design, installation, commissioning and ongoing support.
          </p>
          <div className="hww-steps-grid">
            {processSteps.map((step) => (
              <article key={step.step} className={`hww-step-card hww-step-card--${step.tone}`}>
                <div className="hww-step-top">
                  <span className="hww-step-number">{step.step}</span>
                  <div className="hww-step-icon" aria-hidden="true">
                    <ProcessStepIcon icon={step.icon} />
                  </div>
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hww-why" aria-labelledby="hww-why-heading">
        <div className="hww-why-grid">
          <div className="hww-why-copy">
            <p className="hww-section-eyebrow">Why Our Process Works</p>
            <h2 id="hww-why-heading">Built for Safety. Designed for You.</h2>
            <p>
              Most fire and security work fails not in the engineering, but in the handoffs. Helix
              removes those gaps — the same team that surveys your property designs the system,
              installs it, commissions it and maintains it.
            </p>
            <p>
              No translation losses, no finger-pointing and no missing paperwork. Just one
              accountable partner from consultation through ongoing support.
            </p>
            <Link className="hww-btn-primary hww-btn-primary--on-light" href="/about">
              Learn more about us
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="hww-benefits-grid">
            {processBenefits.map((benefit) => (
              <article
                key={benefit.title}
                className={`hww-benefit-card hww-benefit-card--${benefit.tone}`}
              >
                <div className="hww-benefit-icon" aria-hidden="true">
                  <ProcessBenefitIcon icon={benefit.icon} />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hww-expectations" aria-labelledby="hww-expectations-heading">
        <div className="hww-expectations-inner">
          <h2 id="hww-expectations-heading">What we expect in return</h2>
          <p>
            Long-term partnerships work both ways. We work best with clients who treat fire and
            security as worth investing in — not the bare minimum to satisfy an inspector.
          </p>
          <ul className="hww-expectations-list">
            {clientExpectations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="hww-expectations-foot">
            The first step is always a conversation, followed by a no-obligation survey. From there
            we put together a clear proposal — with no pressure until you are ready.
          </p>
        </div>
      </section>

      <section className="hww-cta-banner" aria-labelledby="hww-cta-heading">
        <div className="hww-cta-shell">
          <div className="hww-cta-visual">
            <Image
              src="/images/000 - HOME PAGE/Contact Helix.png"
              alt="Helix support team member"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className="hww-cta-image"
            />
          </div>
          <div className="hww-cta-copy">
            <h2 id="hww-cta-heading">Ready to Get Started?</h2>
            <p>
              Our team is ready to support you with fire safety, security and compliance. Get in
              touch for expert advice, a free consultation or a no-obligation quote.
            </p>
            <div className="hww-cta-actions">
              <Link className="hww-btn-primary" href="/book-now">
                Contact our team
                <span aria-hidden="true">→</span>
              </Link>
              <Link className="hww-btn-outline hww-btn-outline--on-blue" href="/book-now">
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
