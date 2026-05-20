"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

type PrimaryService = {
  title: string;
  iconSrc: string;
  tone: "red" | "blue";
  href: string;
};

const RESUME_MS = 5000;
const AUTO_SCROLL_MS = 5000;

export function PrimaryServicesMobileCarousel({ services }: { services: PrimaryService[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedUntilRef = useRef(0);
  const [isPaused, setIsPaused] = useState(false);

  const pause = useCallback(() => {
    pausedUntilRef.current = Date.now() + RESUME_MS;
    setIsPaused(true);
  }, []);

  useEffect(() => {
    const resumeTimer = window.setInterval(() => {
      if (Date.now() >= pausedUntilRef.current) {
        setIsPaused(false);
      }
    }, 200);

    return () => window.clearInterval(resumeTimer);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const track = trackRef.current;
    if (!track) return;

    const timer = window.setInterval(() => {
      const card = track.querySelector<HTMLElement>(".primary-service-card-mobile");
      if (!card) return;
      const step = card.offsetWidth + 12;
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (maxScroll <= 0) return;

      if (track.scrollLeft >= maxScroll - 4) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        track.scrollBy({ left: step, behavior: "smooth" });
      }
    }, AUTO_SCROLL_MS);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <div className="primary-services-carousel">
      <div
        ref={trackRef}
        className="primary-services-carousel-track"
        onTouchStart={pause}
        onTouchEnd={pause}
        onMouseDown={pause}
        onScroll={pause}
      >
        {services.map((service) => (
          <Link
            key={service.title}
            href={service.href}
            className={`primary-service-card-mobile mobile-card-tone-${service.tone}`}
          >
            <span className="card-launch" aria-hidden="true" />
            <span
              className="service-icon-mobile"
              aria-hidden="true"
              style={{ ["--icon-mask" as string]: `url('${service.iconSrc}')` }}
            />
            <h3>{service.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
