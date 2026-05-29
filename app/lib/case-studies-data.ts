export type CaseStudyCategory = "all" | "fire" | "security" | "emergency";

export type CaseStudyPillar = {
  title: string;
  text: string;
  tone: "red" | "blue" | "green" | "purple";
  icon: "tailored" | "expertise" | "results" | "trusted";
};

export type CaseStudyProject = {
  id: string;
  title: string;
  description: string;
  category: Exclude<CaseStudyCategory, "all">;
  sector: string;
  location: string;
  solution: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  illustrative?: boolean;
  metrics?: { value: string; label: string }[];
  situation?: string;
  approach?: string;
  disclaimer?: string;
};

export const caseStudyPillars: CaseStudyPillar[] = [
  {
    title: "Tailored Solutions",
    text: "Every project is designed around our clients' unique needs.",
    tone: "red",
    icon: "tailored",
  },
  {
    title: "Proven Expertise",
    text: "Experience delivering reliable, compliant systems across varied buildings.",
    tone: "blue",
    icon: "expertise",
  },
  {
    title: "Measurable Results",
    text: "Real outcomes that improve safety, efficiency and day-to-day oversight.",
    tone: "green",
    icon: "results",
  },
  {
    title: "Trusted by Clients",
    text: "Long-term partnerships built on quality, service and clear communication.",
    tone: "purple",
    icon: "trusted",
  },
];

export const caseStudyFilters: { id: CaseStudyCategory; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "fire", label: "Fire Systems" },
  { id: "security", label: "Security Systems" },
  { id: "emergency", label: "Emergency Systems" },
];

export const caseStudyProjects: CaseStudyProject[] = [
  {
    id: "northfield-academy",
    title: "Northfield Academy",
    description:
      "Designed and installed a comprehensive fire detection and alarm system across the entire campus to ensure full compliance and safety.",
    category: "fire",
    sector: "Education",
    location: "Leicester",
    solution: "Addressable fire alarm and detection system",
    image: "/images/001 - FIRE SYSTEMS/004 - Fire Safety Signage/Fire safety signage in University Library.png",
    imageAlt: "Education campus fire safety project",
    featured: true,
  },
  {
    id: "midlands-business-park",
    title: "Midlands Business Park",
    description:
      "Implemented a fully integrated CCTV and access control solution to enhance security and provide complete site visibility.",
    category: "security",
    sector: "Commercial",
    location: "Leicester",
    solution: "CCTV, access control and perimeter security",
    image: "/images/001 - FIRE SYSTEMS/001 - Fire Alarm Systems/Tech HQ and glass corridor 2.png",
    imageAlt: "Commercial office security installation",
    featured: true,
  },
  {
    id: "steelway-manufacturing",
    title: "Steelway Manufacturing",
    description:
      "Installed emergency lighting and voice alarm systems to support safe evacuation and business continuity.",
    category: "emergency",
    sector: "Industrial",
    location: "Leicester",
    solution: "Emergency lighting and voice alarm",
    image: "/images/001 - FIRE SYSTEMS/001 - Fire Alarm Systems/Warehouse.png",
    imageAlt: "Industrial warehouse emergency systems",
    featured: true,
  },
  {
    id: "residential-block",
    title: "Managing fragmented contractors across a 90-unit residential block",
    description:
      "Consolidated fire alarms, emergency lighting, AOV and extinguishers under one provider with audit-ready records.",
    category: "fire",
    sector: "Residential Block",
    location: "UK",
    solution: "Multi-discipline consolidation and planned maintenance",
    image: "/images/003 - EMERGENCY SYSTEMS/004 - Emergency & Escape Route Signage/Emergency signage in apartment corridor.png",
    imageAlt: "Residential block fire and life safety",
    illustrative: true,
    situation:
      "A managing agent inherited a block where fire alarms, emergency lighting, AOV and extinguishers were each maintained by different contractors. Records were scattered and coordinating call-outs consumed significant team time.",
    approach:
      "Helix conducted a full systems audit, took over maintenance for all disciplines, rebuilt the documentation library and implemented a single planned maintenance schedule.",
    metrics: [
      { value: "4 → 1", label: "Contractors consolidated" },
      { value: "100%", label: "Records audit-ready" },
      { value: "One", label: "Point of contact" },
    ],
    disclaimer:
      "Illustrative scenario representing consolidation work Helix typically delivers for managed residential blocks.",
  },
  {
    id: "retail-compliance",
    title: "Bringing a retail unit's fire systems up to current compliance standards",
    description:
      "Same-week survey, upgrade and certification within an insurance deadline for a new lease take-up.",
    category: "fire",
    sector: "Commercial / Retail",
    location: "UK",
    solution: "Fire alarm and emergency lighting to BS 5839 / BS 5266",
    image: "/images/003 - EMERGENCY SYSTEMS/001 - Emergency Lighting/Emergency escape lighting - Retail corridor.png",
    imageAlt: "Retail unit fire compliance upgrade",
    illustrative: true,
    situation:
      "An independent retailer inherited an out-of-date fire alarm with no current commissioning certificate and partial emergency lighting. Insurance required proper certification within 30 days.",
    approach:
      "Helix surveyed within the week, installed and commissioned a new addressable fire alarm and brought emergency lighting fully up to standard — with ongoing maintenance from day one.",
    metrics: [
      { value: "28 days", label: "Survey to certified" },
      { value: "Insurance", label: "Conditions met" },
      { value: "BS 5839", label: "Full compliance" },
    ],
    disclaimer:
      "Illustrative scenario representing urgent compliance work for new lease take-ups.",
  },
  {
    id: "care-facility",
    title: "Integrating nurse call, fire alarm and access control for assisted living",
    description:
      "Coordinated ward-by-ward upgrades with zero resident disruption and a single service contract.",
    category: "emergency",
    sector: "Care Environment",
    location: "UK",
    solution: "Nurse call, fire alarm and access control integration",
    image: "/images/003 - EMERGENCY SYSTEMS/003 - Nurse Call Systems/Nurse call point beside hospital bed.png",
    imageAlt: "Care facility integrated life safety systems",
    illustrative: true,
    situation:
      "An assisted living facility needed to upgrade nurse call, integrate it with fire alarm strategy and improve access control — without disrupting residents.",
    approach:
      "Helix designed a programme allowing each ward to be upgraded in a single working day, bringing systems onto compatible infrastructure under one contract.",
    metrics: [
      { value: "Zero", label: "Resident disruption" },
      { value: "3", label: "Systems integrated" },
      { value: "Single", label: "Service contract" },
    ],
    disclaimer:
      "Illustrative scenario representing multi-discipline work in care environments.",
  },
];

export const clientQuestions: string[] = [
  "How a provider handled coordination across multiple safety and security disciplines",
  "How records and oversight improved compared to a fragmented setup",
  "How ongoing service became easier to manage day-to-day",
  "How compliance pressures were met within tight timescales",
  "How larger portfolios were brought under one accountable provider",
];

export const categoryLabels: Record<Exclude<CaseStudyCategory, "all">, string> = {
  fire: "Fire Systems",
  security: "Security Systems",
  emergency: "Emergency Systems",
};
