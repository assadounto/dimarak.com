// =============================================================
// constants/solutions.ts — solution data
// =============================================================
export type CategoryKey = "all" | "web" | "ai" | "iot" | "platform";
export const categories: { key: CategoryKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "web", label: "Web/Mobile" },
  { key: "ai", label: "AI/ML" },
  { key: "iot", label: "IoT/Hardware" },
  { key: "platform", label: "Platform" },
];

export type Solution = {
  slug: string;
  title: string;
  blurb: string;
  icon:
    | "rocket"
    | "brain"
    | "circuit-board"
    | "refresh-ccw"
    | "message-square"
    | "database";
  timeline: string;
  priceFrom: string;
  outcomes: string[];
  deliverables: string[];
  category: Exclude<CategoryKey, "all">;
  industries: string[];
};

export const solutions: Solution[] = [
  {
    slug: "mvp-sprint",
    title: "MVP Sprint",
    blurb:
      "Design → build → launch a focused MVP with analytics and reliability basics.",
    icon: "rocket",
    timeline: "3–6 weeks",
    priceFrom: "from $15k",
    outcomes: [
      "Clickable prototype in week 1–2",
      "Shippable MVP with auth & billing",
      "CI/CD + observability",
      "User analytics & feedback loop",
    ],
    deliverables: [
      "User flows & prototype",
      "Frontend + backend",
      "Basic auth (email/SSO)",
      "Stripe‑ready billing (optional)",
      "Analytics & error tracking",
      "Docs & handoff",
    ],
    category: "web",
    industries: ["Fintech", "SaaS", "Marketplaces", "Internal tools"],
  },
  {
    slug: "ai-upgrade",
    title: "AI Upgrade",
    blurb:
      "Add an AI feature: search, summaries, Q&A, classification, or a support copilot.",
    icon: "brain",
    timeline: "2–5 weeks",
    priceFrom: "from $12k",
    outcomes: [
      "Problem framing & eval plan",
      "Working feature in your app",
      "Safety & telemetry hooks",
      "Ops playbook for updates",
    ],
    deliverables: [
      "Task design & eval metrics",
      "Model/service integration",
      "Guardrails & feedback",
      "Dashboards & analytics",
      "Docs & enablement",
    ],
    category: "ai",
    industries: ["SaaS", "Support ops", "E‑commerce", "Education"],
  },
  {
    slug: "helpdesk-copilot",
    title: "Support AI (Helpdesk Copilot)",
    blurb:
      "Reduce response times with an on‑brand assistant for agents and self‑service.",
    icon: "message-square",
    timeline: "2–4 weeks",
    priceFrom: "from $10k",
    outcomes: [
      "Faster first response & resolution",
      "Deflection via smart suggestions",
      "Analytics on intents & gaps",
      "Safe escalation to humans",
    ],
    deliverables: [
      "Data connectors (KB, tickets)",
      "Prompting & tools",
      "Human‑in‑the‑loop workflows",
      "QA & bias tests",
      "Ops dashboard",
    ],
    category: "ai",
    industries: ["SaaS", "Telco", "Fintech"],
  },
  {
    slug: "iot-pilot",
    title: "IoT Pilot",
    blurb: "Connect devices and stream telemetry with dashboards and alerts.",
    icon: "circuit-board",
    timeline: "4–8 weeks",
    priceFrom: "from $25k",
    outcomes: [
      "Device → cloud ingestion",
      "Fleet mgmt & OTA update path",
      "Live dashboards & alerts",
      "Pilot report & next‑steps",
    ],
    deliverables: [
      "Device firmware stub",
      "Ingestion pipeline",
      "Time‑series storage",
      "Dashboard UI",
      "Alerting & webhooks",
      "Runbook & training",
    ],
    category: "iot",
    industries: ["Healthcare", "Logistics", "Energy"],
  },
  {
    slug: "platform-modernization",
    title: "Platform Modernization",
    blurb:
      "Refactor critical paths for reliability, cost, and speed of change.",
    icon: "refresh-ccw",
    timeline: "4–10 weeks",
    priceFrom: "from $20k",
    outcomes: [
      "Latency / error rate reductions",
      "Infra cost savings",
      "CI/CD & test coverage up",
      "Incident rate down",
    ],
    deliverables: [
      "Hotspot audit & plan",
      "Refactors & migrations",
      "Observability baseline",
      "SLOs & runbooks",
      "KT & enablement",
    ],
    category: "platform",
    industries: ["Fintech", "SaaS", "Media"],
  },
  {
    slug: "data-platform-quickstart",
    title: "Data Platform Quickstart",
    blurb:
      "Stand up a basic ingest → model → visualize pipeline for decisions.",
    icon: "database",
    timeline: "3–6 weeks",
    priceFrom: "from $18k",
    outcomes: [
      "Source connectors & ingestion",
      "Modeled datasets",
      "BI dashboards",
      "Governance & access",
    ],
    deliverables: [
      "Warehouse/lake setup",
      "ETL/ELT jobs",
      "dbt models (optional)",
      "Dashboard pack",
      "Access & lineage basics",
    ],
    category: "platform",
    industries: ["Ops", "Finance", "Sales"],
  },
];

export function getSolutionBySlug(slug: string) {
  const s = solutions.find((x) => x.slug === slug);
  if (!s) return null;
  const catLabel =
    categories.find((c) => c.key === s.category)?.label ?? "Solution";
  return { ...s, categoryLabel: catLabel };
}

export function getRelatedSolutions(
  currentSlug: string,
  cat: Solution["category"],
) {
  return solutions
    .filter((s) => s.slug !== currentSlug && s.category === cat)
    .slice(0, 3);
}
