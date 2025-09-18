// ===================================================================
// app/(marketing)/case-studies/[slug]/page.tsx — Case Study Detail
// ===================================================================
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  getCaseBySlug,
  allCaseStudies,
  getRelatedCases,
} from "@/constants/case-studies";

export async function generateStaticParams() {
  return allCaseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const cs = getCaseBySlug(params.slug);
  if (!cs) return {};
  return {
    title: `${cs.title} — Case Study | Dimarak`,
    description: cs.summary,
  };
}

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
      {/* Hero */}
      <section className="border-b border-border/60">
        <div className="container py-14 md:py-20">
          <div className="text-xs text-muted-foreground">
            <Link href="/case-studies" className="underline">
              Case Studies
            </Link>{" "}
            / <span className="text-foreground">{cs!.title}</span>
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{cs!.industry}</Badge>
            <span className="text-xs text-muted-foreground">
              {cs!.timeframe}
            </span>
          </div>
          <h1 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight">
            {cs!.title}
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">{cs!.summary}</p>

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
        </div>
      </section>

      {/* Challenge / Solution / Outcomes */}
      <section className="container py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-card border-border md:col-span-2">
            <CardHeader>
              <CardTitle className="text-base">Challenge</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {cs!.challenge}
            </CardContent>

            <CardHeader>
              <CardTitle className="text-base">Solution</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {cs!.solution}
            </CardContent>

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

          <Card className="bg-card border-border">
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
                  <div className="text-xs text-muted-foreground">{m.label}</div>
                </div>
              ))}
            </CardContent>

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
          </Card>
        </div>
      </section>

      {/* Testimonial */}
      {cs!.testimonial ? (
        <section className="border-t border-b border-border/60 bg-muted/20">
          <div className="container py-12 md:py-16">
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
          </div>
        </section>
      ) : null}

      {/* Related */}
      {related.length ? (
        <section className="container py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Related case studies
          </h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link key={r.slug} href={`/case-studies/${r.slug}`}>
                <Card className="bg-card border-border hover:bg-accent/20 transition">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{r.industry}</Badge>
                      <span className="text-xs text-muted-foreground">
                        {r.timeframe}
                      </span>
                    </div>
                    <CardTitle className="mt-2 text-base">{r.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <p>{r.summary}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {/* CTA */}
      <section className="border-t border-border/60">
        <div className="container py-12 md:py-16">
          <div className="rounded-md border border-border/60 bg-card p-6 md:p-8">
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
      </section>
    </main>
  );
}
