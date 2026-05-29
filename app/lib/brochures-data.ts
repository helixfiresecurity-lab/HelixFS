export type BrochureTone = "red" | "blue" | "green" | "purple";

export type BrochureHeroFeature = {
  title: string;
  text: string;
  icon: "expert" | "download" | "trusted";
};

export type BrochureItem = {
  id: string;
  title: string;
  description: string;
  tone: BrochureTone;
  icon: "fire" | "security" | "emergency" | "smart" | "compliance" | "integrated";
  pdfUrl: string;
  pdfFilename: string;
  coverImage: string;
  coverAlt: string;
  serviceHref: string;
};

export const brochureHeroFeatures: BrochureHeroFeature[] = [
  {
    title: "Expert Insights",
    text: "Detailed information from industry experts.",
    icon: "expert",
  },
  {
    title: "Free Downloads",
    text: "All brochures are free to download.",
    icon: "download",
  },
  {
    title: "Trusted Solutions",
    text: "Professional services you can rely on.",
    icon: "trusted",
  },
];

export const brochures: BrochureItem[] = [
  {
    id: "fire-systems",
    title: "Fire Systems Service Overview",
    description:
      "Fire alarms, extinguishers, AOV smoke ventilation, fire safety signage and ongoing maintenance — standards, scope and typical buildings.",
    tone: "red",
    icon: "fire",
    pdfUrl: "/brochures/fire-systems-service-overview.pdf",
    pdfFilename: "Helix_Fire_Systems_Service_Overview.pdf",
    coverImage:
      "/images/001 - FIRE SYSTEMS/001 - Fire Alarm Systems/Fire Alarm Sounder - Shown internally only - fixed to wall high up or to ceiling.jpg",
    coverAlt: "Fire systems brochure cover preview",
    serviceHref: "/fire-systems",
  },
  {
    id: "security-systems",
    title: "Security Systems Service Overview",
    description:
      "CCTV, intruder alarms, access control, intercom and gate automation — designed around how your building actually operates.",
    tone: "blue",
    icon: "security",
    pdfUrl: "/brochures/security-systems-service-overview.pdf",
    pdfFilename: "Helix_Security_Systems_Service_Overview.pdf",
    coverImage: "/images/000 - HOME PAGE/CCTV External 1 - hero slide.png",
    coverAlt: "Security systems brochure cover preview",
    serviceHref: "/security-systems",
  },
  {
    id: "emergency-systems",
    title: "Emergency Systems Service Overview",
    description:
      "Emergency lighting, voice communication, nurse call and escape route signage — coordinated with your fire strategy.",
    tone: "red",
    icon: "emergency",
    pdfUrl: "/brochures/emergency-systems-service-overview.pdf",
    pdfFilename: "Helix_Emergency_Systems_Service_Overview.pdf",
    coverImage:
      "/images/003 - EMERGENCY SYSTEMS/004 - Emergency & Escape Route Signage/Emergency signage in executive corridor.png",
    coverAlt: "Emergency systems brochure cover preview",
    serviceHref: "/emergency-systems",
  },
  {
    id: "smart-systems",
    title: "Smart Systems Service Overview",
    description:
      "Smart home automation, Wi-Fi, network and IP infrastructure, plus minor electrical works for connected buildings.",
    tone: "blue",
    icon: "smart",
    pdfUrl: "/brochures/smart-systems-service-overview.pdf",
    pdfFilename: "Helix_Smart_Systems_Service_Overview.pdf",
    coverImage:
      "/images/004 - SMART SYSTEMS/001 - Smart Home Automation/Smart Home Automation in a modern home 1.png",
    coverAlt: "Smart systems brochure cover preview",
    serviceHref: "/smart-systems",
  },
  {
    id: "compliance",
    title: "Compliance Service Overview",
    description:
      "Certification, safety inspections, regulatory compliance and PAT testing — keeping records current and audit-ready.",
    tone: "green",
    icon: "compliance",
    pdfUrl: "/brochures/compliance-service-overview.pdf",
    pdfFilename: "Helix_Compliance_Service_Overview.pdf",
    coverImage: "/images/005 - COMPLIANCE/Certification & Compliance 1.png",
    coverAlt: "Compliance brochure cover preview",
    serviceHref: "/compliance",
  },
  {
    id: "integrated",
    title: "Integrated Service Plan Overview",
    description:
      "How a complete Helix service plan covers fire, security, emergency and compliance under one contract and one team.",
    tone: "red",
    icon: "integrated",
    pdfUrl: "/brochures/integrated-service-plan-overview.pdf",
    pdfFilename: "Helix_Integrated_Service_Plan_Overview.pdf",
    coverImage:
      "/images/001 - FIRE SYSTEMS/Image for main fire systems page - reception scene.png",
    coverAlt: "Integrated service plan brochure cover preview",
    serviceHref: "/compliance",
  },
];

export const brochureCoveragePoints: { label: string; text: string }[] = [
  {
    label: "Service summaries",
    text: "What is included in each discipline and at what level.",
  },
  {
    label: "Building types supported",
    text: "Typical environments where each service applies.",
  },
  {
    label: "Standards and certifications",
    text: "British Standards we work to and certifications we hold.",
  },
  {
    label: "Maintenance and compliance",
    text: "How ongoing service is structured and documented.",
  },
  {
    label: "Practical next steps",
    text: "What a survey, quote and onboarding process looks like.",
  },
];
