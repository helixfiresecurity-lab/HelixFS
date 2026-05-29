export type ResponsibilityPillar = {
  title: string;
  text: string;
  tone: "red" | "blue" | "green";
  icon: "review" | "maintain" | "record";
};

export type LegalDuty = {
  step: string;
  title: string;
  text: string;
  tone: "red" | "blue" | "green" | "purple" | "orange" | "teal" | "navy";
  icon:
    | "risk-assessment"
    | "protect-occupants"
    | "safety-measures"
    | "maintain"
    | "training"
    | "emergency-plan"
    | "records";
};

export type RecordItem = {
  label: string;
  detail: string;
};

export type HelixSupportCard = {
  title: string;
  text: string;
  icon: "surveys" | "maintenance" | "documentation";
};

export type SidebarSection = {
  id: string;
  label: string;
};

export const responsibilityPillars: ResponsibilityPillar[] = [
  {
    title: "Review",
    text: "Understand your current setup, risks and where gaps may exist.",
    tone: "red",
    icon: "review",
  },
  {
    title: "Maintain",
    text: "Keep life-safety systems tested, serviced and operating as intended.",
    tone: "blue",
    icon: "maintain",
  },
  {
    title: "Record",
    text: "Document actions clearly so accountability is visible when it matters.",
    tone: "green",
    icon: "record",
  },
];

export const sidebarSections: SidebarSection[] = [
  { id: "why", label: "Why this page exists" },
  { id: "who", label: "Who is responsible?" },
  { id: "duties", label: "Your duties at a glance" },
  { id: "records", label: "Records to maintain" },
  { id: "enforcement", label: "If you don't comply" },
  { id: "helix", label: "How Helix helps" },
  { id: "start", label: "Where to start" },
];

export const legalDuties: LegalDuty[] = [
  {
    step: "01",
    title: "Carry out a Fire Risk Assessment",
    text: "A suitable and sufficient assessment of fire risks — in writing where required — reviewed regularly and after material changes to the building or its use.",
    tone: "red",
    icon: "risk-assessment",
  },
  {
    step: "02",
    title: "Identify and protect occupants at risk",
    text: "Include disabled occupants, lone workers, contractors and visitors — with suitable arrangements for safe evacuation.",
    tone: "blue",
    icon: "protect-occupants",
  },
  {
    step: "03",
    title: "Implement appropriate fire safety measures",
    text: "Detection and warning, escape routes, emergency lighting, fire-fighting equipment, fire doors and compartmentation matched to the building's risk profile.",
    tone: "green",
    icon: "safety-measures",
  },
  {
    step: "04",
    title: "Maintain those measures",
    text: "Planned servicing of fire alarms, emergency lighting, extinguishers, AOV systems and other safety equipment to the relevant British Standards.",
    tone: "purple",
    icon: "maintain",
  },
  {
    step: "05",
    title: "Train people who work in the building",
    text: "Adequate fire safety training including evacuation procedures — refreshed periodically and recorded.",
    tone: "orange",
    icon: "training",
  },
  {
    step: "06",
    title: "Plan for an emergency",
    text: "Suitable emergency procedures, fire warden roles where appropriate, and clear information for occupants about what to do in a fire.",
    tone: "teal",
    icon: "emergency-plan",
  },
  {
    step: "07",
    title: "Keep records",
    text: "Inspections, tests, training and incidents maintained in writing where required — with additional duties for higher-risk residential buildings.",
    tone: "navy",
    icon: "records",
  },
];

export const requiredRecords: RecordItem[] = [
  {
    label: "Current Fire Risk Assessment",
    detail: "Reviewed and updated, with action log",
  },
  {
    label: "Fire alarm service records",
    detail: "Weekly test logs and six-monthly/annual servicing",
  },
  {
    label: "Emergency lighting test records",
    detail: "Monthly function tests and annual full discharge tests",
  },
  {
    label: "Fire extinguisher service records",
    detail: "Annual maintenance and five-yearly extended service",
  },
  {
    label: "AOV system service records",
    detail: "Where automatic opening vents are installed",
  },
  {
    label: "Fire door inspection records",
    detail: "Particularly important in residential blocks",
  },
  {
    label: "Staff training records",
    detail: "Evacuation drills and fire warden training",
  },
  {
    label: "Incident log",
    detail: "Fire incidents, false alarms and system faults",
  },
  {
    label: "PAT testing records",
    detail: "For portable electrical equipment",
  },
];

export const helixSupportCards: HelixSupportCard[] = [
  {
    title: "Surveys",
    text: "Review your current systems and identify priorities so nothing critical is missed.",
    icon: "surveys",
  },
  {
    title: "Maintenance",
    text: "Keep systems tested, serviced and operating as intended — to the right standards on the right schedule.",
    icon: "maintenance",
  },
  {
    title: "Documentation",
    text: "Maintain clear records that support accountability and compliance — ready for any inspection or audit.",
    icon: "documentation",
  },
];

export const keyAreas: string[] = [
  "Having suitable fire detection and warning systems in place",
  "Maintaining equipment regularly to the relevant British Standards",
  "Keeping documentation and service records current and accessible",
  "Reviewing life-safety risks and reassessing after material changes",
  "Ensuring escape routes and safety measures remain effective",
  "Coordinating compliance across multiple disciplines from one accountable team",
];
