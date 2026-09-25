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
  icon: "all" | "business" | "care" | "developers" | "food" | "home" | "landlords" | "agents" | "trade";
  pdfUrl: string;
  pdfFilename: string;
  coverImage: string;
  coverAlt: string;
};

export const brochureHeroFeatures: BrochureHeroFeature[] = [
  { title: "Built for your setting", text: "Choose the brochure that reflects your property or work.", icon: "expert" },
  { title: "Free downloads", text: "Browse and download all nine brochures.", icon: "download" },
  { title: "One accountable team", text: "Fire, security and compliance from Helix.", icon: "trusted" },
];

const brochureDetails: Array<Pick<BrochureItem, "id" | "title" | "description" | "tone" | "icon">> = [
  {
    id: "all-services", title: "All Services", tone: "red", icon: "all",
    description: "The complete Helix overview: fire, security, emergency, smart systems and compliance, from survey through maintenance.",
  },
  {
    id: "business-commercial", title: "Business & Commercial", tone: "blue", icon: "business",
    description: "Fire, security and compliance support for offices, retail, industrial and hospitality premises.",
  },
  {
    id: "care-healthcare", title: "Care & Healthcare", tone: "green", icon: "care",
    description: "Fire safety, emergency lighting, fire doors and nurse call planned around residents, patients and care routines.",
  },
  {
    id: "developers-builders", title: "Developers & Builders", tone: "purple", icon: "developers",
    description: "Fire alarms, AOV, emergency lighting, door entry and networks designed and certified for handover.",
  },
  {
    id: "franchise-food-drink", title: "Franchise Food & Drink", tone: "red", icon: "food",
    description: "Site-specific fire, security and compliance services coordinated across food and drink locations.",
  },
  {
    id: "homeowners", title: "Homeowners", tone: "blue", icon: "home",
    description: "Intruder alarms, CCTV, door entry and smart controls specified for your home and supported afterwards.",
  },
  {
    id: "landlords-hmos", title: "Landlords & HMOs", tone: "green", icon: "landlords",
    description: "Fire risk assessments, alarm servicing, emergency lighting and fire doors kept on schedule and on record.",
  },
  {
    id: "managing-agents", title: "Managing Agents", tone: "purple", icon: "agents",
    description: "Planned fire and security servicing, reporting and certificates across managed properties and blocks.",
  },
  {
    id: "trade-partners", title: "Trade Partners", tone: "red", icon: "trade",
    description: "Fire and security installation, commissioning and certification for electrical, FM and fit-out partners.",
  },
];

export const brochures: BrochureItem[] = brochureDetails.map((item) => ({
  ...item,
  pdfUrl: `/brochures/${item.id}.pdf`,
  pdfFilename: `Helix_${item.id.replaceAll("-", "_")}.pdf`,
  coverImage: `/brochures/covers/${item.id}.png`,
  coverAlt: `Cover of the Helix ${item.title} brochure`,
}));

export const brochureCoveragePoints: { label: string; text: string }[] = [
  { label: "Services for your setting", text: "The fire, security and compliance work relevant to each audience." },
  { label: "How Helix works", text: "Survey, planning, installation, servicing and documentation." },
  { label: "Practical priorities", text: "The site needs, schedules and records that matter to your team." },
  { label: "Next steps", text: "How to speak with Helix about a survey or a quote." },
];
