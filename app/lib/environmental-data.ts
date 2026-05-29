export type EnvPillar = {
  title: string;
  text: string;
  tone: "green" | "blue" | "purple" | "teal";
  icon: "sustainable" | "responsible" | "compliance" | "future-focused";
};

export type EnvStat = {
  value: string;
  label: string;
  tone: "green" | "blue" | "purple" | "teal";
  icon: "energy" | "recycle" | "fleet" | "improvement";
};

export type EnvInitiative = {
  title: string;
  text: string;
  icon:
    | "energy-efficient"
    | "responsible-sourcing"
    | "waste-reduction"
    | "green-operations"
    | "team-engagement";
};

export const envPillars: EnvPillar[] = [
  {
    title: "Sustainable Solutions",
    text: "We design and deliver efficient systems that reduce environmental impact.",
    tone: "green",
    icon: "sustainable",
  },
  {
    title: "Responsible Operations",
    text: "We minimise waste, conserve resources and operate with environmental responsibility.",
    tone: "blue",
    icon: "responsible",
  },
  {
    title: "Industry Compliance",
    text: "We comply with environmental regulations and exceed industry best practices.",
    tone: "purple",
    icon: "compliance",
  },
  {
    title: "Future Focused",
    text: "We continuously improve to create a cleaner, safer future for our communities.",
    tone: "teal",
    icon: "future-focused",
  },
];

export const envApproachChecks: string[] = [
  "Reduce environmental impact across all operations",
  "Promote energy efficiency in our systems and solutions",
  "Source responsibly and reduce waste",
  "Support our team, customers and communities",
];

export const envStats: EnvStat[] = [
  {
    value: "25%",
    label: "Reduction in energy consumption*",
    tone: "green",
    icon: "energy",
  },
  {
    value: "90%",
    label: "Waste recycled or responsibly diverted*",
    tone: "blue",
    icon: "recycle",
  },
  {
    value: "40%",
    label: "Fleet using low-emission or hybrid vehicles*",
    tone: "purple",
    icon: "fleet",
  },
  {
    value: "100%",
    label: "Commitment to continuous environmental improvement",
    tone: "teal",
    icon: "improvement",
  },
];

export const envInitiatives: EnvInitiative[] = [
  {
    title: "Energy Efficient Solutions",
    text: "Efficient scheduling and systems that reduce energy use without compromising safety or performance.",
    icon: "energy-efficient",
  },
  {
    title: "Responsible Sourcing",
    text: "Quality components from manufacturers who support long product life and responsible supply chains.",
    icon: "responsible-sourcing",
  },
  {
    title: "Waste Reduction",
    text: "WEEE-compliant disposal, battery recycling and refurbishment routes to keep equipment in service.",
    icon: "waste-reduction",
  },
  {
    title: "Green Operations",
    text: "Planned routing consolidates visits, cuts mileage and supports maintainable system design.",
    icon: "green-operations",
  },
  {
    title: "Team Engagement",
    text: "Training and first-time fix investment so fewer repeat visits mean less waste and fewer journeys.",
    icon: "team-engagement",
  },
];

export const envFutureGoals: string[] = [
  "Transition of suitable engineer vehicles to electric or hybrid alternatives as practical",
  "Closer measurement of mileage, fuel and emissions data for real reporting rather than estimates",
  "Formal alignment with ISO 14001 environmental management principles",
  "Expanded reporting for portfolio clients who need supply-chain environmental data",
  "Continued investment in remote diagnostics and monitoring to reduce avoidable engineer visits",
];
