import Image from "next/image";
import Link from "next/link";
import { leadershipTeam, teamAboutChecks, teamValues } from "../lib/team-data";
import { LinkedInIcon, TeamCheckIcon, TeamMembersIcon, TeamValueIcon } from "./TeamIcons";

const heroImage = "/images/001 - FIRE SYSTEMS/001 - Fire Alarm Systems/Modern corporate office lobby.png";
const aboutImage = "/images/000 - HOME PAGE/Engineer in the field.png";

export function OurTeamPage() {
  return (
    <main className="our-team-page">
      <section className="team-hero">
        <Image
          src={heroImage}
          alt="Helix team in a professional environment"
          fill
          priority
          sizes="100vw"
          className="team-hero-bg"
        />
        <div className="team-hero-overlay" aria-hidden="true" />
        <div className="team-hero-inner">
          <nav className="team-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/about">About</Link>
            <span>/</span>
            <span className="team-breadcrumb-current">Our Team</span>
          </nav>
          <p className="team-eyebrow">Our Team</p>
          <h1>The People Behind Your Safety</h1>
          <p className="team-hero-intro">
            Helix combines field engineers, technical managers, service coordinators and account
            support so clients are backed by more than a single point of contact — with no
            sub-contracted handovers and no compromised accountability.
          </p>
          <div className="team-hero-actions">
            <Link className="team-btn-primary" href="/book-now">
              Get in touch
              <span aria-hidden="true">→</span>
            </Link>
            <Link className="team-btn-outline" href="/fire-systems">
              View our services
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="team-values-strip" aria-label="Core values">
        <div className="team-values-grid">
          {teamValues.map((value) => (
            <article key={value.title} className={`team-value-card team-value-card--${value.tone}`}>
              <div className="team-value-icon" aria-hidden="true">
                <TeamValueIcon icon={value.icon} />
              </div>
              <h2>{value.title}</h2>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="team-about">
        <div className="team-about-grid">
          <div className="team-about-copy">
            <p className="team-section-eyebrow">About Our Team</p>
            <h2>Experts Dedicated to Your Protection</h2>
            <p>
              Many fire and security companies look big from the outside but turn out to be little
              more than a sales operation feeding work to sub-contractors. Helix is structured
              differently — we employ our own engineers, technical managers and coordinators.
            </p>
            <p>
              That means the person who surveyed your building can be the same person who installs
              and maintains the systems. Decisions about your property are made by people who
              actually know it, and accountability stays in one place when something needs sorting.
            </p>
            <ul className="team-checklist">
              {teamAboutChecks.map((item) => (
                <li key={item}>
                  <TeamCheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="team-about-visual">
            <div className="team-about-image-wrap">
              <Image
                src={aboutImage}
                alt="Helix engineer working on site"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className="team-about-image"
              />
            </div>
            <div className="team-about-badge">
              <span className="team-about-badge-icon" aria-hidden="true">
                <TeamMembersIcon />
              </span>
              <div>
                <strong>In-house team</strong>
                <span>Fire, security &amp; compliance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-structure">
        <div className="team-structure-inner">
          <h2>How the team is structured</h2>
          <p>
            Quality comes from combining field experience with strong coordination behind the
            scenes. Engineers are supported by technical managers who handle design complexity and
            compliance interpretation, and by coordinators who handle scheduling and documentation
            so engineers can focus on the work.
          </p>
          <div className="team-callout">
            <p className="team-callout-label">Quality assurance</p>
            <h3>Every installation reviewed before handover</h3>
            <p>
              Helix operates a structured quality review process. Larger or more complex
              installations are reviewed by a technical manager before being signed off and handed
              over to the client — a step many contractors do not bother with.
            </p>
          </div>
        </div>
      </section>

      <section className="team-leadership">
        <div className="team-leadership-header">
          <p className="team-section-eyebrow team-section-eyebrow--center">Meet Our Team</p>
          <h2>Leadership You Can Rely On</h2>
        </div>
        <div className="team-leadership-grid">
          {leadershipTeam.map((member) => (
            <article key={member.role} className="team-member-card">
              <div className="team-member-photo">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 900px) 100vw, 320px"
                  className="team-member-image"
                />
              </div>
              <div className="team-member-body">
                <h3>{member.name}</h3>
                <p className="team-member-role">{member.role}</p>
                <p className="team-member-bio">{member.bio}</p>
                {member.linkedIn ? (
                  <a
                    className="team-member-linkedin"
                    href={member.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <LinkedInIcon />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="team-careers">
        <div className="team-careers-inner">
          <h2>Want to join us?</h2>
          <p>
            Helix is built around quality delivery, responsive support and strong technical
            standards. If that sounds like the kind of place you would want to work, have a look at
            our Careers page — we are always interested in hearing from engineers, coordinators and
            support professionals.
          </p>
          <Link className="team-btn-primary team-btn-primary--inline" href="/about/careers">
            View careers
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="team-cta-banner" aria-labelledby="team-cta-heading">
        <div className="team-cta-shell">
          <div className="team-cta-visual">
            <Image
              src="/images/000 - HOME PAGE/Contact Helix.png"
              alt="Helix support team member"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className="team-cta-image"
            />
          </div>
          <div className="team-cta-copy">
            <h2 id="team-cta-heading">Let&apos;s Work Together for a Safer Tomorrow</h2>
            <p>
              Our team is ready to support you with fire safety, security and compliance. Get in
              touch for expert advice, a free consultation or a no-obligation quote.
            </p>
            <div className="team-cta-actions">
              <Link className="team-btn-primary" href="/book-now">
                Contact our team
                <span aria-hidden="true">→</span>
              </Link>
              <Link className="team-btn-outline team-btn-outline--on-blue" href="/book-now">
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
