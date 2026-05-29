export type PrivacyHighlight = {
  title: string;
  text: string;
  tone: "red" | "blue" | "green";
  icon: "privacy" | "transparent" | "secure";
};

export type PrivacyListItem = {
  label?: string;
  text: string;
};

export type PrivacyBlock =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: PrivacyListItem[] }
  | { type: "contact"; items: PrivacyListItem[] };

export type PrivacySection = {
  id: string;
  number: number;
  title: string;
  blocks: PrivacyBlock[];
};

export const privacyHighlights: PrivacyHighlight[] = [
  {
    title: "Your Privacy Matters",
    text: "We protect your personal information and respect your trust.",
    tone: "red",
    icon: "privacy",
  },
  {
    title: "Transparent & Fair",
    text: "We are open about how we collect, use and protect your data.",
    tone: "blue",
    icon: "transparent",
  },
  {
    title: "Secure by Design",
    text: "We use industry-standard security to keep your information safe.",
    tone: "green",
    icon: "secure",
  },
];

export const privacyMeta = {
  lastUpdated: "May 2026",
  dataController: "Helix Fire & Security Ltd, 29 Green Lane Road, Leicester, LE5 3TN",
};

export const privacySections: PrivacySection[] = [
  {
    id: "introduction",
    number: 1,
    title: "Introduction",
    blocks: [
      {
        type: "paragraph",
        text: 'Helix Fire & Security Ltd ("Helix", "we", "us", "our") is committed to protecting and respecting your privacy. This policy explains how we collect, use, store, share and protect personal data when you interact with us — whether you are a client, a website visitor, an enquirer, a supplier or a job applicant.',
      },
      {
        type: "paragraph",
        text: "We comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. We act as a Data Controller for the personal data we collect about you, except where we explicitly act as a Data Processor on behalf of a client (for example, when handling personal data within a managed building on a client's behalf).",
      },
    ],
  },
  {
    id: "information-we-collect",
    number: 2,
    title: "Information We Collect",
    blocks: [
      { type: "subheading", text: "From clients and enquirers" },
      {
        type: "paragraph",
        text: "When you contact us, request a survey, agree a quote or become a client, we typically collect:",
      },
      {
        type: "list",
        items: [
          { text: "Your name and job title" },
          { text: "Business or organisation name (where applicable)" },
          { text: "Property address and details" },
          { text: "Contact details — email, phone number, postal address" },
          { text: "Information about the services you are interested in or have engaged us for" },
          { text: "Records of our communications with you (calls, emails, messages)" },
          { text: "Service history, including reports, certificates and visit records" },
          { text: "Payment and invoicing information" },
        ],
      },
      { type: "subheading", text: "From website visitors" },
      {
        type: "paragraph",
        text: "Our website may collect limited technical information automatically through standard analytics, including IP address, browser type, pages visited and referral source. This is used to understand site performance and improve content. We do not use intrusive tracking or profile-building cookies.",
      },
      { type: "subheading", text: "From job applicants" },
      {
        type: "paragraph",
        text: "If you apply for a role with us, we collect the information you provide in your application — CV, references, qualifications, contact details and any supporting information. We only retain this information for the duration needed to evaluate your application.",
      },
    ],
  },
  {
    id: "how-we-use-data",
    number: 3,
    title: "How We Use Your Data",
    blocks: [
      { type: "paragraph", text: "We use your personal data for the following purposes:" },
      {
        type: "list",
        items: [
          {
            label: "To respond to your enquiry",
            text: " — when you contact us to ask about services, request a survey or discuss a quote",
          },
          {
            label: "To deliver our services",
            text: " — including arranging surveys, scheduling work, providing certifications, managing maintenance plans and responding to reactive callouts",
          },
          {
            label: "To manage our business relationship",
            text: " — invoicing, account management, communications about your service plan, and renewal discussions",
          },
          {
            label: "To meet legal and regulatory obligations",
            text: " — including maintaining service records that we or our clients are legally required to keep",
          },
          {
            label: "To improve our services",
            text: " — analysing patterns of feedback and operational data to make our delivery better",
          },
          {
            label: "To respond to job applications",
            text: " — assessing your suitability for available roles",
          },
        ],
      },
    ],
  },
  {
    id: "legal-basis",
    number: 4,
    title: "Legal Basis",
    blocks: [
      {
        type: "paragraph",
        text: "We rely on one or more of the following legal bases under UK GDPR, depending on the activity:",
      },
      {
        type: "list",
        items: [
          {
            label: "Contract",
            text: " — processing necessary to enter into or perform a contract with you",
          },
          {
            label: "Legal obligation",
            text: " — processing necessary to comply with our legal duties, including maintaining service records and tax records",
          },
          {
            label: "Legitimate interests",
            text: " — processing necessary for our legitimate business interests, such as responding to enquiries, account management and improving services, where these interests are not overridden by your rights",
          },
          {
            label: "Consent",
            text: " — where you have given consent for a specific purpose (for example, optional marketing communications)",
          },
        ],
      },
    ],
  },
  {
    id: "who-we-share",
    number: 5,
    title: "Who We Share Data With",
    blocks: [
      { type: "paragraph", text: "We do not sell your personal data to third parties. We may share your data only with:" },
      {
        type: "list",
        items: [
          {
            label: "Suppliers and contractors",
            text: " who provide services to us (for example, hosted IT services, accounting software, payment processors) — under appropriate data processing agreements",
          },
          {
            label: "Manufacturers",
            text: " where this is necessary to register warranty, deliver replacement parts or activate services on equipment we have installed for you",
          },
          {
            label: "Regulators, inspectors or authorities",
            text: " where required by law, or where the records relate to compliance evidence the authority is entitled to request",
          },
          {
            label: "Our professional advisers",
            text: " — solicitors, accountants and insurers — where reasonably necessary",
          },
          {
            label: "A purchaser or successor",
            text: " in the event of a business sale or restructure, under appropriate confidentiality arrangements",
          },
        ],
      },
    ],
  },
  {
    id: "data-retention",
    number: 6,
    title: "Data Retention",
    blocks: [
      {
        type: "paragraph",
        text: "We keep personal data only as long as we need to for the purpose for which it was collected. Typical retention periods are:",
      },
      {
        type: "list",
        items: [
          {
            label: "Enquiry data",
            text: " — retained for up to 24 months after the most recent contact, unless you become a client",
          },
          {
            label: "Client and project records",
            text: " — retained for 7 years after the end of the engagement, in line with statutory record-keeping requirements",
          },
          {
            label: "Service and compliance records",
            text: " — retained for the life of the installed system plus 7 years, to support compliance evidence",
          },
          {
            label: "Invoicing and accounting records",
            text: " — retained for 7 years in line with HMRC requirements",
          },
          {
            label: "Job applications",
            text: " — retained for 12 months unless you ask us to delete sooner, or unless you join the company",
          },
        ],
      },
    ],
  },
  {
    id: "security",
    number: 7,
    title: "Security",
    blocks: [
      {
        type: "paragraph",
        text: "We take appropriate technical and organisational measures to protect personal data against unauthorised access, loss, alteration or disclosure. These include access controls, secure storage, encrypted transmission where appropriate, regular reviews of our data handling practices, and training for staff who handle personal data.",
      },
      {
        type: "paragraph",
        text: "No system is entirely immune to risk, but we will notify you and the relevant authority promptly if a personal data breach occurs that is likely to result in risk to your rights.",
      },
    ],
  },
  {
    id: "your-rights",
    number: 8,
    title: "Your Rights",
    blocks: [
      {
        type: "paragraph",
        text: "Under UK GDPR you have the following rights in respect of personal data we hold about you:",
      },
      {
        type: "list",
        items: [
          { label: "Right of access", text: " — to obtain a copy of the personal data we hold about you" },
          { label: "Right to rectification", text: " — to have inaccurate data corrected" },
          { label: "Right to erasure", text: " — to request deletion of your data, where applicable" },
          { label: "Right to restriction", text: " — to limit how we use your data in certain circumstances" },
          { label: "Right to portability", text: " — to receive your data in a structured, machine-readable format" },
          { label: "Right to object", text: " — to object to certain types of processing, including direct marketing" },
          {
            label: "Right not to be subject to automated decision-making",
            text: " — Helix does not use automated decision-making in any meaningful sense",
          },
        ],
      },
      {
        type: "paragraph",
        text: "To exercise any of these rights, please contact us using the details at the end of this policy. We will respond within one month unless the request is particularly complex, in which case we may extend by up to two further months and will let you know.",
      },
    ],
  },
  {
    id: "marketing",
    number: 9,
    title: "Marketing",
    blocks: [
      {
        type: "paragraph",
        text: "We do not run aggressive marketing programmes. If you become a client, we may occasionally email you about service updates, renewal reminders or relevant changes to fire and security regulations that may affect your property. You can opt out of these at any time by replying to any such email or by contacting us directly.",
      },
      {
        type: "paragraph",
        text: "We do not sell, rent or share your details with third-party marketers under any circumstances.",
      },
    ],
  },
  {
    id: "cookies",
    number: 10,
    title: "Cookies",
    blocks: [
      {
        type: "paragraph",
        text: "Our website uses only essential cookies necessary for the site to function correctly, plus minimal analytics cookies that help us understand site usage in aggregate. We do not use behavioural tracking cookies or third-party advertising cookies. You can control cookies through your browser settings.",
      },
    ],
  },
  {
    id: "childrens-data",
    number: 11,
    title: "Children's Data",
    blocks: [
      {
        type: "paragraph",
        text: "Our services are not directed at children. We do not knowingly collect personal data from children under 16. If you believe we have inadvertently collected information about a child, please contact us so we can remove it.",
      },
    ],
  },
  {
    id: "international-transfers",
    number: 12,
    title: "International Transfers",
    blocks: [
      {
        type: "paragraph",
        text: "Helix is a UK-based business and most of our data processing takes place within the UK. Where any of our service providers are based outside the UK, we ensure appropriate safeguards are in place — typically through approved transfer mechanisms recognised under UK GDPR.",
      },
    ],
  },
  {
    id: "changes",
    number: 13,
    title: "Changes to This Policy",
    blocks: [
      {
        type: "paragraph",
        text: 'We may update this policy from time to time to reflect changes in our practices, legal requirements or feedback. The "last updated" date at the top of this policy shows when it was last revised. Material changes will be brought to clients\' attention through normal communication channels.',
      },
    ],
  },
  {
    id: "contact",
    number: 14,
    title: "Contact Us",
    blocks: [
      {
        type: "paragraph",
        text: "If you have any questions about this policy, want to exercise your data rights, or wish to raise a concern about how your data is being handled, please contact us:",
      },
      {
        type: "contact",
        items: [
          { label: "Email", text: "hello@helixfs.co.uk" },
          { label: "Phone", text: "07359 589933" },
          { label: "Post", text: "Data Protection Enquiries, Helix Fire & Security Ltd, 29 Green Lane Road, Leicester, LE5 3TN" },
        ],
      },
    ],
  },
  {
    id: "complaints",
    number: 15,
    title: "Complaints",
    blocks: [
      {
        type: "paragraph",
        text: "If you are not satisfied with how we have responded to a privacy concern, you have the right to lodge a complaint with the Information Commissioner's Office (ICO), the UK supervisory authority for data protection. You can contact the ICO at ico.org.uk or on 0303 123 1113.",
      },
    ],
  },
];

/** Sidebar shows the first 12 sections; sections 13–15 remain in the full policy body. */
export const privacySidebarSections = privacySections.filter((section) => section.number <= 12);
