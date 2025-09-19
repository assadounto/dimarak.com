"use client";

import Link from "next/link";
import {
  CheckCircle2,
  ChevronRight,
  Truck,
  Banknote,
  Stethoscope,
} from "lucide-react";
import { SectionHeading } from "../common/SectionHeader";
import { Card, CardContent } from "../ui/card";

type CaseItem = {
  slug: string;
  industry: string;
  duration: string;
  title: string;
  kpis: string[];
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const CASES: CaseItem[] = [
  {
    slug: "logistics-vendor-onboarding",
    industry: "Logistics",
    duration: "6 months",
    title: "Automated vendor onboarding & billing",
    kpis: ["28% faster invoice cycles", "35% fewer manual reviews"],
    icon: Truck,
  },
  {
    slug: "fintech-kyc-risk-controls",
    industry: "Fintech",
    duration: "12 weeks",
    title: "KYC workflows with risk scoring & audit",
    kpis: ["-41% manual checks", "-22% fraud loss exposure"],
    icon: Banknote,
  },
  {
    slug: "healthcare-telemetry-platform",
    industry: "Healthcare",
    duration: "4 months",
    title: "Device telemetry & alerts for remote care",
    kpis: ["p95 alert latency < 3s", "99.95% platform uptime"],
    icon: Stethoscope,
  },
];

export function CaseStudies() {
  return (
    <section id="cases" className="relative">
      {/* Subtle background: neutral tints + fine grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(36rem 36rem at 18% 20%, hsl(var(--accent)/.14), transparent 60%),
              radial-gradient(28rem 28rem at 82% 70%, hsl(var(--muted)/.12), transparent 65%)
            `,
          }}
        />
        <svg
          className="absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="cases-grid"
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
          <rect width="100%" height="100%" fill="url(#cases-grid)" />
        </svg>
      </div>

      <div className="container py-16 md:py-20">
        <SectionHeading
          kicker="Results"
          title="Selected case studies"
          desc="Revenue lift, cost savings, risk reduction, and time-to-value."
        />

        <div className="mt-8 grid auto-rows-fr gap-5 md:grid-cols-3 sm:gap-6 lg:gap-8">
          {CASES.map(
            ({ slug, industry, duration, title, kpis, icon: Icon }) => (
              <Card
                key={slug}
                className="group relative h-full overflow-hidden border-border bg-card transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                {/* Clickable overlay */}
                <Link
                  href={`/case-studies/${slug}`}
                  className="absolute inset-0 z-10"
                  aria-label={`Read case: ${title}`}
                />

                {/* Decorative header / thumb substitute */}
                <div className="relative h-24 w-full border-b border-border/60">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(var(--primary)/.12) 0%, hsl(var(--secondary)/.12) 100%)",
                    }}
                  />
                  <Icon className="absolute right-4 top-1/2 h-6 w-6 -translate-y-1/2 text-muted-foreground" />
                </div>

                <CardContent className="p-6 text-sm">
                  {/* Chips */}
                  <div className="flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground">
                    <span className="rounded-md border border-border/60 bg-background/70 px-2 py-1">
                      {industry}
                    </span>
                    <span className="rounded-md border border-border/60 bg-background/70 px-2 py-1">
                      {duration}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-2 font-semibold text-card-foreground">
                    {title}
                  </h3>

                  {/* KPIs */}
                  <ul className="mt-3 space-y-1 text-muted-foreground">
                    {kpis.map((k) => (
                      <li key={k} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                        {k}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-4 inline-flex items-center text-xs font-medium text-primary underline-offset-2 group-hover:underline">
                    Read case <ChevronRight className="ml-1 h-3.5 w-3.5" />
                  </div>
                </CardContent>
              </Card>
            ),
          )}
        </div>

        {/* View all link */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          Want more details?{" "}
          <Link href="/case-studies" className="underline">
            Browse all case studies
          </Link>
          .
        </div>
      </div>
    </section>
  );
}
