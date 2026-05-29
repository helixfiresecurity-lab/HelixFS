import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CareersPage } from "../../components/CareersPage";
import { EnvironmentalPage } from "../../components/EnvironmentalPage";
import { HowWeWorkPage } from "../../components/HowWeWorkPage";
import { InfoPageTemplate } from "../../components/InfoPageTemplate";
import { OurTeamPage } from "../../components/OurTeamPage";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { aboutCollection, getSectionPage } from "../../content-pages/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return aboutCollection.pages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSectionPage("about", slug);

  if (!page) return { title: "About | Helix" };

  if (slug === "our-team") {
    return {
      title: "Our Team | About | Helix",
      description:
        "Meet the Helix team — in-house engineers, technical managers and support staff delivering fire, security and compliance across the UK.",
    };
  }

  if (slug === "how-we-work") {
    return {
      title: "How We Work | About | Helix",
      description:
        "Discover Helix's six-step process — consultation, assessment, design, installation, commissioning and ongoing support with one accountable team.",
    };
  }

  if (slug === "environmental-commitments") {
    return {
      title: "Environmental Commitments | About | Helix",
      description:
        "Helix's practical approach to environmental responsibility — sustainable solutions, efficient operations and long-term system performance.",
    };
  }

  if (slug === "careers") {
    return {
      title: "Careers | About | Helix",
      description:
        "Join Helix Fire & Security — fire and security engineering, service coordination and compliance roles with training, progression and a people-first culture.",
    };
  }

  return {
    title: `${page.title} | About | Helix`,
    description: page.intro[0],
  };
}

export default async function AboutDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSectionPage("about", slug);

  if (!page) notFound();

  if (slug === "our-team") {
    return (
      <>
        <SiteHeader />
        <OurTeamPage />
        <SiteFooter />
      </>
    );
  }

  if (slug === "how-we-work") {
    return (
      <>
        <SiteHeader />
        <HowWeWorkPage />
        <SiteFooter />
      </>
    );
  }

  if (slug === "environmental-commitments") {
    return (
      <>
        <SiteHeader />
        <EnvironmentalPage />
        <SiteFooter />
      </>
    );
  }

  if (slug === "careers") {
    return (
      <>
        <SiteHeader />
        <CareersPage />
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
