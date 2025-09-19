// =============================================================
// app/(marketing)/case-studies/page.tsx — Case Studies Index (Lively)
// =============================================================
"use client";

import Link from "next/link";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  allCaseStudies,
  getIndustries,
  getServices,
} from "@/constants/case-studies";

// export const metadata = {
//   title: "Case Studies | Dimarak",
//   description: "Selected projects and outcomes across industries.",
// };

function qs(params: Record<string, string | undefined>) {
  const entries = Object.entries(params).filter(
    ([, v]) => v !== undefined && v !== "",
  ) as [string, string][];
  const s = new URLSearchParams(entries);
  return s.toString() ? `?${s.toString()}` : "";
}

export default function CaseStudiesIndexPage({
  searchParams,
}: {
  searchParams: { industry?: string; service?: string };
}) {
  const industries = getIndustries();
  const services = getServices();

  const filtered = useMemo(() => {
    return allCaseStudies.filter((c) => {
      const matchIndustry = searchParams.industry
        ? c.industry === searchParams.industry
        : true;
      const matchService = searchParams.service
        ? c.services.includes(searchParams.service)
        : true;
      return matchIndustry && matchService;
    });
  }, [searchParams]);

  const hasFilters = Boolean(searchParams.industry || searchParams.service);

  return (
    <main className="bg-background text-foreground">
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden border-b border-border/60">
        <HeroBG />

        <div className="relative container py-14 md:py-20">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            <span className="text-brand-gradient">Case Studies</span>
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Outcomes we care about: revenue lift, cost savings, risk reduction,
            and time-to-value.
          </p>

          {/* Filters */}
          <div className="mt-6 space-y-4">
            {/* Industry */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-muted-foreground">Industry:</span>
              <FilterPill
                href={qs({ service: searchParams.service })}
                active={!searchParams.industry}
              >
                All
              </FilterPill>
              {industries.map((ind) => (
                <FilterPill
                  key={ind}
                  href={qs({ industry: ind, service: searchParams.service })}
                  active={searchParams.industry === ind}
                >
                  {ind}
                </FilterPill>
              ))}
            </div>

            {/* Service */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-muted-foreground">Service:</span>
              <FilterPill
                href={qs({ industry: searchParams.industry })}
                active={!searchParams.service}
              >
                All
              </FilterPill>
              {services.map((svc) => (
                <FilterPill
                  key={svc}
                  href={qs({ industry: searchParams.industry, service: svc })}
                  active={searchParams.service === svc}
                >
                  {svc}
                </FilterPill>
              ))}
            </div>

            {/* Result count + clear */}
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span>
                Showing{" "}
                <span className="font-medium text-foreground">
                  {filtered.length}
                </span>{" "}
                case{filtered.length === 1 ? "" : "s"}
              </span>
              {hasFilters && (
                <Link
                  href="/case-studies"
                  className="rounded border border-border/60 bg-background px-2 py-1 hover:bg-accent/30"
                >
                  Clear filters
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Grid ===== */}
      <section className="container py-12 md:py-16">
        {filtered.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((c, i) => (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
              >
                <Link href={`/case-studies/${c.slug}`} className="block group">
                  <Card className="bg-card border-border transition hover:shadow-sm hover:bg-accent/20 relative overflow-hidden">
                    {/* soft corner glow */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition"
                      style={{
                        background:
                          "radial-gradient(40rem 40rem at 0% 0%, hsl(var(--primary)/.15), transparent 60%)",
                      }}
                    />
                    <CardHeader className="pb-2 relative">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{c.industry}</Badge>
                        {c.timeframe && (
                          <span className="text-xs text-muted-foreground">
                            {c.timeframe}
                          </span>
                        )}
                      </div>
                      <CardTitle className="mt-2 text-lg">{c.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground relative">
                      <p>{c.summary}</p>
                      {c.metrics?.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {c.metrics.slice(0, 2).map((m) => (
                            <MetricChip
                              key={m.label}
                              value={m.value}
                              label={m.label}
                            />
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-10">
          <div className="relative">
            <div
              className="brand-conic-border absolute -inset-[2px] rounded-xl"
              aria-hidden
            />
            <div className="relative rounded-xl border border-border/60 bg-card p-6 md:p-8">
              <div className="md:flex items-center justify-between gap-6">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">
                    Have a similar project in mind?
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Send us a brief — we’ll propose scope, timeline, and team.
                  </p>
                </div>
                <div className="mt-4 md:mt-0 flex gap-3">
                  <Button asChild>
                    <Link href="/contact">Request a proposal</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/services">Explore services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* local keyframes for hero tint drift */}
      <style jsx>{`
        @keyframes cs_tint {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(2%, 0, 0);
          }
        }
      `}</style>
    </main>
  );
}

/* ===== Bits & bobs ===== */

function FilterPill({
  href,
  active,
  children,
}: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={[
        "rounded-md px-3 py-1.5 text-xs transition",
        active
          ? "bg-brand-gradient-3 text-primary-foreground"
          : "border border-border/60 bg-background text-foreground hover:bg-accent/30",
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

function MetricChip({ value, label }: { value: string; label: string }) {
  return (
    <span className="rounded-md border border-border/60 bg-background px-2 py-1 text-xs">
      <span className="font-medium text-card-foreground">{value}</span> {label}
    </span>
  );
}

function EmptyState() {
  return (
    <Card className="bg-card border-border">
      <CardContent className="p-8 text-center">
        <div className="text-base font-medium">
          No case studies match these filters
        </div>
        <p className="mt-1 text-sm text-muted-foreground">
          Try a different combination or{" "}
          <Link href="/case-studies" className="underline">
            clear filters
          </Link>
          .
        </p>
      </CardContent>
    </Card>
  );
}

function HeroBG() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10">
      {/* Soft tint */}
      <div
        className="absolute inset-0 animate-[cs_tint_18s_linear_infinite] will-change-transform"
        style={{
          background: `
            radial-gradient(40rem 40rem at 25% 20%, hsl(var(--accent)/.18), transparent 60%),
            radial-gradient(28rem 28rem at 55% 40%, hsl(var(--muted)/.16), transparent 65%)
          `,
        }}
      />
      {/* Fine grid with fade */}
      <svg
        className="absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="cs-grid"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 28 0 L 0 0 0 28"
              fill="none"
              stroke="hsl(var(--primary) / .10)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cs-grid)" />
      </svg>
    </div>
  );
}
