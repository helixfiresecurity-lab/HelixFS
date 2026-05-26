import Link from "next/link";
import type { CSSProperties } from "react";
import { HeroSlider } from "./components/HeroSlider";
import { HomeCoreCommitments } from "./components/HomeCoreCommitments";
import { HomeServiceCards } from "./components/HomeServiceCards";
import { HomeValuesAccordion } from "./components/HomeValuesAccordion";
import { HomeChatWidget } from "./components/HomeChatWidget";
import { PrimaryServicesMobileCarousel } from "./components/PrimaryServicesMobileCarousel";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

type FireMenu = {
  type: "fire";
  featureCards: {
    title: string;
    text: string;
    active?: boolean;
  }[];
  links: string[];
};

type ListMenu = {
  type: "list";
  links: string[];
};

type NavItem = {
  label: string;
  href: string;
  menu?: FireMenu | ListMenu;
};

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  {
    label: "Fire Systems",
    href: "#services",
    menu: {
      type: "fire",
      featureCards: [
        {
          title: "Fire Detection",
          text: "Indentifying potential fire hazards.",
          active: true,
        },
        {
          title: "Fire Suppression",
          text: "Extinguish fires and minimise damage.",
        },
        {
          title: "Inspection and Protection",
          text: "Assessments and ongoing maintenance.",
        },
      ],
      links: [
        "Fire Alarm Systems",
        "Gent Fire Alarm Systems",
        "Notifier Fire Alarm Systems",
        "Evacuation Alert Systems",
      ],
    },
  },
  {
    label: "Security",
    href: "#security",
    menu: {
      type: "list",
      links: [
        "CCTV Systems",
        "Intruder Alarm Monitoring",
        "Intruder Alarm",
        "Access Control Systems",
      ],
    },
  },
  {
    label: "Resources",
    href: "#resources",
    menu: {
      type: "list",
      links: [
        "Your Responsibilities",
        "Case Studies",
        "Brochures",
        "Downloads",
        "News",
        "FAQs",
      ],
    },
  },
  {
    label: "Our Company",
    href: "#our-company",
    menu: {
      type: "list",
      links: [
        "Policies",
        "Our Accreditations & Memberships",
        "Frameworks",
        "Videos",
        "Careers",
        "Acquisitions",
        "Alarm Receiving Centre (ARC)",
        "Fire and Security Training Academy",
        "Consultancy",
      ],
    },
  },
];

type ServiceIconKind =
  | "alarm"
  | "sprinkler"
  | "emergency"
  | "extinguisher"
  | "riser"
  | "kitchen"
  | "cctv"
  | "keypad";

type PrimaryService = {
  title: string;
  description: string;
  iconSrc: string;
  tone: "red" | "blue" | "green";
  href: string;
};

const primaryServices: PrimaryService[] = [
  {
    title: "Fire Alarm Systems",
    description: "Design, installation and maintenance",
    tone: "red",
    iconSrc: "/service-icons/fire-alarm-systems.svg",
    href: "/fire-systems/fire-alarm-systems",
  },
  {
    title: "AOV Smoke Ventilation",
    description: "Smoke control for safer escape routes",
    tone: "red",
    iconSrc: "/service-icons/aov-smoke-ventilation-systems.svg",
    href: "/fire-systems/aov-smoke-ventilation-systems",
  },
  {
    title: "CCTV Surveillance",
    description: "Camera coverage across your site",
    tone: "blue",
    iconSrc: "/service-icons/cctv-surveillance.svg",
    href: "/security/cctv-surveillance",
  },
  {
    title: "Intruder Alarms",
    description: "Detection built around the site",
    tone: "blue",
    iconSrc: "/service-icons/intruder-alarms-new.svg",
    href: "/security/intruder-alarms",
  },
  {
    title: "Access Control",
    description: "Manage who can enter and when",
    tone: "blue",
    iconSrc: "/service-icons/access-control.svg",
    href: "/security/access-control",
  },
  {
    title: "Intercom Systems",
    description: "Audio, video and access-linked",
    tone: "blue",
    iconSrc: "/service-icons/intercom-systems.svg",
    href: "/security/intercom-systems",
  },
  {
    title: "Emergency Lighting",
    description: "Safe evacuation when it matters most",
    tone: "red",
    iconSrc: "/service-icons/emergency-lighting-new.svg",
    href: "/emergency-systems/emergency-lighting",
  },
  {
    title: "Wi-Fi, Network & IP",
    description: "Reliable connected infrastructure",
    tone: "blue",
    iconSrc: "/service-icons/wi-fi-network-ip-solutions.svg",
    href: "/smart-systems/wi-fi-network-ip-solutions",
  },
  {
    title: "Certification & Compliance",
    description: "Documentation and records",
    tone: "green",
    iconSrc: "/service-icons/certification-compliance.svg",
    href: "/compliance/certification-compliance",
  },
  {
    title: "Safety Inspections & Testing",
    description: "Proactive fault identification",
    tone: "green",
    iconSrc: "/service-icons/safety-inspections-testing.svg",
    href: "/compliance/safety-inspections-testing",
  },
] as const;

type ValueIconKind = "reliable" | "trusted" | "knowledgeable" | "speed" | "innovative" | "safety";

const companyValues: {
  title: string;
  icon: ValueIconKind;
  points: string[];
}[] = [
  {
    title: "Dependable Support",
    icon: "reliable",
    points: [
      "We are committed to being there when our customers need us most. From urgent callouts to planned maintenance, Helix provides a clear, reliable and professional service all year round.",
      "We take time to understand each property, system and responsibility so our support is practical, well organised and built around the customer’s needs.",
    ],
  },
  {
    title: "Trust & Responsibility",
    icon: "trusted",
    points: [
      "We believe safety work should be carried out with honesty, care and accountability. Our team focuses on doing the right thing, keeping customers informed and helping them meet their fire, security and compliance responsibilities.",
      "We aim to build long term relationships through clear communication, consistent workmanship and dependable aftercare.",
    ],
  },
  {
    title: "Technical Expertise",
    icon: "knowledgeable",
    points: [
      "Our engineers and support team bring practical knowledge across fire systems, security systems, emergency systems and compliance support.",
      "We continue to improve our skills, processes and system knowledge so customers receive advice and service they can trust.",
    ],
  },
  {
    title: "Fast Response",
    icon: "speed",
    points: [
      "When safety or security systems need attention, speed matters. Helix works to respond quickly, resolve issues efficiently and reduce disruption for homes, businesses and managed properties.",
      "Our service approach is built around clear updates, practical solutions and responsive customer support.",
    ],
  },
  {
    title: "Smarter Solutions",
    icon: "innovative",
    points: [
      "We use modern systems, joined up thinking and efficient processes to make fire and security management easier for our customers.",
      "Where possible, we recommend smarter solutions that save time, improve visibility and support better long term system performance.",
    ],
  },
  {
    title: "Safety First",
    icon: "safety",
    points: [
      "Every service we provide is guided by the safety of people, property and daily operations.",
      "From installation to maintenance and compliance records, our focus is always on protecting what matters and helping customers stay prepared.",
    ],
  },
];

function ServiceIcon({ kind }: { kind: ServiceIconKind }) {
  switch (kind) {
    case "alarm":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M18 33a14 14 0 1 1 28 0v6H18z" fill="none" stroke="currentColor" strokeWidth="3.5" />
          <path d="M25 43h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3.5" />
          <path d="M30 49h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3.5" />
          <circle cx="32" cy="27" r="3.5" fill="currentColor" />
          <path d="M14 30h5M45 30h5M20 19l4 3M44 19l-4 3" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3.5" opacity=".35" />
        </svg>
      );
    case "sprinkler":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M18 18h28v6H18z" fill="currentColor" />
          <path d="M30 24h4v9h-4z" fill="currentColor" />
          <path d="M21 39l-3 5M29 39l-1 7M35 39l1 7M43 39l3 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3.5" />
          <path d="M25 33h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3.5" opacity=".35" />
        </svg>
      );
    case "emergency":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M14 42l10 6 6-11h20V18H34l-8 8h-7l-5 8" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="3.5" />
          <circle cx="32" cy="17" r="4.5" fill="currentColor" />
          <path d="M44 28h9M49 24l5 4-5 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
        </svg>
      );
    case "extinguisher":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M28 14h8v7h-8z" fill="none" stroke="currentColor" strokeWidth="3.5" />
          <path d="M24 21h16v29H24z" fill="none" stroke="currentColor" strokeWidth="3.5" />
          <path d="M36 17h8a4 4 0 0 1 4 4v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3.5" />
          <path d="M30 26v18" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3.5" opacity=".35" />
        </svg>
      );
    case "riser":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M16 44h32" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3.5" />
          <path d="M22 44l10-20 10 20" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="3.5" />
          <path d="M27 24h10" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3.5" />
        </svg>
      );
    case "kitchen":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M18 20h26v6H18z" fill="currentColor" />
          <path d="M27 12h8v8h-8z" fill="currentColor" />
          <path d="M22 33c0 8-3 11-3 17M32 33c0 8-3 11-3 17M42 33c0 8-3 11-3 17" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3.5" />
        </svg>
      );
    case "cctv":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M14 27l24-10 8 10-24 10z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="3.5" />
          <path d="M42 23l8 11" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3.5" />
          <path d="M23 39h24" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3.5" />
        </svg>
      );
    case "keypad":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M18 14h28v18H18z" fill="none" stroke="currentColor" strokeWidth="3.5" />
          <circle cx="25" cy="21" r="2" fill="currentColor" />
          <circle cx="32" cy="21" r="2" fill="currentColor" />
          <circle cx="39" cy="21" r="2" fill="currentColor" />
          <path d="M28 36l7 7 13-14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
        </svg>
      );
  }
}

function ValueIcon({ kind }: { kind: ValueIconKind }) {
  switch (kind) {
    case "reliable":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M32 8l18 7v15c0 10-7 19-18 26C21 49 14 40 14 30V15z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
          <circle cx="32" cy="29" r="9" fill="none" stroke="currentColor" strokeWidth="4" />
          <path d="M32 23v7l4 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
        </svg>
      );
    case "trusted":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M18 33l8-8c2-2 6-2 8 0l12 12c2 2 2 6 0 8l-4 4c-2 2-6 2-8 0l-16-16c-2-2-2-6 0-8z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
          <path d="M28 22l6-6c2-2 6-2 8 0l10 10c2 2 2 6 0 8l-6 6" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
        </svg>
      );
    case "knowledgeable":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M24 10l3 5 6 1-4 5 1 6-6-3-6 3 1-6-4-5 6-1zM42 28l4 7 8 1-6 6 2 8-8-4-8 4 2-8-6-6 8-1z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
        </svg>
      );
    case "speed":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M14 42a18 18 0 1 1 36 0H14z" fill="none" stroke="currentColor" strokeWidth="4" />
          <path d="M32 42l11-12" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
        </svg>
      );
    case "innovative":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M32 10a14 14 0 0 1 9 25v7H23v-7a14 14 0 0 1 9-25z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
          <path d="M25 48h14M26 54h12" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
          <path d="M32 19v13M25 24l7 8 7-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </svg>
      );
    case "safety":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M32 6 L12 14 V26 C12 40 20 52 32 58 C44 52 52 40 52 26 V14 L32 6 Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
          <path d="M24 32 L29 37 L41 25" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

export default function Home() {
  return (
    <main className="site-shell">
      <SiteHeader />

      <HeroSlider />

      <section className="services-overview" id="services">
        <div className="services-intro section-intro section-intro--center">
          <h2>Integrated Delivery from Consultation to Completion</h2>
          <p>
            We deliver fully integrated fire protection, security, and compliance solutions through one
            accountable team — from initial survey and design through to installation, maintenance,
            certification, and ongoing support.
          </p>
        </div>

        <HomeServiceCards />
      </section>

      <section className="primary-services-section" id="our-company">
        <div className="primary-services-intro section-intro">
          <h2>Our Primary Services</h2>
          <p>
            Providing complete fire safety, security and compliance services — from fire alarm installation,
            servicing and monitoring to CCTV, access control, intruder alarms, emergency systems
            and certification — all delivered by our in-house team.
          </p>
        </div>

        {/* Desktop View */}
        <div className="primary-services-grid !hidden md:!grid">
          {primaryServices.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className={`primary-service-card tone-${service.tone}`}
            >
              <span className="card-launch" aria-hidden="true" />
              <span
                className="service-icon"
                aria-hidden="true"
                style={{ "--icon-mask": `url('${service.iconSrc}')` } as CSSProperties}
              />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Link>
          ))}
        </div>

        <div className="block md:hidden">
          <PrimaryServicesMobileCarousel services={[...primaryServices]} />
        </div>
      </section>

      <section className="compliance-feature-section" aria-labelledby="compliance-feature-heading">
        <div className="compliance-feature-shell">
          <article className="compliance-feature-card">
            <div className="compliance-feature-copy">
              <span className="compliance-kicker">For compliance</span>
              <h2 id="compliance-feature-heading">Your Responsibility to Fire Safety</h2>
              <p>
                Fire risk assessments help you understand the hazards, actions and evidence needed
                to keep your premises compliant.
              </p>
              <Link className="compliance-button" href="/resources/your-responsibilities">
                Your Responsibilities
                <span className="homepage-inline-arrow" aria-hidden="true" />
              </Link>
            </div>
            <div className="compliance-feature-media">
              <img
                className="compliance-risk-image"
                src="/images/000 - HOME PAGE/Undertaking fire risk assessment.png"
                alt="Undertaking a fire risk assessment on site"
              />
              <div className="compliance-media-card" aria-hidden="true">
                <span>Live checklist</span>
                <strong>Fire risk actions</strong>
                <ul>
                  <li>Hazards reviewed</li>
                  <li>Evidence captured</li>
                  <li>Next service logged</li>
                </ul>
              </div>
            </div>
            <div className="compliance-feature-status" aria-label="Compliance status">
              <span aria-hidden="true" />
              <strong>Audit-ready</strong>
              <em>Records, actions and evidence in one place</em>
            </div>
            <div className="compliance-feature-note compliance-feature-note--assessment">
              <span>01</span>
              <strong>100%</strong>
              <p>Clear hazard actions and responsibility records.</p>
            </div>
            <div className="compliance-feature-note compliance-feature-note--records">
              <span>02</span>
              <strong>Order 2005</strong>
              <p>Evidence organised for compliance reviews.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="values-section">
        <div className="values-shell section-intro">
          <h2>Our Values</h2>
          <HomeValuesAccordion
            items={companyValues.map((value) => ({
              title: value.title,
              icon: <ValueIcon kind={value.icon} />,
              points: value.points,
            }))}
          />
        </div>
      </section>

      <HomeCoreCommitments />

      {/* <HomeTestimonials /> */}

      <section className="closing-cta-section">
        <div className="closing-cta-shell">
          <article className="closing-cta-metric-card">
            <span className="closing-cta-metric">24/7</span>
            <h2>Contact Our Team Today</h2>
            <p>
              Helix Fire &amp; Security lead the way in the industry by offering your business a
              compliant, reliable and consistent one-stop-shop for fire and security solutions in the UK.
            </p>
            <span className="closing-cta-brand">Helix</span>
          </article>

          <div className="closing-cta-visual closing-cta-visual--contact" aria-hidden="true" />

          <article className="closing-cta-contact-card">
            <span className="closing-cta-mini-brand">Helix</span>
            <h2>Get in touch</h2>
            <p>Contact our team today to discover how we can help protect your property and keep your systems compliant.</p>
            <a className="closing-cta-primary" href="/book-now">
              Contact us
              <span className="homepage-inline-arrow" aria-hidden="true" />
            </a>
          </article>
        </div>
      </section>

      <SiteFooter />
      <HomeChatWidget />
    </main>
  );
}
