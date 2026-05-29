import type { Metadata } from "next";
import { InfoPageTemplate } from "../components/InfoPageTemplate";

export const metadata: Metadata = {
  title: "Our Company | Helix",
  description: "Learn about Helix Fire & Security — our approach, standards and commitment to integrated fire and security delivery.",
};
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { getSectionLanding } from "../content-pages/content";

export default function OurCompanyPage() {
  return (
    <>
      <SiteHeader />
      <InfoPageTemplate page={getSectionLanding("our-company")} />
      <SiteFooter />
    </>
  );
}
