// =============================================================
// constants/subprocessors.ts — provider list
// =============================================================
export type Subprocessor = {
  name: string;
  website: string;
  purpose: string;
  dataCategories: string[];
  location: string; // primary processing location(s)
  dpa?: string;
  transfer?: string; // e.g., SCCs, IDTA, N/A
};

export const subprocessors: Subprocessor[] = [
  {
    name: "Vercel, Inc.",
    website: "https://vercel.com",
    purpose: "Application hosting, CDN, and build pipeline",
    dataCategories: ["Site usage metadata", "IP address", "Build artifacts"],
    location: "Global (regional routing)",
    dpa: "https://vercel.com/legal/dpa",
    transfer: "SCCs where applicable",
  },
  {
    name: "Amazon Web Services, Inc.",
    website: "https://aws.amazon.com",
    purpose: "Cloud infrastructure (compute, storage, databases)",
    dataCategories: ["Customer data (as configured)", "Logs/telemetry"],
    location: "Configured region (on request)",
    dpa: "https://aws.amazon.com/legal",
    transfer: "SCCs/IDTA where applicable",
  },
  {
    name: "Sentry (Functional Software, Inc.)",
    website: "https://sentry.io",
    purpose: "Error tracking and performance monitoring",
    dataCategories: ["Error events", "Stack traces", "Runtime metadata"],
    location: "EU/US (configurable)",
    dpa: "https://sentry.io/legal/dpa",
    transfer: "SCCs where applicable",
  },
  {
    name: "Mixpanel, Inc.",
    website: "https://mixpanel.com",
    purpose: "Product analytics (optional)",
    dataCategories: ["Usage events", "Device/geo metadata"],
    location: "US/EU (configurable)",
    dpa: "https://mixpanel.com/legal/dpa",
    transfer: "SCCs where applicable",
  },
  {
    name: "Stripe, Inc.",
    website: "https://stripe.com",
    purpose: "Payments & invoicing (if used)",
    dataCategories: ["Contact & billing", "Transaction metadata"],
    location: "Global",
    dpa: "https://stripe.com/dpa",
    transfer: "SCCs where applicable",
  },
  {
    name: "Resend, Inc.",
    website: "https://resend.com",
    purpose: "Transactional email (contact form, notifications)",
    dataCategories: ["Email addresses", "Message content (metadata)"],
    location: "US/EU (configurable)",
    dpa: "https://resend.com/legal/dpa",
    transfer: "SCCs where applicable",
  },
];
