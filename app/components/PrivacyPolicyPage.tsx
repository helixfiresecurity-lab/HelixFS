"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  privacyHighlights,
  privacyMeta,
  privacySections,
  privacySidebarSections,
  type PrivacyBlock,
} from "../lib/privacy-data";
import { PrivacyHelpIcon, PrivacyHighlightIcon } from "./PrivacyIcons";

function renderBlock(block: PrivacyBlock, key: string) {
  switch (block.type) {
    case "paragraph":
      return <p key={key}>{block.text}</p>;
    case "subheading":
      return <h3 key={key}>{block.text}</h3>;
    case "list":
      return (
        <ul key={key}>
          {block.items.map((item) => (
            <li key={`${key}-${item.text}`}>
              {item.label ? <strong>{item.label}</strong> : null}
              {item.text}
            </li>
          ))}
        </ul>
      );
    case "contact":
      return (
        <ul key={key} className="privacy-contact-list">
          {block.items.map((item) => (
            <li key={`${key}-${item.label}`}>
              <strong>{item.label}:</strong> {item.text}
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}

export function PrivacyPolicyPage() {
  const [activeId, setActiveId] = useState(privacySections[0]?.id ?? "introduction");

  useEffect(() => {
    const headings = privacySections
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
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
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
    <main className="privacy-page">
      <section className="privacy-hero">
        <Image
          src="/images/001 - FIRE SYSTEMS/001 - Fire Alarm Systems/Modern corporate office lobby.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="privacy-hero-bg"
          aria-hidden
        />
        <div className="privacy-hero-overlay" aria-hidden="true" />
        <div className="privacy-hero-shell">
          <div className="privacy-hero-copy">
            <nav className="privacy-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Legal</span>
              <span>/</span>
              <span className="privacy-breadcrumb-current">Privacy Policy</span>
            </nav>
            <p className="privacy-eyebrow">Legal</p>
            <h1>Privacy Policy</h1>
            <p className="privacy-hero-intro">
              This policy explains how Helix Fire &amp; Security Ltd collects, uses, stores and
              protects personal data. We have written it in plain English so you can understand what
              happens with your information — not just tick a box.
            </p>
            <div className="privacy-hero-actions">
              <Link className="privacy-btn-primary" href="/book-now">
                Contact our team
                <span aria-hidden="true">→</span>
              </Link>
              <Link className="privacy-btn-outline" href="/fire-systems">
                Our services
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="privacy-hero-visual" aria-hidden="true">
            <Image
              src="/images/001 - FIRE SYSTEMS/001 - Fire Alarm Systems/Fire Alarm Panel 1 - Shown internally only - fixed to wall - mid height.webp"
              alt=""
              fill
              sizes="(max-width: 900px) 0vw, 40vw"
              className="privacy-hero-side-image"
            />
          </div>
        </div>
      </section>

      <section className="privacy-highlights" aria-label="Privacy principles">
        <div className="privacy-highlights-grid">
          {privacyHighlights.map((item) => (
            <article key={item.title} className={`privacy-highlight-card privacy-highlight-card--${item.tone}`}>
              <div className="privacy-highlight-icon">
                <PrivacyHighlightIcon icon={item.icon} />
              </div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="privacy-content">
        <div className="privacy-content-layout">
          <aside className="privacy-sidebar" aria-label="On this page">
            <div className="privacy-sidebar-card">
              <h2>On this page</h2>
              <ol className="privacy-sidebar-nav">
                {privacySidebarSections.map((section) => (
                  <li key={section.id}>
                    <button
                      type="button"
                      className={activeId === section.id ? "is-active" : undefined}
                      onClick={() => scrollToSection(section.id)}
                    >
                      <span>{section.number}.</span> {section.title}
                    </button>
                  </li>
                ))}
              </ol>
              <div className="privacy-sidebar-help">
                <PrivacyHelpIcon />
                <p>
                  <strong>Questions about privacy?</strong>
                  <span>Our team can help with data-related enquiries.</span>
                </p>
                <Link className="privacy-sidebar-cta" href="/book-now">
                  Contact our team
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </aside>

          <article className="privacy-document">
            <p className="privacy-updated">
              <strong>Last updated:</strong> {privacyMeta.lastUpdated} —{" "}
              <strong>Data Controller:</strong> {privacyMeta.dataController}
            </p>

            {privacySections.map((section) => (
              <section key={section.id} id={section.id} className="privacy-section">
                <h2>
                  {section.number}. {section.title}
                </h2>
                {section.blocks.map((block, index) => renderBlock(block, `${section.id}-${index}`))}
              </section>
            ))}

            <div className="privacy-legal-note">
              <p className="privacy-legal-note-label">Legal note</p>
              <h3>This policy is provided in good faith but is not legal advice</h3>
              <p>
                This policy reflects standard UK GDPR practice for a business of our size and type.
                If you have specific legal or compliance questions about how your data is handled,
                please get in touch and we will help where we can. For independent legal advice,
                please consult a qualified solicitor.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="privacy-cta-banner" aria-labelledby="privacy-cta-heading">
        <div className="privacy-cta-shell">
          <div className="privacy-cta-visual">
            <Image
              src="/images/000 - HOME PAGE/Contact Helix.png"
              alt="Helix support team member"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className="privacy-cta-image"
            />
          </div>
          <div className="privacy-cta-copy">
            <h2 id="privacy-cta-heading">Have Questions About Our Privacy Policy?</h2>
            <p>
              We&apos;re here to help. Get in touch with our team for any privacy-related
              enquiries.
            </p>
            <div className="privacy-cta-actions">
              <Link className="privacy-btn-primary" href="/book-now">
                Contact our team
                <span aria-hidden="true">→</span>
              </Link>
              <Link className="privacy-btn-outline privacy-btn-outline--on-blue" href="/book-now">
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
