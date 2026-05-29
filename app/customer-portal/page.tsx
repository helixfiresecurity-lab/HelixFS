import type { Metadata } from "next";
import { InfoPageTemplate } from "../components/InfoPageTemplate";

export const metadata: Metadata = {
  title: "Customer Portal | Helix",
  description: "Information about the Helix customer portal for service records, documents and ongoing support.",
};
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { standalonePages } from "../content-pages/content";

export default function CustomerPortalPage() {
  return (
    <>
      <SiteHeader />
      <InfoPageTemplate page={standalonePages.customerPortal} />
      <SiteFooter />
    </>
  );
}
