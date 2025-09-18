// ===================================================================
// app/(marketing)/case-studies/[slug]/page.tsx — Case Study Detail (Lively)
// ===================================================================
"use client";

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  getCaseBySlug,
  allCaseStudies,
  getRelatedCases,
} from "@/constants/case-studies";

// export async function generateStaticParams() {
//   return allCaseStudies.map((c) => ({ slug: c.slug }));
// }

// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const cs = getCaseBySlug(params.slug);
//   if (!cs) return {};
//   return {
//     title: `${cs.title} — Case Study | Dimarak`,
//     description: cs.summary,
//     openGraph: {
//       title: `${cs.title} — Case Study | Dimarak`,
//       description: cs.summary,
//       images: cs.cover ? [{ url: cs.cover }] : undefined,
//     },
//   };
// }

export default function CaseStudyDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const cs = getCaseBySlug(params.slug);
  if (!cs) notFound();

  const related = getRelatedCases(cs!, 3);

  return (
    <main className="bg-background text-foreground">
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden border-b border-border/60">
        <HeroBG />

        <div className="relative container py-14 md:py-20">
          {/* Breadcrumb */}
          <div className="text-xs text-muted-foreground">
            <Link href="/case-studies" className="underline">
              Case Studies
            </Link>{" "}
            / <span className="text-foreground">{cs!.title}</span>
          </div>

          {/* Meta row */}
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{cs!.industry}</Badge>
            {cs!.timeframe && (
              <span className="text-xs text-muted-foreground">
                {cs!.timeframe}
              </span>
            )}
          </div>

          <h1 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight">
            <span className="text-brand-gradient">{cs!.title}</span>
          </h1>

          <p className="mt-3 max-w-2xl text-muted-foreground">{cs!.summary}</p>

          {/* Services */}
          {!!cs!.services?.length && (
            <div className="mt-4 flex flex-wrap gap-2">
              {cs!.services.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-border/60 bg-background px-2 py-1 text-xs"
                >
                  {s}
                </span>
              ))}
            </div>
          )}

          {/* Optional cover image */}
          {cs!.cover && (
            <div className="mt-8 overflow-hidden rounded-lg border border-border/60">
              <div className="relative aspect-[16/7] w-full">
                <Image
                  src={cs!.cover}
                  alt={cs!.title}
                  fill
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ===== Body: Challenge / Solution / Outcomes + Sidebar ===== */}
      <section className="container py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="md:col-span-2"
          >
            <Card className="bg-card border-border">
              {/* Challenge */}
              <CardHeader>
                <CardTitle className="text-base">Challenge</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {cs!.challenge}
              </CardContent>

              {/* Solution */}
              <CardHeader>
                <CardTitle className="text-base">Solution</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {cs!.solution}
              </CardContent>

              {/* Outcomes */}
              <CardHeader>
                <CardTitle className="text-base">Outcomes</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <ul className="list-disc pl-5 space-y-1">
                  {cs!.outcomes.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="relative"
          >
            <div
              className="brand-conic-border absolute -inset-[2px] rounded-xl"
              aria-hidden
            />
            <Card className="relative rounded-xl bg-card border-border">
              {/* Project in numbers */}
              <CardHeader>
                <CardTitle className="text-base">Project in numbers</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-3">
                {cs!.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-md border border-border/60 bg-background p-3"
                  >
                    <div className="text-lg font-semibold text-card-foreground">
                      {m.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {m.label}
                    </div>
                  </div>
                ))}
              </CardContent>

              {/* Stack */}
              {!!cs!.stack?.length && (
                <>
                  <CardHeader>
                    <CardTitle className="text-base">Tech stack</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {cs!.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border/60 bg-background px-2 py-1 text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </CardContent>
                </>
              )}
            </Card>
          </motion.aside>
        </div>
      </section>

      {/* ===== Testimonial ===== */}
      {cs!.testimonial ? (
        <section className="border-t border-b border-border/60 bg-muted/20">
          <div className="container py-12 md:py-16">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
            >
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-sm">
                  <p className="text-card-foreground">
                    “{cs!.testimonial!.quote}”
                  </p>
                  <div className="mt-2 text-xs text-muted-foreground">
                    — {cs!.testimonial!.name}, {cs!.testimonial!.title}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      ) : null}

      {/* ===== Related ===== */}
      {related.length ? (
        <section className="container py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Related case studies
          </h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {related.map((r, i) => (
              <motion.div
                key={r.slug}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
              >
                <Link href={`/case-studies/${r.slug}`} className="block group">
                  <Card className="bg-card border-border hover:bg-accent/20 transition relative overflow-hidden">
                    {/* soft glow */}
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
                        <Badge variant="secondary">{r.industry}</Badge>
                        {r.timeframe && (
                          <span className="text-xs text-muted-foreground">
                            {r.timeframe}
                          </span>
                        )}
                      </div>
                      <CardTitle className="mt-2 text-base">
                        {r.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground relative">
                      <p>{r.summary}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      ) : null}

      {/* ===== CTA ===== */}
      <section className="border-t border-border/60">
        <div className="container py-12 md:py-16">
          <div className="relative">
            <div
              className="brand-conic-border absolute -inset-[2px] rounded-xl"
              aria-hidden
            />
            <div className="relative rounded-xl border border-border/60 bg-card p-6 md:p-8">
              <div className="md:flex items-center justify-between gap-6">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">
                    Have a project like this?
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Let’s talk through your goals and constraints.
                  </p>
                </div>
                <div className="mt-4 md:mt-0 flex gap-3">
                  <Button asChild>
                    <Link href="/contact">Book a discovery call</Link>
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

      {/* local keyframes for hero tint */}
      <style jsx>{`
        @keyframes csd_tint {
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

/* ===== Helpers ===== */

function HeroBG() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10">
      {/* Soft tint */}
      <div
        className="absolute inset-0 animate-[csd_tint_18s_linear_infinite] will-change-transform"
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
            id="csd-grid"
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
        <rect width="100%" height="100%" fill="url(#csd-grid)" />
      </svg>
    </div>
  );
}
