// =============================================================
// constants/industries.ts — industry data
// =============================================================
export type Industry = {
  slug: string;
  title: string;
  blurb: string;
  icon: "credit-card" | "activity" | "truck" | "bolt" | "signal" | "building-2";
  kpis: string[];
  challenges: string[];
  howWeHelp: string[];
  compliance: string[]; // use "Label: description" format
  solutionSlugs: string[];
  caseStudies: { title: string; href: string; blurb: string }[];
};

export const industries: Industry[] = [
  {
    slug: "fintech",
    title: "Fintech",
    blurb:
      "Ship compliant experiences for payments, lending, and financial ops with strong controls and auditability.",
    icon: "credit-card",
    kpis: ["Time‑to‑market", "Approval rate", "Incident rate ↓"],
    challenges: [
      "Integrations with PSPs, KYC/AML providers, and ledgers",
      "Latency and reliability for critical payment flows",
      "Audit trails, permissions, and reconciliation",
    ],
    howWeHelp: [
      "MVP/payment flows with robust logging and retries",
      "Admin portals with RBAC and immutable audit logs",
      "Data pipelines for reconciliation and reporting",
    ],
    compliance: [
      "PCI DSS: scope reduction, tokenization, and provider reviews",
      "ISO 27001: align controls and documentation to your ISMS",
      "KYC/AML: integrate providers and support evidence capture",
    ],
    solutionSlugs: [
      "mvp-sprint",
      "platform-modernization",
      "data-platform-quickstart",
    ],
    caseStudies: [
      {
        title: "Payments platform refactor",
        href: "/case-studies/payments-platform",
        blurb: "Latency down 42%, auth errors down 68%.",
      },
      {
        title: "Lending onboarding MVP",
        href: "/case-studies/lending-onboarding",
        blurb: "KYC integration and approval pipeline in 5 weeks.",
      },
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    blurb:
      "Reliable systems for patient journeys, scheduling, and device telemetry — designed for safety and privacy.",
    icon: "activity",
    kpis: ["Uptime", "Time‑to‑triage", "Clinician adoption"],
    challenges: [
      "Legacy interoperability (HL7/FHIR) and vendor APIs",
      "Device data ingestion and alerting",
      "Privacy and consent management",
    ],
    howWeHelp: [
      "FHIR/REST connectors with audit trails",
      "IoT ingestion and alert pipelines with dashboards",
      "Privacy‑first UX and data retention policies",
    ],
    compliance: [
      "Health data: privacy safeguards and regional residency",
      "Clinical safety: change control and auditability",
      "Vendor risk: subprocessors reviews and DPAs",
    ],
    solutionSlugs: ["iot-pilot", "ai-upgrade", "data-platform-quickstart"],
    caseStudies: [
      {
        title: "Cold‑chain telemetry pilot",
        href: "/case-studies/cold-chain",
        blurb: "Live dashboards and alerts across 30 sites.",
      },
    ],
  },
  {
    slug: "logistics",
    title: "Logistics",
    blurb:
      "Track assets, optimize routes, and surface operational insights with dependable platforms.",
    icon: "truck",
    kpis: ["On‑time rate", "Asset utilization", "Ops cost ↓"],
    challenges: [
      "Real‑time tracking and ETA prediction",
      "Heterogeneous carrier & warehouse integrations",
      "Exception handling and visibility",
    ],
    howWeHelp: [
      "Telematics ingestion and map visualizations",
      "Carrier/WMS integrations with retries and observability",
      "Ops dashboards with alerting and workflows",
    ],
    compliance: [
      "Data retention: configurable per lane/region",
      "Access control: RBAC by role/region/account",
      "Incident response: SLAs and escalation paths",
    ],
    solutionSlugs: ["iot-pilot", "platform-modernization", "mvp-sprint"],
    caseStudies: [
      {
        title: "Fleet visibility rollout",
        href: "/case-studies/fleet-visibility",
        blurb: "Exception rate down 31% after 6 weeks.",
      },
    ],
  },
  {
    slug: "energy",
    title: "Energy",
    blurb:
      "Telemetry, forecasting, and safety‑critical operations for generation and distribution.",
    icon: "bolt",
    kpis: ["MTTR ↓", "Forecast accuracy", "Safety incidents ↓"],
    challenges: [
      "Distributed sensor streams and rugged environments",
      "Anomaly detection and forecasting",
      "Regulatory reporting and evidence",
    ],
    howWeHelp: [
      "Edge → cloud pipelines with buffering and backfill",
      "Time‑series modeling and alerting",
      "Compliance‑ready audit/docs & runbooks",
    ],
    compliance: [
      "Operational safety: access controls & change logs",
      "Critical infra: incident response and drills",
      "Data residency: regional deployments on request",
    ],
    solutionSlugs: [
      "iot-pilot",
      "data-platform-quickstart",
      "platform-modernization",
    ],
    caseStudies: [
      {
        title: "Predictive maintenance PoC",
        href: "/case-studies/predictive-maintenance",
        blurb: "Failure alerts 2 days earlier on average.",
      },
    ],
  },
  {
    slug: "telco",
    title: "Telecommunications",
    blurb:
      "Scale customer experiences and network‑adjacent tooling with clear SLAs and telemetry.",
    icon: "signal",
    kpis: ["NPS ↑", "AHT ↓", "Self‑serve rate ↑"],
    challenges: [
      "High‑volume support and deflection",
      "Legacy BSS/OSS integrations",
      "Availability and incident runbooks",
    ],
    howWeHelp: [
      "Support AI for agents/self‑service",
      "Stable integration layers with retries",
      "SLOs, dashboards, and on‑call playbooks",
    ],
    compliance: [
      "PII handling: minimization & access logging",
      "Vendor risk: subprocessors and DPAs",
      "Regional data residency on request",
    ],
    solutionSlugs: ["helpdesk-copilot", "platform-modernization", "mvp-sprint"],
    caseStudies: [
      {
        title: "Agent assist rollout",
        href: "/case-studies/agent-assist",
        blurb: "First response cut by 40% with safe escalation.",
      },
    ],
  },
  {
    slug: "public-sector",
    title: "Public sector",
    blurb:
      "Citizen‑facing services and internal tools with reliability and accountability.",
    icon: "building-2",
    kpis: ["Service uptime", "Task completion", "Cost‑to‑serve ↓"],
    challenges: [
      "Procurement and security accreditation",
      "Data collection and privacy by default",
      "Inter‑agency integrations and reporting",
    ],
    howWeHelp: [
      "Rapid prototypes to reduce risk before scale",
      "Accessible, mobile‑first interfaces",
      "Audit logs and transparent performance metrics",
    ],
    compliance: [
      "Accessibility: WCAG‑aligned UI patterns",
      "Security: SSO/RBAC and incident playbooks",
      "Records: retention policies and exports",
    ],
    solutionSlugs: [
      "mvp-sprint",
      "data-platform-quickstart",
      "platform-modernization",
    ],
    caseStudies: [
      {
        title: "Permitting portal",
        href: "/case-studies/permits-portal",
        blurb: "Average completion time down 55%.",
      },
    ],
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((x) => x.slug === slug) || null;
}
