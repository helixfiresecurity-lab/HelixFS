import type { Metadata } from "next";
import { InfoPageTemplate } from "../components/InfoPageTemplate";

export const metadata: Metadata = {
  title: "Terms & Conditions | Helix",
  description: "Terms and conditions for Helix Fire & Security Ltd website and services.",
};
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { standalonePages } from "../content-pages/content";

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <InfoPageTemplate page={standalonePages.terms} />
      <SiteFooter />
    </>
  );
}
