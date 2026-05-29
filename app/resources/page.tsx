import type { Metadata } from "next";
import { InfoPageTemplate } from "../components/InfoPageTemplate";

export const metadata: Metadata = {
  title: "Resources | Helix",
  description: "Guides, FAQs, case studies and brochures for fire safety, security and compliance from Helix.",
};
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { getSectionLanding } from "../content-pages/content";

export default function ResourcesPage() {
  return (
    <>
      <SiteHeader />
      <InfoPageTemplate page={getSectionLanding("resources")} />
      <SiteFooter />
    </>
  );
}
