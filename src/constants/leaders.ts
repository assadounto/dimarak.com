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
    name: "Richmond Adu-Kyere",
    role: "Founder & CEO",
    bio: "Electrical software engineer; product & hardware systems.",
    longBio:
      "Richmond leads multi-disciplinary teams across product, engineering, and hardware systems. Prior work spans commerce platforms, AI features, and IoT pilots in healthcare and logistics. He focuses on dependable systems, measurable outcomes, and secure operations.",
    initials: "RA",
    image: "/images/leaders/richmond.jpg",
    linkedin: "https://www.linkedin.com/in/…",
  },
  // …others
];
