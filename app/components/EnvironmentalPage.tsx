import Image from "next/image";
import Link from "next/link";
import {
  envApproachChecks,
  envFutureGoals,
  envInitiatives,
  envPillars,
  envStats,
} from "../lib/environmental-data";
import {
  EnvCheckIcon,
  EnvInitiativeIcon,
  EnvLeafBadgeIcon,
  EnvPillarIcon,
  EnvShieldLeafIcon,
  EnvStatIcon,
} from "./EnvironmentalIcons";

const heroImage =
  "/images/000 - HOME PAGE/Modern corporate office lobby - hero slide.png";
const approachImage =
  "/images/004 - SMART SYSTEMS/001 - Smart Home Automation/Smart Home Automation in a modern home 1.png";
const commitmentImage =
  "/images/004 - SMART SYSTEMS/Image for main smart systems page - modern home scene.png";

export function EnvironmentalPage() {
  return (
    <main className="environmental-page">
      <section className="env-hero">
        <Image
          src={heroImage}
          alt="Modern building with Helix fire and security operations"
          fill
          priority
          sizes="100vw"
          className="env-hero-bg"
        />
        <div className="env-hero-overlay" aria-hidden="true" />
        <div className="env-hero-inner">
          <nav className="env-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/about">About</Link>
            <span>/</span>
            <span className="env-breadcrumb-current">Environmental Commitments</span>
          </nav>
          <p className="env-eyebrow">Our Commitment</p>
          <h1>Protecting Today. Preserving Tomorrow.</h1>
          <p className="env-hero-intro">
            We are committed to reducing our environmental impact through responsible practices,
            efficient operations and innovation — sustainability built into how we scope, service and
            manage every project we deliver.
          </p>
          <div className="env-hero-actions">
            <Link className="env-btn-primary env-btn-primary--green" href="#env-approach">
              Our approach
              <span aria-hidden="true">→</span>
            </Link>
            <Link className="env-btn-outline" href="/fire-systems">
              View our services
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="env-hero-badge" aria-hidden="true">
          <span className="env-hero-badge-icon">
            <EnvLeafBadgeIcon />
          </span>
          <p>
            Committed to a <strong>Greener Future</strong>
          </p>
        </div>
      </section>

      <section className="env-pillars-strip" aria-label="Environmental values">
        <div className="env-pillars-grid">
          {envPillars.map((pillar) => (
            <article key={pillar.title} className={`env-pillar-card env-pillar-card--${pillar.tone}`}>
              <div className="env-pillar-icon" aria-hidden="true">
                <EnvPillarIcon icon={pillar.icon} />
              </div>
              <h2>{pillar.title}</h2>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="env-approach" id="env-approach" aria-labelledby="env-approach-heading">
        <div className="env-approach-grid">
          <div className="env-approach-copy">
            <p className="env-section-eyebrow">Our Approach</p>
            <h2 id="env-approach-heading">Building a Safer Future for People and the Planet</h2>
            <p>
              The fire and security industry is full of vague environmental claims. Helix focuses on
              decisions that actually shape impact: how often vehicles are on the road, how systems
              are specified, how long installations remain useful, and how much waste comes from poor
              design or unnecessary callouts.
            </p>
            <p>
              We integrate sustainable practices into every project — efficient routing, durable
              installations, fewer repeat visits and systems that are maintainable over time.
            </p>
            <ul className="env-checklist">
              {envApproachChecks.map((item) => (
                <li key={item}>
                  <EnvCheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="env-approach-visual">
            <div className="env-approach-image-wrap">
              <Image
                src={approachImage}
                alt="Green sustainable environment"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className="env-approach-image"
              />
            </div>
            <div className="env-mission-card">
              <p className="env-mission-label">Our Mission</p>
              <p>
                To protect people and property through exceptional fire, security and compliance
                services — while caring for the environment through responsible, practical action.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="env-stats" aria-labelledby="env-stats-heading">
        <div className="env-stats-inner">
          <h2 id="env-stats-heading" className="env-stats-title">
            Our Environmental Impact
          </h2>
          <div className="env-stats-grid">
            {envStats.map((stat) => (
              <article key={stat.label} className={`env-stat-card env-stat-card--${stat.tone}`}>
                <div className="env-stat-icon" aria-hidden="true">
                  <EnvStatIcon icon={stat.icon} />
                </div>
                <p className="env-stat-value">{stat.value}</p>
                <p className="env-stat-label">{stat.label}</p>
              </article>
            ))}
          </div>
          <p className="env-stats-footnote">
            *Progress based on internal targets and ongoing initiatives.
          </p>
        </div>
      </section>

      <section className="env-initiatives" aria-labelledby="env-initiatives-heading">
        <div className="env-initiatives-inner">
          <p className="env-section-eyebrow env-section-eyebrow--center">What We Do</p>
          <h2 id="env-initiatives-heading">Our Sustainability Initiatives</h2>
          <div className="env-initiatives-grid">
            {envInitiatives.map((item) => (
              <article key={item.title} className="env-initiative-card">
                <div className="env-initiative-icon" aria-hidden="true">
                  <EnvInitiativeIcon icon={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="env-honest" aria-labelledby="env-honest-heading">
        <div className="env-honest-inner">
          <p className="env-honest-label">Honest position</p>
          <h2 id="env-honest-heading">Where we are — and where we are heading</h2>
          <p>
            Helix is a young business and we do not claim perfection. We do not yet hold ISO 14001
            certification, we still rely on combustion vehicles for most engineering visits, and there
            are aspects of our supply chain we are still working to improve. What we can promise is
            steady, deliberate progress — and an honest answer if you ask us where we are on something
            specific.
          </p>
          <ul className="env-future-list">
            {envFutureGoals.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="env-commitment" aria-labelledby="env-commitment-heading">
        <div className="env-commitment-grid">
          <div className="env-commitment-shield" aria-hidden="true">
            <EnvShieldLeafIcon />
          </div>
          <div className="env-commitment-copy">
            <h2 id="env-commitment-heading">A Commitment We Take Seriously</h2>
            <p>
              Sustainability is not a marketing line for Helix — it sits inside how we scope, service
              and manage projects over time. If your organisation needs supply-chain environmental
              data, we will provide what we can and be honest about what we cannot yet.
            </p>
            <p>
              Durable, maintainable systems that do not need replacing every five years are where real
              environmental progress lives — not in slogans.
            </p>
          </div>
          <div className="env-commitment-visual">
            <Image
              src={commitmentImage}
              alt="Lush green environment representing Helix sustainability"
              fill
              sizes="(max-width: 900px) 100vw, 360px"
              className="env-commitment-image"
            />
            <span className="env-commitment-logo">HELIX</span>
          </div>
        </div>
      </section>

      <section className="env-cta-banner" aria-labelledby="env-cta-heading">
        <div className="env-cta-shell">
          <div className="env-cta-visual">
            <Image
              src="/images/000 - HOME PAGE/Contact Helix.png"
              alt="Helix support team member"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className="env-cta-image"
            />
          </div>
          <div className="env-cta-copy">
            <h2 id="env-cta-heading">Let&apos;s Build a Safer, More Sustainable Future</h2>
            <p>
              Our team is ready to support you with fire safety, security and compliance — delivered
              responsibly. Get in touch for expert advice or a no-obligation consultation.
            </p>
            <div className="env-cta-actions">
              <Link className="env-btn-primary" href="/book-now">
                Contact our team
                <span aria-hidden="true">→</span>
              </Link>
              <Link className="env-btn-outline env-btn-outline--on-blue" href="/book-now">
                Request a callback
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="env-cta-leaf-bg" aria-hidden="true" />
      </section>
    </main>
  );
}
