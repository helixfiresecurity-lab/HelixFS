"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  caseStudyFilters,
  caseStudyPillars,
  caseStudyProjects,
  categoryLabels,
  clientQuestions,
  type CaseStudyCategory,
} from "../lib/case-studies-data";
import {
  CaseStudyBlueprintIcon,
  CaseStudyMetaIcon,
  CaseStudyPillarIcon,
  CaseStudyProjectIcon,
} from "./CaseStudiesIcons";

const heroImage =
  "/images/000 - HOME PAGE/Modern corporate office lobby - hero slide.png";

export function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState<CaseStudyCategory>("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return caseStudyProjects;
    return caseStudyProjects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const illustrativeProjects = filteredProjects.filter((p) => p.illustrative);

  return (
    <main className="case-studies-page">
      <section className="cs-hero">
        <Image
          src={heroImage}
          alt="Helix project at a modern commercial building"
          fill
          priority
          sizes="100vw"
          className="cs-hero-bg"
        />
        <div className="cs-hero-overlay" aria-hidden="true" />
        <div className="cs-hero-inner">
          <nav className="cs-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/resources">Resources</Link>
            <span>/</span>
            <span className="cs-breadcrumb-current">Case Studies</span>
          </nav>
          <p className="cs-eyebrow">Our Work in Action</p>
          <h1>Case Studies</h1>
          <p className="cs-hero-intro">
            Explore how we deliver tailored fire and security solutions that protect people,
            property and businesses across a wide range of industries.
          </p>
          <div className="cs-hero-actions">
            <Link className="cs-btn-primary" href="/fire-systems">
              View our services
              <span aria-hidden="true">→</span>
            </Link>
            <Link className="cs-btn-outline" href="/book-now">
              Talk to our team
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="cs-pillars-strip" aria-label="Why Helix case studies matter">
        <div className="cs-pillars-grid">
          {caseStudyPillars.map((pillar) => (
            <article key={pillar.title} className={`cs-pillar-card cs-pillar-card--${pillar.tone}`}>
              <div className="cs-pillar-icon" aria-hidden="true">
                <CaseStudyPillarIcon icon={pillar.icon} />
              </div>
              <h2>{pillar.title}</h2>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cs-about" aria-labelledby="cs-about-heading">
        <div className="cs-about-inner">
          <h2 id="cs-about-heading">About these examples</h2>
          <p>
            Helix is building the body of detailed client case studies we want to publish. Some
            examples below are <strong>illustrative scenarios</strong> based on typical situations
            our team supports — generalised to reflect how we approach problems and outcomes.
          </p>
          <p>
            As longer-running engagements complete and clients are happy to be named, we will replace
            these with fully detailed studies showing real metrics, locations and contacts.
          </p>
          <div className="cs-about-callout">
            <p className="cs-about-callout-label">Want a relevant example?</p>
            <h3>Ask us about your specific situation</h3>
            <p>
              If you have a particular property type or challenge in mind, we are happy to walk you
              through how we would approach it.{" "}
              <Link href="/book-now">Get in touch</Link> and tell us what you would like to
              understand.
            </p>
          </div>
        </div>
      </section>

      <section className="cs-projects" aria-labelledby="cs-projects-heading">
        <div className="cs-projects-inner">
          <p className="cs-section-eyebrow cs-section-eyebrow--center">Featured Projects</p>
          <h2 id="cs-projects-heading">Real Projects. Real Impact.</h2>
          <p className="cs-projects-intro">
            Filter by discipline to explore fire, security and emergency work — from education and
            commercial sites to industrial and care environments.
          </p>

          <div className="cs-filters" role="tablist" aria-label="Filter projects by type">
            {caseStudyFilters.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`cs-filter${isActive ? " is-active" : ""}`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          {featuredProjects.length > 0 ? (
            <div className="cs-cards-grid" role="tabpanel">
              {featuredProjects.map((project) => (
                <article key={project.id} className={`cs-card cs-card--${project.category}`}>
                  <div className="cs-card-image-wrap">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 900px) 100vw, 33vw"
                      className="cs-card-image"
                    />
                    <span className={`cs-card-tag cs-card-tag--${project.category}`}>
                      {categoryLabels[project.category]}
                    </span>
                  </div>
                  <div className="cs-card-body">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul className="cs-card-meta">
                      <li>
                        <CaseStudyMetaIcon type="solution" />
                        <span>
                          <strong>Solution</strong> {project.solution}
                        </span>
                      </li>
                      <li>
                        <CaseStudyMetaIcon type="sector" />
                        <span>
                          <strong>Sector</strong> {project.sector}
                        </span>
                      </li>
                      <li>
                        <CaseStudyMetaIcon type="location" />
                        <span>
                          <strong>Location</strong> {project.location}
                        </span>
                      </li>
                    </ul>
                    <Link className="cs-card-link" href="/book-now">
                      Read case study
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : null}

          {illustrativeProjects.length > 0 ? (
            <div className="cs-scenarios">
              <h3 className="cs-scenarios-title">Illustrative scenarios</h3>
              {illustrativeProjects.map((project) => (
                <article key={project.id} className="cs-scenario-card">
                  <div className={`cs-scenario-side cs-scenario-side--${project.category}`}>
                    <span className="cs-scenario-icon" aria-hidden="true">
                      <CaseStudyProjectIcon category={project.category} />
                    </span>
                    <p className="cs-scenario-sector">{project.sector}</p>
                  </div>
                  <div className="cs-scenario-body">
                    <h4>{project.title}</h4>
                    {project.situation ? (
                      <p>
                        <strong>Situation:</strong> {project.situation}
                      </p>
                    ) : null}
                    {project.approach ? (
                      <p>
                        <strong>Approach:</strong> {project.approach}
                      </p>
                    ) : null}
                    {project.metrics ? (
                      <div className="cs-scenario-metrics">
                        {project.metrics.map((metric) => (
                          <div key={metric.label} className="cs-scenario-metric">
                            <strong>{metric.value}</strong>
                            <span>{metric.label}</span>
                          </div>
                        ))}
                      </div>
                    ) : null}
                    {project.disclaimer ? (
                      <p className="cs-scenario-disclaimer">{project.disclaimer}</p>
                    ) : null}
                    <Link className="cs-card-link" href="/book-now">
                      Discuss a similar project
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : null}

          {filteredProjects.length === 0 ? (
            <p className="cs-empty">No projects match this filter. Try another category.</p>
          ) : null}
        </div>
      </section>

      <section className="cs-questions" aria-labelledby="cs-questions-heading">
        <div className="cs-questions-inner">
          <h2 id="cs-questions-heading">What clients typically want to understand</h2>
          <ul>
            {clientQuestions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            If your situation looks similar — or you have a different challenge entirely — we can
            outline how Helix would approach it in a structured and practical way.
          </p>
          <Link className="cs-btn-primary cs-btn-primary--inline" href="/book-now">
            Discuss a similar project
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="cs-cta-banner" aria-labelledby="cs-cta-heading">
        <div className="cs-cta-inner">
          <div className="cs-cta-icon" aria-hidden="true">
            <CaseStudyBlueprintIcon />
          </div>
          <div className="cs-cta-copy">
            <h2 id="cs-cta-heading">Have a Project in Mind?</h2>
            <p>
              We&apos;d love to help you create a safer, smarter environment. Let&apos;s talk through
              your building, risks and priorities.
            </p>
          </div>
          <div className="cs-cta-actions">
            <Link className="cs-btn-primary" href="/book-now">
              Discuss your project
              <span aria-hidden="true">→</span>
            </Link>
            <Link className="cs-btn-outline cs-btn-outline--on-navy" href="/book-now">
              Request a callback
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
