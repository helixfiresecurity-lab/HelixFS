"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "../site-data";
import { NavChevron } from "./NavChevron";

const exploreAllLabels: Record<string, string> = {
  "Fire Systems": "Explore All Fire Systems",
  "Security Systems": "Explore All Security Systems",
  "Emergency Systems": "Explore All Emergency Systems",
  "Smart Systems": "Explore All Smart Systems",
  Compliance: "Explore All Compliance",
};

export function SiteHeader() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopNav, setIsDesktopNav] = useState(false);

  const closeAllMenus = () => {
    setActiveMenu(null);
    setIsMobileMenuOpen(false);
  };

  const toggleNavSection = (label: string) => {
    setActiveMenu((current) => (current === label ? null : label));
  };

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1280px)");
    const syncViewport = () => setIsDesktopNav(media.matches);
    syncViewport();
    media.addEventListener("change", syncViewport);
    return () => media.removeEventListener("change", syncViewport);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.removeProperty("overflow");
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.removeProperty("overflow");
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isDesktopNav || !isMobileMenuOpen) return;
    setActiveMenu(null);
  }, [isMobileMenuOpen, isDesktopNav]);

  return (
    <header className="site-header sticky top-0 z-[100] bg-white border-b border-slate-100 transition-all duration-300 w-full max-w-[100vw] flex flex-wrap items-center justify-between gap-2 px-[var(--page-gutter)] py-3">
      <Link className="brand-mark lg:col-start-1 lg:justify-self-start" href="/" aria-label="Helix home" onClick={closeAllMenus}>
        <Image className="w-[140px] lg:w-[198px] h-auto" src="/helix-logo-header.png" alt="Helix logo" width={272} height={153} priority />
      </Link>

      <div className="flex items-center gap-2 sm:gap-3 xl:hidden">
        <a
          className="header-whatsapp flex items-center justify-center w-11 h-11 rounded-lg transition-transform hover:-translate-y-0.5"
          href="https://wa.me/447359589933?text=Hi%20Helix%2C%20I%20would%20like%20to%20book%20a%20survey."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact Helix via WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" aria-hidden="true">
            <path
              d="M12 3.2a8.56 8.56 0 0 0-7.4 12.86L3.4 20.8l4.88-1.28A8.56 8.56 0 1 0 12 3.2Zm0 15.56a7 7 0 0 1-3.56-.98l-.26-.16-2.9.76.78-2.83-.18-.29A7.02 7.02 0 1 1 12 18.76Zm3.84-5.24c-.2-.1-1.18-.58-1.36-.64s-.32-.1-.46.1-.52.64-.64.78-.24.16-.44.06a5.74 5.74 0 0 1-1.68-1.04 6.3 6.3 0 0 1-1.16-1.44c-.12-.2 0-.3.1-.4.1-.1.2-.24.3-.36s.12-.2.18-.34.02-.26-.02-.36-.46-1.1-.62-1.5c-.16-.4-.34-.34-.46-.34h-.4a.77.77 0 0 0-.56.26 2.34 2.34 0 0 0-.74 1.74c0 1.02.76 2 1.08 2.44s1.52 2.32 3.68 3.26c.52.22.92.36 1.24.46.52.16 1 .14 1.38.08.42-.06 1.18-.48 1.34-.94s.16-.86.12-.94-.18-.14-.38-.24Z"
              fill="currentColor"
            />
          </svg>
        </a>
        <button
          className="flex items-center justify-center w-11 h-11 text-slate-800 focus:outline-none"
          onClick={() => {
            setIsMobileMenuOpen((open) => {
              if (open) setActiveMenu(null);
              return !open;
            });
          }}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      <div className={`w-full ${isMobileMenuOpen ? "block" : "hidden"} xl:contents`}>
        <div className="flex flex-col xl:contents mt-4 xl:mt-0 pt-2 xl:pt-0 border-t border-slate-100 xl:border-t-0">
          <nav className="site-nav flex flex-col xl:flex-row items-start xl:items-center justify-center gap-0 text-[1.05rem] font-medium text-navy w-full xl:col-start-2 xl:justify-self-center xl:w-max xl:max-w-none" aria-label="Primary">
            {navItems.map((item) => (
              <div
                key={item.label}
                className={`nav-item w-full xl:w-auto border-b border-slate-100 xl:border-b-0${item.menu ? " has-menu" : ""}${activeMenu === item.label ? " menu-open" : ""}`}
                onMouseLeave={isDesktopNav ? () => setActiveMenu(null) : undefined}
              >
                <Link
                  href={item.href}
                  className="flex justify-between items-center w-full gap-1.5 py-4 xl:py-2 xl:px-0.5 transition-colors text-slate-600 hover:text-red xl:whitespace-nowrap xl:text-[0.8125rem]"
                  aria-expanded={item.menu ? activeMenu === item.label : undefined}
                  onClick={(event) => {
                    if (!item.menu) {
                      closeAllMenus();
                      return;
                    }
                    event.preventDefault();
                    toggleNavSection(item.label);
                    (event.currentTarget as HTMLAnchorElement).blur();
                  }}
                >
                  {item.label}
                  {item.menu ? <NavChevron open={activeMenu === item.label} /> : null}
                </Link>

                {item.menu ? (
                  <div className={`nav-dropdown nav-dropdown-${item.menu.type} max-xl:hidden xl:block`}>
                    {item.menu.type === "fire" ? (
                      <>
                        <div className="nav-fire-cards">
                          {item.menu.featureCards.map((card) => (
                            <Link
                              key={card.title}
                              href={card.href}
                              className={`nav-fire-card${card.active ? " active" : ""}`}
                              onClick={closeAllMenus}
                            >
                              <div>
                                <strong>{card.title}</strong>
                                <span>{card.text}</span>
                              </div>
                              <em aria-hidden="true">→</em>
                            </Link>
                          ))}

                          <Link className="nav-explore-all" href={item.href} onClick={closeAllMenus}>
                            {exploreAllLabels[item.label] ?? `Explore All ${item.label}`}
                          </Link>
                        </div>

                        <div className="nav-fire-links">
                          {item.menu.links.map((link) => (
                            <Link key={link.label} href={link.href} onClick={closeAllMenus}>
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <div className="nav-list-links">
                        {item.menu.links.map((link) => (
                          <Link key={link.label} href={link.href} onClick={closeAllMenus}>
                            {link.label}
                          </Link>
                        ))}

                        <Link className="nav-explore-all inline" href={item.href} onClick={closeAllMenus}>
                          {exploreAllLabels[item.label] ?? `Explore All ${item.label}`}
                        </Link>
                      </div>
                    )}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          <div className="header-actions flex flex-col xl:flex-row items-stretch xl:items-center gap-3 xl:gap-[10px] w-full xl:col-start-3 xl:justify-self-end xl:w-auto mt-6 xl:mt-0 pb-4 xl:pb-0">
            <a
              className="header-whatsapp hidden xl:inline-flex items-center justify-center gap-2 min-h-[44px] px-4 rounded-lg whitespace-nowrap font-heading text-[0.82rem] font-semibold transition-transform hover:-translate-y-0.5"
              href="https://wa.me/447359589933?text=Hi%20Helix%2C%20I%20would%20like%20to%20book%20a%20survey."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Helix via WhatsApp"
            >
              <svg viewBox="0 0 24 24" className="w-[17px] h-[17px]" aria-hidden="true">
                <path
                  d="M12 3.2a8.56 8.56 0 0 0-7.4 12.86L3.4 20.8l4.88-1.28A8.56 8.56 0 1 0 12 3.2Zm0 15.56a7 7 0 0 1-3.56-.98l-.26-.16-2.9.76.78-2.83-.18-.29A7.02 7.02 0 1 1 12 18.76Zm3.84-5.24c-.2-.1-1.18-.58-1.36-.64s-.32-.1-.46.1-.52.64-.64.78-.24.16-.44.06a5.74 5.74 0 0 1-1.68-1.04 6.3 6.3 0 0 1-1.16-1.44c-.12-.2 0-.3.1-.4.1-.1.2-.24.3-.36s.12-.2.18-.34.02-.26-.02-.36-.46-1.1-.62-1.5c-.16-.4-.34-.34-.46-.34h-.4a.77.77 0 0 0-.56.26 2.34 2.34 0 0 0-.74 1.74c0 1.02.76 2 1.08 2.44s1.52 2.32 3.68 3.26c.52.22.92.36 1.24.46.52.16 1 .14 1.38.08.42-.06 1.18-.48 1.34-.94s.16-.86.12-.94-.18-.14-.38-.24Z"
                  fill="currentColor"
                />
              </svg>
              <span>WhatsApp</span>
            </a>

            <Link className="header-cta header-cta-primary flex items-center justify-center min-h-[48px] xl:min-h-[44px] px-5 whitespace-nowrap font-heading text-[1rem] xl:text-[0.84rem] font-semibold rounded-lg transition-transform hover:-translate-y-0.5 w-full xl:w-auto" href="/book-now" onClick={closeAllMenus}>
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
