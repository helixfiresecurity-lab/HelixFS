export type TeamValue = {
  title: string;
  text: string;
  tone: "red" | "blue" | "green" | "purple";
  icon: "shield" | "customer" | "certified" | "teamwork";
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedIn?: string;
};

export const teamValues: TeamValue[] = [
  {
    title: "Safety First",
    text: "Every decision starts with protecting people, property and compliance responsibilities.",
    tone: "red",
    icon: "shield",
  },
  {
    title: "Customer Focused",
    text: "Clear communication, practical recommendations and support shaped around your building.",
    tone: "blue",
    icon: "customer",
  },
  {
    title: "Certified Experts",
    text: "Qualified engineers working to recognised standards across fire, security and compliance.",
    tone: "green",
    icon: "certified",
  },
  {
    title: "Teamwork",
    text: "One in-house team coordinating surveys, installation, maintenance and reporting.",
    tone: "purple",
    icon: "teamwork",
  },
];

export const teamAboutChecks = [
  "In-house engineers, managers and coordinators",
  "Multi-disciplinary qualifications across fire and security",
  "Structured training and manufacturer accreditations",
  "Clear documentation and compliance records after every visit",
];

/** Update names, photos and LinkedIn URLs when final headshots are supplied. */
export const leadershipTeam: TeamMember[] = [
  {
    name: "Managing Director",
    role: "Leadership & Strategic Direction",
    bio: "Leads Helix with a focus on accountable delivery, integrated fire and security support, and long-term client relationships across the UK.",
    image: "/images/000 - HOME PAGE/Contact Helix.png",
    linkedIn: "https://www.linkedin.com/company/helix-fire-security",
  },
  {
    name: "Technical Manager",
    role: "Design & Quality Oversight",
    bio: "Oversees project design, quality control across larger installations and compliance review at handover for complex or multi-discipline scopes.",
    image: "/images/000 - HOME PAGE/Engineer in the field.png",
    linkedIn: "https://www.linkedin.com/company/helix-fire-security",
  },
  {
    name: "Service & Account Lead",
    role: "Client Support & Coordination",
    bio: "Keeps clients informed, coordinates maintenance visits and ensures actions, timelines and compliance records stay aligned across the relationship.",
    image: "/images/005 - COMPLIANCE/Image for main compliance page - office scene.png",
    linkedIn: "https://www.linkedin.com/company/helix-fire-security",
  },
];
