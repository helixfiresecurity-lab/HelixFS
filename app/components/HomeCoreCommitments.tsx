const stats = [
  { value: "5+", label: "Service disciplines" },
  { value: "1 team", label: "Fully in-house" },
  { value: "UK", label: "Nationwide coverage" },
  { value: "24/7", label: "Reactive support" },
];

const commitmentCards = [
  {
    title: "Survey & Assessment",
    body: "We visit your property, assess your specific risks, system requirements and compliance obligations, then provide clear, practical recommendations.",
    tone: "red",
    icon: "search",
  },
  {
    title: "Design & Installation",
    body: "Our engineers design tailored systems and install to the right standards, handling documentation, training and commissioning certificates.",
    tone: "blue",
    icon: "tools",
  },
  {
    title: "Ongoing Maintenance & Support",
    body: "Planned servicing, reactive callouts and compliance reporting are managed through one contact, so you always know the state of your systems.",
    tone: "blue",
    icon: "support",
  },
  {
    title: "Compliance & Reporting",
    body: "Documentation, service records and certification are delivered with your regulatory obligations in mind, keeping you audit-ready at all times.",
    tone: "red",
    icon: "report",
  },
];

type CommitmentIconKind = (typeof commitmentCards)[number]["icon"];

function CommitmentIcon({ kind }: { kind: CommitmentIconKind }) {
  switch (kind) {
    case "search":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M21.5 29.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
          <path d="m28 28 6.5 6.5" />
          <path d="M13.5 36.5h12" />
          <path d="M13.5 8.5h19a2 2 0 0 1 2 2v10.25" />
        </svg>
      );
    case "tools":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="m15 13 20 20" />
          <path d="m33 11 4 4-8.5 8.5-4-4L33 11Z" />
          <path d="M14.5 29.5 9 35l4 4 5.5-5.5" />
          <path d="M11.5 12.5 18 19" />
          <path d="m10 19 9-9" />
        </svg>
      );
    case "support":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M11 25v-3a13 13 0 0 1 26 0v3" />
          <path d="M15 23h-2.5a2.5 2.5 0 0 0-2.5 2.5v4a2.5 2.5 0 0 0 2.5 2.5H15v-9Z" />
          <path d="M33 23h2.5a2.5 2.5 0 0 1 2.5 2.5v4a2.5 2.5 0 0 1-2.5 2.5H33v-9Z" />
          <path d="M33 32c0 4-3.5 6-8.5 6H22" />
          <path d="M19 18a7 7 0 0 1 10 0" />
        </svg>
      );
    case "report":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M15 8.5h13l6 6v25H15a3 3 0 0 1-3-3v-25a3 3 0 0 1 3-3Z" />
          <path d="M28 8.5v7h6" />
          <path d="m18 28 4 4 8-9" />
          <path d="M18 19h8" />
        </svg>
      );
  }
}

export function HomeCoreCommitments() {
  return (
    <section className="commitments-section">
      <div className="commitments-shell">
        <div className="commitments-left">
          <div className="commitments-intro">
            <span className="commitments-eyebrow">Our core commitments</span>
            <h2>
              <span>One Accountable Team.</span>
              <span>Every Step.</span>
            </h2>
            <p>
              Helix delivers fire, security and compliance support with accountable service,
              practical expertise and clear communication from survey through aftercare.
            </p>
          </div>

          <div className="commitments-stats" aria-label="Helix service commitments">
            {stats.map((stat) => (
              <article className="commitments-stat-card" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="commitments-stack" aria-label="How Helix works">
          {commitmentCards.map((card) => (
            <article
              className={`commitments-stack-card commitments-stack-card--${card.tone}`}
              key={card.title}
            >
              <span className="commitments-card-icon" aria-hidden="true">
                <CommitmentIcon kind={card.icon} />
              </span>
              <div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
