import type { Metadata } from "next";
import { AboutPage } from "../components/AboutPage";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "About | Helix Fire & Security Ltd",
  description:
    "Helix delivers integrated fire protection, security and compliance across the UK — one accountable in-house team from survey to long-term support.",
};

export default function AboutLandingPage() {
  return (
    <>
      <SiteHeader />
      <AboutPage />
      <SiteFooter />
    </>
  );
}
