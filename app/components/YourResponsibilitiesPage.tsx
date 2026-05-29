"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  helixSupportCards,
  keyAreas,
  legalDuties,
  requiredRecords,
  responsibilityPillars,
  sidebarSections,
} from "../lib/responsibilities-data";
import {
  HelixSupportIcon,
  LegalDutyIcon,
  ResponsibilitiesAlertIcon,
  ResponsibilitiesCheckIcon,
  ResponsibilitiesScaleIcon,
  ResponsibilityPillarIcon,
} from "./ResponsibilitiesIcons";

const heroImage = "/images/000 - HOME PAGE/Undertaking fire risk assessment.png";

export function YourResponsibilitiesPage() {
  const [activeId, setActiveId] = useState(sidebarSections[0]?.id ?? "why");

  useEffect(() => {
    const headings = sidebarSections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-18% 0px -58% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    setActiveId(id);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="responsibilities-page">
      <section className="resp-hero">
        <Image
          src={heroImage}
          alt="Undertaking a fire risk assessment on site"
          fill
          priority
          sizes="100vw"
          className="resp-hero-bg"
        />
        <div className="resp-hero-overlay" aria-hidden="true" />
        <div className="resp-hero-inner">
          <nav className="resp-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/resources">Resources</Link>
            <span>/</span>
            <span className="resp-breadcrumb-current">Your Responsibilities</span>
          </nav>
          <p className="resp-eyebrow">Know What You Need to Manage</p>
          <h1>Your Responsibilities Under UK Fire Safety Law</h1>
          <p className="resp-hero-intro">
            Fire and security responsibilities sit with those managing or controlling the building.
            Helix helps you turn legal duties into practical, organised action — with clear records
            and one accountable team behind the work.
          </p>
          <div className="resp-hero-actions">
            <Link className="resp-btn-primary" href="/book-now">
              Book a responsibilities review
              <span aria-hidden="true">→</span>
            </Link>
            <Link className="resp-btn-outline" href="#duties">
              View your duties
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="resp-pillars-strip" aria-label="How to stay organised">
        <div className="resp-pillars-grid">
          {responsibilityPillars.map((pillar) => (
            <article key={pillar.title} className={`resp-pillar-card resp-pillar-card--${pillar.tone}`}>
              <div className="resp-pillar-icon" aria-hidden="true">
                <ResponsibilityPillarIcon icon={pillar.icon} />
              </div>
              <h2>{pillar.title}</h2>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="resp-body">
        <div className="resp-layout">
          <aside className="resp-sidebar" aria-label="On this page">
            <p className="resp-sidebar-label">On this page</p>
            <nav className="resp-sidebar-nav">
              {sidebarSections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  className={`resp-sidebar-link${activeId === section.id ? " is-active" : ""}`}
                  onClick={() => scrollToSection(section.id)}
                >
                  {section.label}
                </button>
              ))}
            </nav>
            <div className="resp-sidebar-cta">
              <ResponsibilitiesScaleIcon />
              <p>Not sure where you stand? We can review your site and records with no obligation.</p>
              <Link className="resp-btn-primary resp-btn-primary--compact" href="/book-now">
                Request a survey
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </aside>

          <div className="resp-main">
            <section id="why" className="resp-section">
              <p className="resp-section-eyebrow">Guidance</p>
              <h2>Why this page exists</h2>
              <p>
                Most people only encounter fire safety legislation when something goes wrong — a
                routine inspection raises issues, an insurance audit asks for evidence, or worse, an
                incident triggers a serious investigation. By then, gaps in records, certifications
                and systems are very expensive to fix.
              </p>
              <p>
                This page helps you understand what is expected under UK law, what records you need
                to keep, and where Helix can take the load off so you are not facing those gaps when
                it matters.
              </p>
            </section>

            <section id="who" className="resp-section">
              <h2>Who is responsible?</h2>
              <p>
                Under the <strong>Regulatory Reform (Fire Safety) Order 2005</strong>, every
                non-domestic premises in England and Wales must have a designated{" "}
                <strong>Responsible Person</strong> — typically the employer, building owner,
                landlord, occupier or managing agent. In some buildings there may be more than one,
                in which case duties are shared.
              </p>
              <p>
                In multi-occupancy buildings responsibility is shared. In residential blocks under
                the Building Safety Act 2022, additional duties apply for higher-risk residential
                buildings.
              </p>
              <div className="resp-callout">
                <div className="resp-callout-icon" aria-hidden="true">
                  <ResponsibilitiesAlertIcon />
                </div>
                <div>
                  <p className="resp-callout-label">Key point</p>
                  <h3>&ldquo;I didn&apos;t know&rdquo; is not a legal defence</h3>
                  <p>
                    Fire safety responsibility cannot be delegated away or quietly ignored. Even if a
                    building is managed by a third party, the legally Responsible Person retains
                    accountability. Helix can support compliance — but the responsibility remains
                    yours.
                  </p>
                </div>
              </div>
            </section>

            <section id="duties" className="resp-section">
              <h2>What you must do — the duties at a glance</h2>
              <p>
                Under the Fire Safety Order, the Responsible Person must take general fire precautions
                that ensure, so far as is reasonably practicable, the safety of employees and others
                lawfully on the premises. In practice that means:
              </p>
              <div className="resp-duties-grid">
                {legalDuties.map((duty) => (
                  <article key={duty.step} className={`resp-duty-card resp-duty-card--${duty.tone}`}>
                    <div className="resp-duty-top">
                      <span className="resp-duty-step">{duty.step}</span>
                      <div className="resp-duty-icon" aria-hidden="true">
                        <LegalDutyIcon icon={duty.icon} />
                      </div>
                    </div>
                    <h3>{duty.title}</h3>
                    <p>{duty.text}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="records" className="resp-section">
              <h2>The records you need to maintain</h2>
              <p>
                Inspectors will ask for these. Insurers will ask for these. If something goes wrong,
                courts will ask for these. Keep them current, organised and accessible.
              </p>
              <ul className="resp-records-list">
                {requiredRecords.map((record) => (
                  <li key={record.label}>
                    <ResponsibilitiesCheckIcon />
                    <div>
                      <strong>{record.label}</strong>
                      <span>{record.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section id="enforcement" className="resp-section resp-section--muted">
              <h2>What happens if you don&apos;t comply</h2>
              <p>
                Enforcement is taken seriously. Fire and Rescue Authorities can issue Alteration
                Notices, Enforcement Notices and Prohibition Notices. Breaches can result in unlimited
                fines and, in the most serious cases, imprisonment. Insurance cover may be invalidated
                where fire safety duties have not been met.
              </p>
              <p>
                The Building Safety Act 2022 has further increased penalties and oversight for
                higher-risk residential buildings — typically 18 metres or more in height, or seven
                or more storeys, containing two or more residential units.
              </p>
            </section>

            <section id="helix" className="resp-section">
              <h2>How Helix helps</h2>
              <p>
                Helix takes the complexity out of compliance. We help clients turn legal duties into
                practical, manageable actions — handling the things that should never be left to
                chance.
              </p>
              <div className="resp-support-grid">
                {helixSupportCards.map((card) => (
                  <article key={card.title} className="resp-support-card">
                    <div className="resp-support-icon" aria-hidden="true">
                      <HelixSupportIcon icon={card.icon} />
                    </div>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </article>
                ))}
              </div>
              <h3 className="resp-subheading">Key areas usually include</h3>
              <ul className="resp-key-areas">
                {keyAreas.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="start" className="resp-section">
              <h2>Where to start</h2>
              <p>
                If you are not certain where you stand, the first step is usually a survey. We will
                visit the property, review what is installed, check the condition of your existing
                records, and give you a clear, plain-English summary of where you are — including any
                immediate issues and longer-term priorities.
              </p>
              <p>
                There is no obligation, no scare-tactics and no pushy upsell. Just a useful, honest
                review that puts you in a position to make informed decisions about your building.
              </p>
              <Link className="resp-btn-primary resp-btn-primary--inline" href="/book-now">
                Book a responsibilities review
                <span aria-hidden="true">→</span>
              </Link>
            </section>
          </div>
        </div>
      </section>

      <section className="resp-cta-banner" aria-labelledby="resp-cta-heading">
        <div className="resp-cta-shell">
          <div className="resp-cta-visual">
            <Image
              src="/images/000 - HOME PAGE/Contact Helix.png"
              alt="Helix support team member"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className="resp-cta-image"
            />
          </div>
          <div className="resp-cta-copy">
            <h2 id="resp-cta-heading">Need Help Understanding Your Responsibilities?</h2>
            <p>
              Practical, no-obligation advice on fire, security and compliance for your building.
              Request a survey or speak to our team today.
            </p>
            <div className="resp-cta-actions">
              <Link className="resp-btn-primary" href="/book-now">
                Request a survey
                <span aria-hidden="true">→</span>
              </Link>
              <Link className="resp-btn-outline resp-btn-outline--on-blue" href="/book-now">
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
