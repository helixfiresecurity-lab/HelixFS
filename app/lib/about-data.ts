export type AboutPillar = {
  title: string;
  text: string;
  tone: "red" | "blue" | "green";
  icon: "shield" | "customer" | "certified";
};

export type AboutValue = {
  title: string;
  text: string;
  tone: "red" | "blue" | "green" | "purple" | "orange";
  icon: "integrity" | "accountability" | "excellence" | "collaboration" | "responsibility";
};

export type AboutServiceCard = {
  title: string;
  text: string;
  tone: "red" | "blue" | "green";
};

export const aboutPillars: AboutPillar[] = [
  {
    title: "Safety First",
    text: "Every decision starts with protecting people, property and compliance responsibilities.",
    tone: "red",
    icon: "shield",
  },
  {
    title: "Trusted by Clients",
    text: "Long-term relationships built on clear communication, dependable delivery and honest advice.",
    tone: "blue",
    icon: "customer",
  },
  {
    title: "Expertly Delivered",
    text: "Qualified engineers delivering fire, security and compliance work to recognised UK standards.",
    tone: "green",
    icon: "certified",
  },
];

export const aboutServiceCards: AboutServiceCard[] = [
  {
    title: "Fire Protection",
    text: "Fire alarms, extinguishers, AOV ventilation and safety signage designed, installed and maintained to current UK standards.",
    tone: "red",
  },
  {
    title: "Security & Smart",
    text: "CCTV, intruder alarms, access control, intercom, gate automation and connected building systems.",
    tone: "blue",
  },
  {
    title: "Compliance",
    text: "Fire risk assessments, certification, PAT testing and regulatory documentation kept current and audit-ready.",
    tone: "green",
  },
];

export const aboutValues: AboutValue[] = [
  {
    title: "Integrity",
    text: "We do the right thing, keep clients informed and take responsibility for the work we deliver.",
    tone: "red",
    icon: "integrity",
  },
  {
    title: "Accountability",
    text: "One team owns the outcome — from survey and installation through maintenance and reporting.",
    tone: "blue",
    icon: "accountability",
  },
  {
    title: "Excellence",
    text: "Consistent workmanship, practical recommendations and service records you can rely on.",
    tone: "green",
    icon: "excellence",
  },
  {
    title: "Collaboration",
    text: "We work closely with facilities teams, landlords and managing agents to keep buildings running smoothly.",
    tone: "purple",
    icon: "collaboration",
  },
  {
    title: "Responsibility",
    text: "We help clients meet fire, security and compliance duties with clarity — not confusion.",
    tone: "orange",
    icon: "responsibility",
  },
];

export const aboutClientTypes: string[] = [
  "Commercial buildings — offices, business parks, mixed-use commercial property",
  "Residential developments — apartment blocks, managed blocks, new-build housing",
  "Managed properties — landlords, managing agents and estate management companies",
  "HMOs and rented housing — single-property landlords and portfolios alike",
  "Retail, hospitality and leisure — independent operators and small chains",
  "Industrial and warehousing — distribution, light industrial and storage facilities",
  "Care and assisted living — including nurse call and emergency communication systems",
  "Education facilities — schools, colleges and training centres",
];
