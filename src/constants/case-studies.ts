// ======================================================
// constants/case-studies.ts — Data for case studies
// ======================================================
export type Metric = { label: string; value: string };
export type Testimonial = { quote: string; name: string; title: string };
export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  timeframe: string;
  summary: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  metrics: Metric[];
  services: string[];
  stack: string[];
  testimonial?: Testimonial;
};

export const allCaseStudies: CaseStudy[] = [
  {
    slug: "logistics-billing-automation",
    title: "Automated vendor onboarding & billing",
    industry: "Logistics",
    timeframe: "6 months",
    summary:
      "Rebuilt onboarding, time tracking, and invoice workflows to reduce cycle time and errors.",
    challenge:
      "Fragmented spreadsheets and manual reviews slowed billing, caused disputes, and hid bottlenecks.",
    solution:
      "Implemented a Rails/Node API with RBAC, React dashboards, automated validation for vendor docs, and auditable workflows; added Mixpanel + error tracking.",
    outcomes: [
      "28% faster invoice cycles",
      "35% fewer manual reviews",
      "Clear audit trail across approvals",
    ],
    metrics: [
      { label: "cycle time", value: "−28%" },
      { label: "manual reviews", value: "−35%" },
      { label: "on‑time payments", value: "+22%" },
      { label: "disputes", value: "−18%" },
    ],
    services: ["Web & Mobile Apps", "AI Enablement"],
    stack: ["Next.js", "Rails", "Postgres", "Stripe", "Mixpanel"],
    testimonial: {
      quote:
        "Dimarak delivered on time with measurable impact across our billing workflow.",
      name: "Y. Mensah",
      title: "COO, Logistics Co.",
    },
  },
  {
    slug: "fintech-ai-support-copilot",
    title: "AI support copilot for Fintech",
    industry: "Fintech",
    timeframe: "10 weeks",
    summary:
      "Added RAG search and agent handoffs to deflect tickets while improving CSAT and response times.",
    challenge:
      "Support team struggled to find accurate answers quickly, leading to longer SLAs and lower CSAT.",
    solution:
      "Built retrieval pipelines over docs and tickets, integrated a model‑agnostic LLM gateway, and added safe fallback to human with logging and evaluations.",
    outcomes: [
      "41% ticket deflection",
      "CSAT +12 pts",
      "Median first response −38%",
    ],
    metrics: [
      { label: "ticket deflection", value: "+41%" },
      { label: "CSAT", value: "+12" },
      { label: "first response", value: "−38%" },
      { label: "AHT", value: "−21%" },
    ],
    services: ["AI Enablement", "Web & Mobile Apps"],
    stack: [
      "Next.js",
      "Node",
      "Postgres",
      "OpenAI/Anthropic",
      "LangChain/Evals",
    ],
    testimonial: {
      quote: "Reliable partner for AI features — we shipped safely and fast.",
      name: "S. Boateng",
      title: "VP Eng, Fintech",
    },
  },
  {
    slug: "cold-chain-iot-telemetry",
    title: "Cold‑chain IoT telemetry pilot",
    industry: "Healthcare",
    timeframe: "12 weeks",
    summary:
      "Prototyped sensor devices, telemetry pipeline, and compliance dashboards for vaccine fridges.",
    challenge:
      "Manual temperature logs missed excursions; compliance risk and spoilage costs were high.",
    solution:
      "Selected sensors, built ESP firmware with OTA, MQTT ingestion, and a dashboard with alerting and audit logs; deployed to a regional pilot.",
    outcomes: [
      "Compliance +19 pts",
      "Spoilage −24%",
      "Alert response within 10 min",
    ],
    metrics: [
      { label: "compliance score", value: "+19" },
      { label: "spoilage", value: "−24%" },
      { label: "alert time", value: "<10m" },
      { label: "pilot sites", value: "8" },
    ],
    services: ["Hardware & IoT", "Web & Mobile Apps"],
    stack: ["ESP32", "MQTT", "Node", "Postgres", "Next.js"],
  },
];

export function getCaseBySlug(slug: string) {
  return allCaseStudies.find((c) => c.slug === slug);
}

export function getRelatedCases(cs: CaseStudy, take = 3) {
  return allCaseStudies
    .filter(
      (c) =>
        c.slug !== cs.slug &&
        (c.industry === cs.industry ||
          c.services.some((s) => cs.services.includes(s))),
    )
    .slice(0, take);
}

export function getIndustries() {
  return Array.from(new Set(allCaseStudies.map((c) => c.industry)));
}

export function getServices() {
  const s = allCaseStudies.flatMap((c) => c.services);
  return Array.from(new Set(s));
}
