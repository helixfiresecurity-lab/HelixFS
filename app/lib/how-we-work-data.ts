export type ProcessPillar = {
  title: string;
  text: string;
  tone: "red" | "blue" | "green" | "purple";
  icon: "client-focused" | "quality-assured" | "compliant-design" | "ongoing-support";
};

export type ProcessStep = {
  step: string;
  title: string;
  text: string;
  tone: "red" | "blue" | "green" | "purple" | "orange";
  icon:
    | "consultation"
    | "assessment"
    | "solution-design"
    | "installation"
    | "commissioning"
    | "ongoing-support";
};

export type ProcessBenefit = {
  title: string;
  text: string;
  tone: "red" | "blue" | "green" | "purple";
  icon: "proven-experience" | "expert-team" | "reliable-results" | "long-term-partnership";
};

export const processPillars: ProcessPillar[] = [
  {
    title: "Client Focused",
    text: "We listen, understand and recommend what's right for you.",
    tone: "red",
    icon: "client-focused",
  },
  {
    title: "Quality Assured",
    text: "We deliver solutions to the highest standards.",
    tone: "blue",
    icon: "quality-assured",
  },
  {
    title: "Compliant by Design",
    text: "Every solution meets UK regulations and standards.",
    tone: "green",
    icon: "compliant-design",
  },
  {
    title: "Ongoing Support",
    text: "We're with you after installation with expert care.",
    tone: "purple",
    icon: "ongoing-support",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Consultation",
    text: "We discuss your needs, assess your risks and understand your goals for the building.",
    tone: "red",
    icon: "consultation",
  },
  {
    step: "02",
    title: "Assessment",
    text: "We survey your site, evaluate current systems, compliance obligations and site-specific risks.",
    tone: "blue",
    icon: "assessment",
  },
  {
    step: "03",
    title: "Solution Design",
    text: "We create a tailored solution that meets your needs, budget and compliance priorities.",
    tone: "green",
    icon: "solution-design",
  },
  {
    step: "04",
    title: "Installation",
    text: "Our certified engineers install systems to the highest standards with clear communication throughout.",
    tone: "purple",
    icon: "installation",
  },
  {
    step: "05",
    title: "Commissioning",
    text: "We test, commission and hand over with complete documentation so everything works as it should.",
    tone: "orange",
    icon: "commissioning",
  },
  {
    step: "06",
    title: "Ongoing Support",
    text: "We provide maintenance, reactive callouts and compliance reporting you can rely on.",
    tone: "red",
    icon: "ongoing-support",
  },
];

export const processBenefits: ProcessBenefit[] = [
  {
    title: "Proven Experience",
    text: "Structured delivery across fire, security and compliance for buildings of every scale.",
    tone: "red",
    icon: "proven-experience",
  },
  {
    title: "Expert Team",
    text: "In-house engineers and managers — no subcontracted handoffs or lost accountability.",
    tone: "blue",
    icon: "expert-team",
  },
  {
    title: "Reliable Results",
    text: "Clear scopes, firm pricing and documentation kept organised and audit-ready.",
    tone: "green",
    icon: "reliable-results",
  },
  {
    title: "Long-Term Partnership",
    text: "One contact, one service plan and full visibility across your property portfolio.",
    tone: "purple",
    icon: "long-term-partnership",
  },
];

export const clientExpectations: string[] = [
  "Access to the property when planned visits are scheduled",
  "Honest information about how the building is used and what has changed",
  "A willingness to act on recommendations that affect occupant safety",
  "Prompt payment on agreed terms so we can keep our team properly resourced",
  "Open communication if priorities or circumstances change",
];
