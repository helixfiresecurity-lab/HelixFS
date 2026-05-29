"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { faqCategories, type FaqCategoryId } from "../lib/faqs-data";
import {
  FaqsAccordionToggle,
  FaqsCategoryIcon,
  FaqsHelpBubbleIcon,
  FaqsShieldCheckIcon,
} from "./FaqsIcons";

export function FaqsPage() {
  const [activeCategory, setActiveCategory] = useState<FaqCategoryId>("fire-systems");
  const [openIndex, setOpenIndex] = useState(0);

  const category = faqCategories.find((item) => item.id === activeCategory) ?? faqCategories[0];

  const selectCategory = (id: FaqCategoryId) => {
    setActiveCategory(id);
    setOpenIndex(0);
  };

  return (
    <main className="faqs-page">
      <section className="faqs-hero section-intro section-intro--center">
        <div className="faqs-hero-inner">
          <p className="faqs-eyebrow">FAQs</p>
          <h1>Frequently Asked Questions</h1>
          <p className="faqs-hero-intro">
            Find quick answers about our fire protection, security systems, emergency systems, smart
            systems, compliance support and ongoing maintenance services.
          </p>
        </div>
      </section>

      <section className="faqs-body">
        <div className="faqs-layout">
          <aside className="faqs-sidebar" aria-label="Need help?">
            <FaqsHelpBubbleIcon className="faqs-sidebar-icon" />
            <h2>Need help choosing the right system?</h2>
            <p className="faqs-sidebar-intro">
              Our team can guide you through fire safety, security and compliance requirements based
              on your building, business and responsibilities.
            </p>
            <div className="faqs-sidebar-divider" />
            <div className="faqs-sidebar-highlight">
              <div className="faqs-sidebar-highlight-left">
                <span className="faqs-sidebar-badge">
                  <FaqsShieldCheckIcon />
                </span>
                <p className="faqs-sidebar-tagline">
                  <span>Expert advice.</span>
                  <span>Clear solutions.</span>
                </p>
              </div>
              <p className="faqs-sidebar-support">
                We&apos;re here to help you stay safe and compliant.
              </p>
            </div>
            <Link className="faqs-sidebar-cta" href="/book-now">
              Contact our team
              <span aria-hidden="true">→</span>
            </Link>
          </aside>

          <div className="faqs-main">
            <div className="faqs-tabs" role="tablist" aria-label="FAQ categories">
              {faqCategories.map((item) => {
                const isActive = item.id === activeCategory;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`faqs-tab${isActive ? " is-active" : ""}`}
                    onClick={() => selectCategory(item.id)}
                  >
                    <FaqsCategoryIcon id={item.id} active={isActive} className="faqs-tab-icon" />
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="faqs-accordion" role="tabpanel">
              {category.items.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <article key={item.question} className={`faqs-item${isOpen ? " is-open" : ""}`}>
                    <button
                      type="button"
                      className="faqs-question"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    >
                      <span>{item.question}</span>
                      <FaqsAccordionToggle open={isOpen} />
                    </button>
                    {isOpen ? (
                      <div className="faqs-answer">
                        <p>{item.answer}</p>
                      </div>
                    ) : null}
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="faqs-cta-banner" aria-labelledby="faqs-cta-heading">
        <div className="faqs-cta-shell">
          <div className="faqs-cta-visual">
            <Image
              src="/images/000 - HOME PAGE/Contact Helix.png"
              alt="Helix customer support team member"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className="faqs-cta-image"
            />
          </div>
          <div className="faqs-cta-copy">
            <h2 id="faqs-cta-heading">Contact Our Team Today</h2>
            <p>
              Helix Fire &amp; Security Ltd are ready to help you with fire safety, security and
              compliance. Get in touch for expert advice, a free consultation or a no-obligation
              quote.
            </p>
            <div className="faqs-cta-actions">
              <Link className="faqs-cta-primary" href="/book-now">
                Contact us now
                <span aria-hidden="true">→</span>
              </Link>
              <Link className="faqs-cta-secondary" href="/book-now">
                Request a Callback
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
