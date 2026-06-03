"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

type HeroSlide = {
  title: [string, string];
  copy: [string, string];
  cta: string;
  href: string;
  imageSrc: string;
  buttonClassName?: string;
};

const slides: HeroSlide[] = [
  {
    title: ["Fire Protection Systems", "Built for Safer Buildings"],
    copy: [
      "Professional fire alarms, fire extinguishers and",
      "fire safety systems designed, installed and maintained with care.",
    ],
    cta: "Explore Fire Systems",
    href: "/fire-systems",
    imageSrc: "/images/000 - HOME PAGE/Modern corporate office lobby - hero slide.png",
  },
  {
    title: ["Smarter Security", "for Complete Peace of Mind"],
    copy: [
      "CCTV, intruder alarms, access control and monitoring solutions",
      "installed to protect your property around the clock.",
    ],
    cta: "Explore Security Systems",
    href: "/security",
    imageSrc: "/images/000 - HOME PAGE/CCTV External 1 - hero slide.png",
    buttonClassName: "button-hero-security",
  },
  {
    title: ["Compliance Support", "That Keeps You Protected"],
    copy: [
      "Clear fire safety reporting, risk assessments and maintenance",
      "documentation to help your business stay compliant and prepared.",
    ],
    cta: "Explore Compliance",
    href: "/compliance",
    imageSrc: "/images/000 - HOME PAGE/Compliance - hero slide.png",
    buttonClassName: "button-hero-compliance",
  },
];

const AUTOPLAY_MS = 5000;
const MOBILE_PAUSE_MS = 8000;

export function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const pausedUntilRef = useRef(0);
  const swipeStartXRef = useRef<number | null>(null);

  const pauseAutoplay = useCallback((durationMs = MOBILE_PAUSE_MS) => {
    pausedUntilRef.current = Date.now() + durationMs;
  }, []);

  const isInteractiveTarget = (target: EventTarget | null) => {
    if (!(target instanceof Element)) return false;
    return Boolean(target.closest("a, button"));
  };

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setAutoplayEnabled(!media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!autoplayEnabled) return;

    const timer = window.setInterval(() => {
      if (isHovered || Date.now() < pausedUntilRef.current) return;
      setActiveIndex((current) => (current + 1) % slides.length);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [autoplayEnabled, isHovered]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    pauseAutoplay();
  };

  return (
    <section
      className="hero-slider"
      id="top"
      aria-label="Featured services"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="hero-slider-shell"
        onTouchStart={(event) => {
          pauseAutoplay();
          if (isInteractiveTarget(event.target)) {
            swipeStartXRef.current = null;
            return;
          }
          swipeStartXRef.current = event.changedTouches[0]?.clientX ?? null;
        }}
        onTouchEnd={(event) => {
          pauseAutoplay();
          if (isInteractiveTarget(event.target)) {
            swipeStartXRef.current = null;
            return;
          }
          const start = swipeStartXRef.current;
          const end = event.changedTouches[0]?.clientX;
          swipeStartXRef.current = null;
          if (start == null || end == null) return;
          const delta = end - start;
          if (Math.abs(delta) > 40) {
            setActiveIndex((current) => {
              if (delta < 0) return (current + 1) % slides.length;
              return (current - 1 + slides.length) % slides.length;
            });
          }
        }}
      >
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <article
              key={slide.cta}
              className={`hero-slide${isActive ? " is-active" : ""}`}
              aria-hidden={!isActive}
            >
              <div className="hero-slide-bg">
                <Image
                  src={slide.imageSrc}
                  alt=""
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="hero-slide-image"
                />
              </div>
              <div className="hero-slide-overlay" />

              <div className="hero-slide-content">
                <h1>
                  <span>{slide.title[0]}</span>
                  <span>{slide.title[1]}</span>
                </h1>
                <p>
                  <span>{slide.copy[0]}</span>
                  <span>{slide.copy[1]}</span>
                </p>
                <div className="hero-slide-actions">
                  <Link
                    className={`button button-primary${slide.buttonClassName ? ` ${slide.buttonClassName}` : ""}`}
                    href={slide.href}
                    onClick={() => pauseAutoplay()}
                  >
                    {slide.cta}
                  </Link>
                </div>
              </div>
            </article>
          );
        })}

        <div className="hero-slider-dots" aria-hidden="true">
          {slides.map((slide, index) => (
            <button
              key={slide.cta}
              type="button"
              className={`hero-slider-dot${index === activeIndex ? " is-active" : ""}`}
              onClick={() => goToSlide(index)}
              tabIndex={-1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
