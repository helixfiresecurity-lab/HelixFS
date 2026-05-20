import Image from "next/image";
import Link from "next/link";

const principles = [
  { title: "Integrity", detail: "Doing what is right for every property and every client." },
  { title: "Honesty", detail: "Clear communication and obligations fulfilled without shortcuts." },
  { title: "Pride", detail: "Long-term relationships built on dependable delivery." },
];

const supportPoints = [
  "Dedicated technical managers overseeing standards and quality",
  "Experienced account handlers keeping projects coordinated",
  "Design and support teams helping systems stay practical and compliant",
];

export function HomeCoreCommitments() {
  return (
    <section className="commitments-section">
      <div className="commitments-shell">
        <div className="commitments-intro section-intro--center">
          <span className="commitments-eyebrow">Built around how we work</span>
          <h2>Our Core Commitments</h2>
          <p>
            Helix delivers fire, security and compliance support with a clear focus on accountable
            service, practical expertise and consistent communication from survey through aftercare.
          </p>
        </div>

        <div className="commitments-stats">
          <article className="commitments-stat-card">
            <p className="commitments-stat-kicker">We are here for our customers</p>
            <h3>
              <span>Responsive</span>
              <span>support</span>
            </h3>
            <p className="commitments-stat-copy">
              Planned maintenance, reactive support and clear updates when your systems need attention.
            </p>
          </article>

          <article className="commitments-stat-card commitments-stat-card--accent">
            <p className="commitments-stat-kicker">Nationwide delivery</p>
            <h3>
              <span>Skilled</span>
              <span>technicians</span>
            </h3>
            <p className="commitments-stat-copy">
              Field engineers and support teams working across the UK to keep buildings protected and compliant.
            </p>
          </article>
        </div>

        <article className="commitments-feature">
          <div className="commitments-feature-copy">
            <h3>Engineers you can rely on in the field</h3>
            <p>
              Our teams carry out inspections, installations and maintenance on site with the equipment,
              documentation and communication needed to keep properties safe and operational.
            </p>
            <Link className="commitments-link" href="/about/how-we-work">
              See how we work
              <span className="homepage-inline-arrow" aria-hidden="true" />
            </Link>
          </div>
          <div className="commitments-feature-media">
            <Image
              src="/images/004 - SMART SYSTEMS/004 - Portable Appliance Testing PAT/PAT testing in a factory.png"
              alt="Helix engineer carrying out on-site inspection work"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </article>

        <div className="commitments-principles">
          <p className="commitments-principles-label">We act with</p>
          <div className="commitments-principles-grid">
            {principles.map((item) => (
              <article key={item.title} className="commitments-principle-card">
                <h4>{item.title}</h4>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <article className="commitments-support">
          <h3>We support our technicians through</h3>
          <ul>
            {supportPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
