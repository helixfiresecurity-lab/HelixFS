export type CareerPillar = {
  title: string;
  text: string;
  tone: "red" | "blue" | "green" | "purple";
  icon: "make-impact" | "grow-with-us" | "one-team";
};

export type CareerStat = {
  value: string;
  label: string;
  icon: "team" | "excellence" | "training" | "people-first";
};

export type OpenPosition = {
  title: string;
  location: string;
  type: string;
  tone: "red" | "blue" | "green";
  icon: "fire-alarm" | "security" | "maintenance";
  href: string;
};

export type RoleCategory = {
  role: string;
  title: string;
  text: string;
  bullets: string[];
};

export type CareerBenefit = {
  title: string;
  text: string;
  icon: "varied" | "resourced" | "progression" | "matter" | "training" | "scheduling";
};

export const careerPillars: CareerPillar[] = [
  {
    title: "Make an Impact",
    text: "Protect people, property and communities through meaningful safety work.",
    tone: "blue",
    icon: "make-impact",
  },
  {
    title: "Grow With Us",
    text: "Training, certifications and clear progression in a growing business.",
    tone: "green",
    icon: "grow-with-us",
  },
  {
    title: "Work as One Team",
    text: "In-house engineers and support — no subcontracted handoffs or lost accountability.",
    tone: "purple",
    icon: "one-team",
  },
];

export const whyJoinChecks: string[] = [
  "Competitive salary and benefits",
  "Ongoing training and certifications",
  "Clear career progression",
  "Safe, inclusive and respectful workplace",
  "Make a real difference in the community",
];

export const careerStats: CareerStat[] = [
  { value: "50+", label: "Team Members", icon: "team" },
  { value: "10+", label: "Years of Excellence", icon: "excellence" },
  { value: "100%", label: "Training Support", icon: "training" },
  { value: "People First", label: "Always", icon: "people-first" },
];

export const openPositions: OpenPosition[] = [
  {
    title: "Fire Alarm Engineer",
    location: "Leicester",
    type: "Full-time",
    tone: "red",
    icon: "fire-alarm",
    href: "mailto:careers@helixfs.co.uk?subject=Fire%20Alarm%20Engineer%20%E2%80%93%20Careers%20enquiry",
  },
  {
    title: "Security Systems Installer",
    location: "Leicester",
    type: "Full-time",
    tone: "blue",
    icon: "security",
    href: "mailto:careers@helixfs.co.uk?subject=Security%20Systems%20Installer%20%E2%80%93%20Careers%20enquiry",
  },
  {
    title: "Service & Maintenance Engineer",
    location: "Leicester",
    type: "Full-time",
    tone: "green",
    icon: "maintenance",
    href: "mailto:careers@helixfs.co.uk?subject=Service%20%26%20Maintenance%20Engineer%20%E2%80%93%20Careers%20enquiry",
  },
];

export const roleCategories: RoleCategory[] = [
  {
    role: "Engineering Roles",
    title: "Field engineers — fire & security",
    text: "Installation, maintenance, fault-finding and reactive support across fire and security systems. Cross-discipline training is provided.",
    bullets: [
      "Mix of installation and maintenance work",
      "Variety across commercial, residential and managed properties",
      "Manufacturer training and qualifications supported",
      "Vehicle, equipment and uniform provided",
    ],
  },
  {
    role: "Service Support",
    title: "Service coordinators",
    text: "Planning, scheduling, coordination and client communication — keeping engineers focused on technical work.",
    bullets: [
      "Maintenance visit scheduling and coordination",
      "Documentation and certification management",
      "Client communication and updates",
      "Office-based with team support",
    ],
  },
  {
    role: "Operational Growth",
    title: "Compliance and reporting support",
    text: "Help clients stay on top of fire and security compliance — schedules, reports and wider service delivery.",
    bullets: [
      "Compliance schedule and renewal tracking",
      "Client portfolio reporting",
      "Quality assurance support",
      "Hybrid working considered",
    ],
  },
  {
    role: "Apprenticeships",
    title: "Trainee engineers",
    text: "Structured trainee roles with practical experience, formal qualifications and a clear progression path.",
    bullets: [
      "Full training pathway provided",
      "Shadowed development with senior engineers",
      "Industry-recognised qualifications",
      "Clear progression within the business",
    ],
  },
];

export const whatWeLookFor: { title: string; text: string }[] = [
  {
    title: "Pride in your work",
    text: "Taking the time to do the job properly, even when no one is watching.",
  },
  {
    title: "Clear communication",
    text: "Explaining what has been done, what needs doing and why, in plain language.",
  },
  {
    title: "Reliability",
    text: "Turning up when you say you will, finishing what you start.",
  },
  {
    title: "Curiosity",
    text: "Willingness to learn new systems, manufacturers and disciplines.",
  },
  {
    title: "Respect",
    text: "For clients, colleagues and the buildings we work in.",
  },
];

export const careerBenefits: CareerBenefit[] = [
  {
    title: "Varied work",
    text: "Different sites, disciplines and challenges every week — not the same round on repeat.",
    icon: "varied",
  },
  {
    title: "Properly resourced",
    text: "Time, parts, training and support to do the job properly — not impossible KPIs.",
    icon: "resourced",
  },
  {
    title: "Real progression",
    text: "A growing business with real opportunities as we expand the team.",
    icon: "progression",
  },
  {
    title: "Small enough to matter",
    text: "Your work and input genuinely shape how the company operates day to day.",
    icon: "matter",
  },
  {
    title: "Training supported",
    text: "Manufacturer qualifications, certifications and CPD built into the role.",
    icon: "training",
  },
  {
    title: "Honest scheduling",
    text: "Realistic workloads, sensible travel times, and weekends that stay weekends.",
    icon: "scheduling",
  },
];

export const careersEmail = "careers@helixfs.co.uk";
