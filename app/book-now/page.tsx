import type { Metadata } from "next";
import { ContactSection } from "../components/ContactSection";

export const metadata: Metadata = {
  title: "Book a Survey | Helix",
  description: "Request a quote or book a fire and security survey with Helix Fire & Security Ltd.",
};
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export default function BookNowPage() {
  return (
    <>
      <SiteHeader />
      <main className="site-shell">
        <ContactSection standalone />
      </main>
      <SiteFooter />
    </>
  );
}
