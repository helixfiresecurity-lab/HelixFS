import Image from "next/image";
import Link from "next/link";
import {
  careerBenefits,
  careerPillars,
  careersEmail,
  openPositions,
  roleCategories,
  whatWeLookFor,
  whyJoinChecks,
} from "../lib/careers-data";
import {
  CareerBenefitIcon,
  CareerPillarIcon,
  CareersCheckIcon,
  CareersQuestionIcon,
  OpenPositionIcon,
} from "./CareersIcons";

const heroImage = "/images/000 - HOME PAGE/Contact Helix.png";
const whyJoinImage =
  "/images/001 - FIRE SYSTEMS/Image for main fire systems page - reception scene.png";

export function CareersPage() {
  return (
    <main className="careers-page">
      <section className="careers-hero">
        <Image
          src={heroImage}
          alt="Helix team members"
          fill
          priority
          sizes="100vw"
          className="careers-hero-bg"
        />
        <div className="careers-hero-overlay" aria-hidden="true" />
        <div className="careers-hero-inner">
          <nav className="careers-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/about">About</Link>
            <span>/</span>
            <span className="careers-breadcrumb-current">Careers</span>
          </nav>
          <p className="careers-eyebrow">Join Our Team</p>
          <h1>Build Your Career With Purpose</h1>
          <p className="careers-hero-intro">
            We are looking for passionate people who value safety, integrity and innovation. Helix
            is built around quality delivery and strong technical standards — and that depends on
            bringing in people who care about doing the job properly.
          </p>
          <div className="careers-hero-actions">
            <Link className="careers-btn-primary" href="#open-positions">
              View open positions
              <span aria-hidden="true">→</span>
            </Link>
            <Link className="careers-btn-outline" href="#why-join">
              Life at Helix
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="careers-pillars-strip" aria-label="Why work at Helix">
        <div className="careers-pillars-grid">
          {careerPillars.map((pillar) => (
            <article
              key={pillar.title}
              className={`careers-pillar-card careers-pillar-card--${pillar.tone}`}
            >
              <div className="careers-pillar-icon" aria-hidden="true">
                <CareerPillarIcon icon={pillar.icon} />
              </div>
              <h2>{pillar.title}</h2>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="careers-why" id="why-join" aria-labelledby="careers-why-heading">
        <div className="careers-why-grid">
          <div className="careers-why-copy">
            <p className="careers-section-eyebrow">Why Join Helix?</p>
            <h2 id="careers-why-heading">More Than a Job. A Career That Matters.</h2>
            <p>
              Most fire and security companies are either too small to offer real support, or too
              large to treat people as individuals. We are building something different — properly
              resourced engineers, genuine technical management, and varied work without burning
              out the team.
            </p>
            <p>
              We are a leader in integrated fire, security and compliance — and we want people who
              take pride in their work in a team that values accountability, development and clear
              communication.
            </p>
            <ul className="careers-checklist">
              {whyJoinChecks.map((item) => (
                <li key={item}>
                  <CareersCheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link className="careers-btn-secondary" href="#open-positions">
              Life at Helix
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="careers-why-visual">
            <div className="careers-why-image-wrap">
              <Image
                src={whyJoinImage}
                alt="Helix headquarters and service vehicles"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className="careers-why-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="careers-positions"
        id="open-positions"
        aria-labelledby="careers-positions-heading"
      >
        <div className="careers-positions-inner">
          <p className="careers-section-eyebrow careers-section-eyebrow--center">
            Open Positions
          </p>
          <h2 id="careers-positions-heading">Explore Current Opportunities</h2>
          <div className="careers-jobs-grid">
            {openPositions.map((job) => (
              <article key={job.title} className={`careers-job-card careers-job-card--${job.tone}`}>
                <div className="careers-job-icon" aria-hidden="true">
                  <OpenPositionIcon icon={job.icon} />
                </div>
                <h3>{job.title}</h3>
                <p className="careers-job-meta">
                  {job.location} • {job.type}
                </p>
                <a className="careers-job-link" href="/book-now">
                  Contact us
                  <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
          <a
            className="careers-btn-outline careers-btn-outline--wide"
            href={`mailto:${careersEmail}?subject=Careers%20enquiry`}
          >
            View all vacancies
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="careers-roles" aria-labelledby="careers-roles-heading">
        <div className="careers-roles-inner">
          <h2 id="careers-roles-heading">The kinds of roles we hire for</h2>
          <p className="careers-roles-intro">
            Specific qualifications matter less than attitude and willingness to learn — we will
            support training and development for the right person.
          </p>
          <div className="careers-roles-grid">
            {roleCategories.map((category) => (
              <article key={category.role} className="careers-role-card">
                <p className="careers-role-label">{category.role}</p>
                <h3>{category.title}</h3>
                <p>{category.text}</p>
                <ul>
                  {category.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="careers-look-for" aria-labelledby="careers-look-for-heading">
        <div className="careers-look-for-inner">
          <h2 id="careers-look-for-heading">What we look for</h2>
          <div className="careers-look-for-grid">
            {whatWeLookFor.map((item) => (
              <article key={item.title} className="careers-look-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="careers-benefits" aria-labelledby="careers-benefits-heading">
        <div className="careers-benefits-inner">
          <h2 id="careers-benefits-heading">Why join Helix</h2>
          <p className="careers-benefits-intro">
            We offer a different kind of working environment — variety from a multi-disciplinary
            in-house team, and a real say in how the company grows.
          </p>
          <div className="careers-benefits-grid">
            {careerBenefits.map((benefit) => (
              <article key={benefit.title} className="careers-benefit-card">
                <div className="careers-benefit-icon" aria-hidden="true">
                  <CareerBenefitIcon icon={benefit.icon} />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="careers-apply" aria-labelledby="careers-apply-heading">
        <div className="careers-apply-inner">
          <h2 id="careers-apply-heading">How to apply</h2>
          <p>
            We do not always have specific vacancies open, but we like to hear from good people
            early. Send a brief introduction, the kind of role you are interested in, and your CV
            if you have one.
          </p>
          <p>
            Email <a href={`mailto:${careersEmail}`}>{careersEmail}</a> with &ldquo;Careers
            enquiry&rdquo; in the subject line. We respond to every genuine application, usually
            within five working days.
          </p>
          <div className="careers-callout">
            <p className="careers-callout-label">A note on recruiters</p>
            <h3>We do not work with recruitment agencies</h3>
            <p>
              We hire directly. Please do not send speculative candidate CVs on commercial terms.
              Genuine direct enquiries from candidates are always welcome.
            </p>
          </div>
        </div>
      </section>

      <section className="careers-questions" aria-labelledby="careers-questions-heading">
        <div className="careers-questions-inner">
          <div className="careers-questions-icon" aria-hidden="true">
            <CareersQuestionIcon />
          </div>
          <div className="careers-questions-copy">
            <h2 id="careers-questions-heading">Have Questions?</h2>
            <p>We&apos;re here to help with careers enquiries, applications and what to expect.</p>
          </div>
          <div className="careers-questions-actions">
            <Link className="careers-btn-primary" href="/book-now">
              Contact our team
              <span aria-hidden="true">→</span>
            </Link>
            <a
              className="careers-btn-outline careers-btn-outline--on-navy"
              href={`mailto:${careersEmail}?subject=CV%20%E2%80%93%20Careers%20enquiry`}
            >
              Send your CV
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
