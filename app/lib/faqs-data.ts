export type FaqCategoryId =
  | "fire-systems"
  | "security-systems"
  | "compliance"
  | "maintenance"
  | "smart-systems";

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  id: FaqCategoryId;
  label: string;
  items: FaqItem[];
};

export const faqCategories: FaqCategory[] = [
  {
    id: "fire-systems",
    label: "Fire Systems",
    items: [
      {
        question: "What fire safety services do you provide?",
        answer:
          "Helix delivers integrated fire protection including fire alarm systems, fire extinguishers, AOV smoke ventilation, fire safety signage, emergency lighting, and related compliance support. We survey, install, commission and maintain systems to the relevant British Standards, with one accountable team handling the full scope.",
      },
      {
        question: "What standards do you work to?",
        answer:
          "All Helix work is delivered to the relevant British Standards for each discipline: BS 5839 for fire alarms, BS 5266 for emergency lighting, BS 5306 for fire extinguishers, BS 7346 for smoke ventilation, and BS ISO 7010 for safety signage. Where the Regulatory Reform (Fire Safety) Order 2005 or Building Safety Act 2022 applies, we work fully within those frameworks.",
      },
      {
        question: "Do you work on new-build projects?",
        answer:
          "Yes. We work with developers, main contractors and building owners on new-build commercial and residential projects, providing design input, installation and final commissioning across all the fire and security disciplines we cover. For new builds, getting involved early helps avoid the costly re-work that often comes from systems being specified poorly or in isolation from each other.",
      },
    ],
  },
  {
    id: "security-systems",
    label: "Security Systems",
    items: [
      {
        question: "Do you install CCTV and security systems?",
        answer:
          "Yes. We design, install and maintain CCTV surveillance, intruder alarms, access control, intercom systems and gate automation. Systems are specified to suit your building layout, risk profile and operational needs, with documentation and handover support included.",
      },
      {
        question: "Can you combine fire and security into one service plan?",
        answer:
          "That's how we prefer to work. The integrated model — fire, security, emergency and compliance under one service plan with one point of contact — is what we're built for. It's significantly easier to manage from a client perspective, gives you a single source of truth for compliance records, and means engineers visiting your property already understand the wider picture rather than just their narrow discipline.",
      },
    ],
  },
  {
    id: "compliance",
    label: "Compliance",
    items: [
      {
        question: "Can you help with compliance and certification?",
        answer:
          "Yes. We support certification, safety inspections and testing, regulatory compliance and PAT testing. After each visit you receive written service reports, updated certificates where applicable, and clear recommendations for any follow-up work required.",
      },
      {
        question: "How do I know whether I actually need a survey?",
        answer:
          "If your building's fire or security systems have not been reviewed in the last 12 months, if you've taken over a new property, if records or certificates are missing or unclear, or if you've experienced changes in occupancy, use or layout — a survey is worth booking. A survey gives you a clear, no-obligation picture of where you stand, what needs attention first and what longer-term priorities look like. There's no cost and no commitment.",
      },
      {
        question: "What information should I have ready before getting in touch?",
        answer:
          "Nothing essential — we can work with whatever you have. But the more helpful information includes: address and access details, approximate building size or unit count, what systems you know are in place (fire alarm, CCTV, etc.), copies of any existing service certificates, and a sense of what's prompting the enquiry (compliance audit, lease change, system fault, planned upgrade, etc.). If you have none of that, don't worry — the survey itself will surface what we need.",
      },
      {
        question: "Do you charge for a survey or initial visit?",
        answer:
          "No. Initial surveys are free and carry no obligation. We will give you a written summary of what we found and recommendations for next steps — whether or not you choose to use Helix from that point. If a more detailed compliance audit or formal fire risk assessment is needed, we'll quote separately for that work, but a standard survey is at no cost.",
      },
      {
        question: "How quickly can you respond to an enquiry?",
        answer:
          "We respond to enquiries within one working day, usually faster. WhatsApp messages and phone calls are typically answered the same day. For urgent compliance-driven enquiries (insurance deadlines, audit failures, system failures putting occupants at risk) we can usually have someone on site within 24 to 48 hours.",
      },
      {
        question: "How long does a survey take?",
        answer:
          "It depends on the size and complexity of the building. A small commercial unit or single residential property typically takes 1 to 2 hours. A medium-sized commercial building or residential block might take half a day. Larger or multi-discipline scopes may require a return visit, in which case we'll let you know up front so you can plan access.",
      },
      {
        question: "What does a Helix quote actually look like?",
        answer:
          "Itemised, transparent, and in plain English. We break the proposed work into clearly defined scopes with a fixed price for each, so you can see what you're paying for and what's optional. We explain which items are compliance-critical and which are improvements, so you can prioritise based on budget. Quotes are valid for 30 days and include any prerequisites we've identified during the survey.",
      },
      {
        question: "Will I be tied into a long-term contract?",
        answer:
          "No — and that's a deliberate choice on our part. Maintenance contracts are renewable annually, and you're never tied into a longer commitment than you want. We believe the work should speak for itself; if it doesn't, you should be free to go elsewhere. That said, most clients stay because the integrated model genuinely works better than juggling multiple contractors.",
      },
      {
        question: "Can you support our insurance and compliance audits?",
        answer:
          "Yes. We provide the certificates, service records and supporting documentation that insurance audits, building inspections and fire authority visits typically require. For larger or higher-risk buildings we can produce consolidated compliance reports covering all the systems we maintain, in a format suitable for audit submission.",
      },
    ],
  },
  {
    id: "maintenance",
    label: "Maintenance",
    items: [
      {
        question: "Do you offer maintenance and servicing?",
        answer:
          "Yes. Once you're set up with a service plan, we put a planned maintenance schedule in place based on the systems you have and the relevant British Standards. We schedule visits well in advance and confirm dates with you before attending.",
      },
      {
        question: "How is maintenance scheduled?",
        answer:
          "Fire alarms typically need six-monthly servicing, emergency lighting needs monthly function tests and an annual full-duration test, extinguishers need annual maintenance, and so on. Your schedule is tailored to the systems on site and aligned to the standards that apply to each discipline.",
      },
      {
        question: "How quickly can you respond to a reactive callout?",
        answer:
          "For clients on a service plan, our target reactive response is within 4 hours for safety-critical issues and within one working day for non-critical faults. For specific urgency (fire alarm fault during occupied hours, intruder alarm failure during a vacant period, etc.) we'll always prioritise accordingly. Service plan clients also benefit from priority over ad-hoc callouts.",
      },
      {
        question: "What documentation do you provide after each visit?",
        answer:
          "After every service visit you'll receive a written service report, any updated certificates (where applicable), a record of any faults found and actions taken, and recommendations for any follow-up work. These are stored centrally so your full service history is always accessible — not scattered across email threads. For portfolio clients, we provide consolidated reporting across all properties.",
      },
      {
        question: "Can you take over the maintenance of systems we didn't install?",
        answer:
          "Yes — and this is one of the most common ways clients start working with us. We carry out a takeover survey to understand the condition of the existing systems, check current compliance status, identify any urgent issues and put a maintenance schedule in place. From that point onwards, we're your accountable maintenance provider regardless of who installed the original equipment.",
      },
    ],
  },
  {
    id: "smart-systems",
    label: "Smart Systems",
    items: [
      {
        question: "What smart building services do you provide?",
        answer:
          "We support smart home automation, Wi-Fi and network infrastructure, IP-based systems and minor electrical works that sit alongside your fire and security setup — so technology, safety and compliance stay aligned under one team.",
      },
      {
        question: "What areas do you cover?",
        answer:
          "Helix supports clients across the UK from our Leicester base, with nationwide delivery for surveys, installation, maintenance and reactive support. Contact us with your site address and we'll confirm availability and response times for your location.",
      },
    ],
  },
];
