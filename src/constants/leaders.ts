// constants/leaders.ts
export type Leader = {
  name: string;
  role: string;
  bio: string; // short
  longBio: string; // full
  initials: string;
  image: string;
  linkedin?: string;
};

export const leaders: Leader[] = [
  {
    name: "Michael Abrefa",
    role: "Co founder & CEO",
    bio: "Electrical software engineer; product & hardware systems.",
    longBio:
      "Richmond leads multi-disciplinary teams across product, engineering, and hardware systems. Prior work spans commerce platforms, AI features, and IoT pilots in healthcare and logistics. He focuses on dependable systems, measurable outcomes, and secure operations.",
    initials: "RA",
    image: "/leaders/mike.jpeg",
    linkedin: "https://www.linkedin.com/in/…",
  },
  {
    name: "Richmond Adu-Kyere",
    role: "Co Founder & CTO",
    bio: "Electrical software engineer; product & hardware systems.",
    longBio:
      "Richmond leads multi-disciplinary teams across product, engineering, and hardware systems. Prior work spans commerce platforms, AI features, and IoT pilots in healthcare and logistics. He focuses on dependable systems, measurable outcomes, and secure operations.",
    initials: "RA",
    image: "/leaders/richmond.jpg",
    linkedin: "https://www.linkedin.com/in/…",
  },
  {
    name: "Richmond Adu-Kyere",
    role: "Design Manager",
    bio: "Electrical software engineer; product & hardware systems.",
    longBio:
      "Richmond leads multi-disciplinary teams across product, engineering, and hardware systems. Prior work spans commerce platforms, AI features, and IoT pilots in healthcare and logistics. He focuses on dependable systems, measurable outcomes, and secure operations.",
    initials: "RA",
    image: "/leaders/sedem.jpg",
    linkedin: "https://www.linkedin.com/in/…",
  },
  // …others
];
