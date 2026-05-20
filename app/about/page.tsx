import type { Metadata } from "next";
import { InfoPageTemplate } from "../components/InfoPageTemplate";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { getSectionLanding } from "../content-pages/content";

export const metadata: Metadata = {
  title: "About | Helix",
  description:
    "Learn how Helix Fire & Security delivers integrated fire, security and compliance support through one accountable team.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <InfoPageTemplate page={getSectionLanding("about")} />
      <SiteFooter />
    </>
  );
}
