import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BrochuresPage } from "../../components/BrochuresPage";
import { CaseStudiesPage } from "../../components/CaseStudiesPage";
import { FaqsPage } from "../../components/FaqsPage";
import { YourResponsibilitiesPage } from "../../components/YourResponsibilitiesPage";
import { InfoPageTemplate } from "../../components/InfoPageTemplate";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { getSectionPage, resourcesCollection } from "../../content-pages/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return resourcesCollection.pages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSectionPage("resources", slug);

  if (!page) return { title: "Resources | Helix" };

  if (slug === "faqs") {
    return {
      title: "FAQs | Resources | Helix",
      description:
        "Find quick answers about fire protection, security systems, compliance support and ongoing maintenance from Helix Fire & Security Ltd.",
    };
  }

  if (slug === "your-responsibilities") {
    return {
      title: "Your Responsibilities | Resources | Helix",
      description:
        "Understand your fire safety responsibilities under UK law — duties, records to maintain, and how Helix helps you stay compliant.",
    };
  }

  if (slug === "case-studies") {
    return {
      title: "Case Studies | Resources | Helix",
      description:
        "Explore Helix fire, security and emergency projects — tailored solutions, proven expertise and measurable results across UK buildings.",
    };
  }

  if (slug === "brochures") {
    return {
      title: "Brochures | Resources | Helix",
      description:
        "Download free Helix service brochures — fire, security, emergency, smart systems, compliance and integrated service plan overviews.",
    };
  }

  return {
    title: `${page.title} | Resources | Helix`,
    description: page.intro[0],
  };
}

export default async function ResourcesDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSectionPage("resources", slug);

  if (!page) notFound();

  if (slug === "faqs") {
    return (
      <>
        <SiteHeader />
        <FaqsPage />
        <SiteFooter />
      </>
    );
  }

  if (slug === "your-responsibilities") {
    return (
      <>
        <SiteHeader />
        <YourResponsibilitiesPage />
        <SiteFooter />
      </>
    );
  }

  if (slug === "case-studies") {
    return (
      <>
        <SiteHeader />
        <CaseStudiesPage />
        <SiteFooter />
      </>
    );
  }

  if (slug === "brochures") {
    return (
      <>
        <SiteHeader />
        <BrochuresPage />
        <SiteFooter />
      </>
    );
  }

  return (
    <>
      <SiteHeader />
      <InfoPageTemplate page={page} />
      <SiteFooter />
    </>
  );
}
