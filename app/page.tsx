import {
  Gauge,
  Handshake,
  Lightbulb,
  ShieldCheck,
  Headphones,
  Sparkles,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Helix | Fire, Security & Compliance",
  description:
    "Integrated fire protection, security and compliance services — design, installation, certification and ongoing support from one accountable UK team.",
};
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
  subtext: string;
  iconSrc: string;
  tone: "red" | "blue";
  href: string;
};

const primaryServices: PrimaryService[] = [
  {
    title: "Fire Alarm Systems",
    subtext: "Design, installation and maintenance",
    tone: "red",
    iconSrc: "/service-icons/fire-alarm-systems.svg",
    href: "/fire-systems/fire-alarm-systems",
  },
  {
    title: "AOV Smoke Ventilation",
    subtext: "Smoke control for safer escape routes",
    tone: "blue",
    iconSrc: "/service-icons/aov-smoke-ventilation-systems.svg",
    href: "/fire-systems/aov-smoke-ventilation-systems",
  },
  {
    title: "CCTV Surveillance",
    subtext: "Camera coverage across your site",
    tone: "red",
    iconSrc: "/service-icons/cctv-surveillance.svg",
    href: "/security/cctv-surveillance",
  },
  {
    title: "Intruder Alarms",
    subtext: "Detection built around the site",
    tone: "blue",
    iconSrc: "/service-icons/intruder-alarms-new.svg",
    href: "/security/intruder-alarms",
  },
  {
    title: "Access Control",
    subtext: "Manage who can enter and when",
    tone: "red",
    iconSrc: "/service-icons/access-control.svg",
    href: "/security/access-control",
  },
  {
    title: "Intercom Systems",
    subtext: "Audio, video and access-linked",
    tone: "blue",
    iconSrc: "/service-icons/intercom-systems.svg",
    href: "/security/intercom-systems",
  },
  {
    title: "Emergency Lighting",
    subtext: "Safe evacuation when it matters most",
    tone: "red",
    iconSrc: "/service-icons/emergency-lighting-new.svg",
    href: "/emergency-systems/emergency-lighting",
  },
  {
    title: "Wi-Fi, Network & IP",
    subtext: "Reliable connected infrastructure",
    tone: "blue",
    iconSrc: "/service-icons/wi-fi-network-ip-solutions.svg",
    href: "/smart-systems/wi-fi-network-ip-solutions",
  },
  {
    title: "Certification & Compliance",
    subtext: "Documentation and records",
    tone: "red",
    iconSrc: "/service-icons/certification-compliance.svg",
    href: "/compliance/certification-compliance",
  },
  {
    title: "Safety Inspections & Testing",
    subtext: "Proactive fault identification",
    tone: "blue",
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
  const props = { strokeWidth: 2.25, "aria-hidden": true as const };
  switch (kind) {
    case "reliable":
      return <Headphones size="100%" {...props} />;
    case "trusted":
      return <Handshake size="100%" {...props} />;
    case "knowledgeable":
      return <Sparkles size="100%" {...props} />;
    case "speed":
      return <Gauge size="100%" {...props} />;
    case "innovative":
      return <Lightbulb size="100%" {...props} />;
    case "safety":
      return <ShieldCheck size="100%" {...props} />;
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
                style={{ ["--icon-mask" as any]: `url('${service.iconSrc}')` }}
              />
              <h3>{service.title}</h3>
              <p className="primary-service-subtext">{service.subtext}</p>
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
                A fire risk assessment is a structured review of your premises, identifying fire risks,
                safety measures and the steps needed to protect people and property. As the Responsible
                Person, you must maintain suitable fire safety arrangements and evidence of compliance
                with the Regulatory Reform (Fire Safety) Order 2005.
              </p>
              <a className="compliance-button" href="/resources/your-responsibilities">
                Your Responsibilities
                <span className="homepage-inline-arrow" aria-hidden="true" />
              </a>
            </div>
            <div className="compliance-feature-media">
              <img
                className="compliance-risk-image"
                src="/images/000 - HOME PAGE/Undertaking fire risk assessment.png"
                alt="Undertaking a fire risk assessment on site"
              />
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
          <div className="closing-cta-visual closing-cta-visual--contact">
            {/* Background image visual - content removed as requested */}
          </div>

          <div className="closing-cta-copy closing-cta-copy--centered">
            <h2>Contact Our Team Today</h2>
            <p>
              Helix Fire &amp; Security lead the way in the industry by offering your business a
              compliant, reliable and consistent one-stop-shop for fire and security solutions in
              the UK. Contact our team today to discover how we can help.
            </p>

            <div className="closing-cta-actions">
              <a className="closing-cta-primary" href="/book-now">
                Contact us now
              </a>
              <span>or</span>
              <a className="closing-cta-secondary" href="/book-now">
                Request a Callback
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <HomeChatWidget />
    </main>
  );
}
