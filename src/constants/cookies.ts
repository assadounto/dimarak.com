export type ConsentMap = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
};

export const defaultConsent: ConsentMap = {
  essential: true,
  analytics: false,
  marketing: false,
};

export const categories: {
  key: keyof ConsentMap;
  label: string;
  desc: string;
}[] = [
  {
    key: "essential",
    label: "Essential",
    desc: "Required for core functionality (security, preferences). Always on.",
  },
  {
    key: "analytics",
    label: "Analytics",
    desc: "Helps us understand usage and improve the site.",
  },
  {
    key: "marketing",
    label: "Marketing",
    desc: "Used to personalize content and measure campaigns.",
  },
];

export type CookieRow = {
  name: string;
  purpose: string;
  category: "Essential" | "Analytics" | "Marketing";
  provider: string;
  duration: string;
};

export const cookieCatalog: CookieRow[] = [
  {
    name: "dmrk_consent",
    purpose: "Stores your cookie preferences",
    category: "Essential",
    provider: "Dimarak",
    duration: "6 months",
  },
  {
    name: "__Secure-next.locale",
    purpose: "Remembers UI locale",
    category: "Essential",
    provider: "Dimarak",
    duration: "1 year",
  },
  {
    name: "_sentry",
    purpose: "Error/session tracking (Sentry)",
    category: "Analytics",
    provider: "Sentry",
    duration: "90 days",
  },
  {
    name: "mp_*_mixpanel",
    purpose: "Product analytics (Mixpanel)",
    category: "Analytics",
    provider: "Mixpanel",
    duration: "13 months",
  },
  {
    name: "_ga",
    purpose: "Google Analytics identifier",
    category: "Analytics",
    provider: "Google",
    duration: "13 months",
  },
  {
    name: "_fbp",
    purpose: "Facebook pixel identifier",
    category: "Marketing",
    provider: "Meta",
    duration: "3 months",
  },
];
