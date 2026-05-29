import type { Metadata } from "next";
import { PrivacyPolicyPage } from "../components/PrivacyPolicyPage";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Privacy Policy | Helix Fire & Security Ltd",
  description:
    "How Helix Fire & Security Ltd collects, uses, stores and protects personal data under UK GDPR — written in plain English.",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <PrivacyPolicyPage />
      <SiteFooter />
    </>
  );
}
