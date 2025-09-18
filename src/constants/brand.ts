export const brand = {
  name: "Dimarak",
  tagline: "Engineering services for web, AI, and platforms.",
  boilerplateShort:
    "Dimarak is a services company delivering MVPs, AI features, IoT pilots, and platform modernization — with security, SLAs, and measurable outcomes.",
  email: "hello@dimarak.com",
  phone: "+233 (0) 20 000 0000",
  phoneShort: "+233 20 000 0000",
  location: "Accra, Ghana",
  social: {
    linkedin: "https://www.linkedin.com/company/dimarak",
    twitter: "", // optional
    github: "", // optional
  },
  boilerplate:
    "Dimarak is a services company that designs, builds, and operates dependable software and IoT systems. Ghana‑rooted and globally delivered, Dimarak partners with startups and enterprises to ship web and mobile apps, AI features, and connected device pilots — with enterprise‑grade security, SLAs, and long‑term support.",
  founder: {
    name: "Richmond Adu‑Kyere",
    title: "Founder & CEO",
    initials: "RA",
    image: "/images/leaders/richmond.jpg",
    bio: "Richmond Adu‑Kyere is the founder and CEO of Dimarak. An electrical software engineer by training, he leads multi‑disciplinary teams across product, engineering, and hardware systems. His focus is building dependable platforms and shipping outcomes that matter — from AI enablement to IoT pilots.",
  },
} as const;

export const logos = {
  wordmark: {
    light: "/brand/logos/wordmark-light.svg",
    dark: "/brand/logos/wordmark-dark.svg",
  },
  mark: {
    light: "/brand/logos/mark.svg",
  },
} as const;

export const palette = [
  {
    label: "Primary",
    varName: "--primary",
    note: "Use for key actions and highlights",
  },
  {
    label: "Secondary",
    varName: "--secondary",
    note: "Accent color for highlights",
  },
  { label: "Background", varName: "--background", note: "Default background" },
  { label: "Foreground", varName: "--foreground", note: "Primary text color" },
  { label: "Accent", varName: "--accent", note: "Subtle tints / surfaces" },
  { label: "Border", varName: "--border", note: "Dividers and outlines" },
] as const;
