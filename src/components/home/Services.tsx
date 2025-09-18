import Link from "next/link";
import { SectionHeading } from "../common/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Rocket, Cpu, Sparkles, Server, CheckCircle2 } from "lucide-react";

type Service = {
  title: string;
  slug: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  points: string[];
  href: string;
};

export const services: Service[] = [
  {
    title: "Software (Web & Mobile)",
    slug: "software",
    icon: Rocket,
    href: "/services/software",
    points: [
      "Next.js dashboards & storefronts",
      "React Native (Expo) apps",
      "Secure auth, billing, integrations",
    ],
  },
  {
    title: "Electronics & IoT",
    slug: "electronics-iot",
    icon: Cpu,
    href: "/services/electronics-iot",
    points: [
      "Prototypes & firmware (ESP32/Arduino)",
      "Gateways, OTA updates",
      "Telemetry & control APIs",
    ],
  },
  {
    title: "Cloud & Data",
    slug: "cloud-data",
    icon: Server,
    href: "/services/cloud-data",
    points: [
      "APIs & event pipelines",
      "Monitoring, logging, on-call",
      "RBAC/SSO, backups, SLAs",
    ],
  },
  {
    title: "AI Assistants",
    slug: "ai-assistants",
    icon: Sparkles,
    href: "/services/ai-assistants",
    points: [
      "Doc/chat search (RAG)",
      "Agents & copilots",
      "Workflow automation",
    ],
  },
];

export function Services() {
  return (
    <section id="services" aria-label="Services" className="relative">
      {/* Subtle background: neutral radial + fine grid (very low alpha) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(40rem 40rem at 20% 20%, hsl(var(--accent)/.14), transparent 60%),
              radial-gradient(32rem 32rem at 80% 60%, hsl(var(--muted)/.12), transparent 65%)
            `,
          }}
        />
        <svg
          className="absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="svc-grid"
              width="28"
              height="28"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 28 0 L 0 0 0 28"
                fill="none"
                stroke="hsl(var(--primary)/.10)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#svc-grid)" />
        </svg>
      </div>

      <div className="container py-16 md:py-20">
        <SectionHeading
          kicker="What we do"
          title="Services"
          desc="Software, electronics, and cloud—shipped with security and SLAs."
        />

        <div className="mt-8 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 lg:gap-8">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Card
                key={s.title}
                className="group relative h-full overflow-hidden border-border bg-card transition-shadow hover:shadow-md"
              >
                {/* Make entire card clickable */}
                <Link
                  href={s.href}
                  aria-label={`Learn more about ${s.title}`}
                  className="absolute inset-0 z-10"
                />
                {/* subtle top highlight on hover */}
                <div
                  className="pointer-events-none absolute -inset-px z-0 opacity-0 blur-md transition-opacity duration-200 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(180deg, hsl(var(--primary)/.10), transparent 40%)",
                  }}
                />
                <CardHeader className="relative z-10 pb-2">
                  <CardTitle className="flex items-center gap-2 text-base text-card-foreground">
                    <Icon className="h-5 w-5 text-primary" /> {s.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 pt-0 text-sm text-muted-foreground">
                  <ul className="space-y-1.5">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA row */}
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Need something adjacent (audits, modernization, integrations)?{" "}
          <a href="#contact" className="underline">
            Tell us what you need
          </a>
          .
        </p>
      </div>
    </section>
  );
}
