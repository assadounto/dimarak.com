// =============================================================
// app/(marketing)/industries/[slug]/page.tsx — Industry detail
// =============================================================
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getIndustryBySlug } from "@/constants/industries";
import { solutions } from "@/constants/solutions";

export const metadata = {
  title: "Industry | Dimarak",
};

export default function IndustryDetail({
  params,
}: {
  params: { slug: string };
}) {
  const i = getIndustryBySlug(params.slug);
  if (!i) return notFound();
  const relevantSolutions = solutions.filter((s) =>
    i.solutionSlugs.includes(s.slug)
  );

  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="border-b border-border/60">
        <div className="container py-14 md:py-20">
          <div className="text-xs text-muted-foreground">Industry</div>
          <h1 className="mt-1 text-4xl md:text-5xl font-semibold tracking-tight">
            {i.title}
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">{i.blurb}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {i.kpis.map((k) => (
              <Badge key={k} variant="secondary">
                {k}
              </Badge>
            ))}
          </div>
          <div className="mt-8 flex gap-3">
            <Button asChild>
              <Link href={`/contact?industry=${i.slug}`}>Talk to us</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/case-studies">See case studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Challenges & How we help */}
      <section className="container py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-base">Common challenges</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="list-disc pl-5 space-y-1">
                {i.challenges.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-base">How we help</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="list-disc pl-5 space-y-1">
                {i.howWeHelp.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Compliance notes */}
      <section className="border-t border-b border-border/60 bg-muted/20">
        <div className="container py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Compliance notes
          </h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {i.compliance.map((note) => (
              <Card key={note} className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-base">
                    {note.split(":")[0]}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>
                    {note.split(":").slice(1).join(":").trim() ||
                      "Sector‑relevant requirements supported as needed."}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant solutions */}
      <section className="container py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Relevant solutions
        </h2>
        <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {relevantSolutions.map((s) => (
            <Card key={s.slug} className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-base">{s.title}</CardTitle>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Badge variant="secondary">{s.timeline}</Badge>
                  <Badge variant="secondary">{s.priceFrom}</Badge>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>{s.blurb}</p>
                <div className="mt-4 flex gap-2">
                  <Button asChild size="sm">
                    <Link href={`/solutions/${s.slug}`}>View</Link>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <Link href={`/contact?solution=${s.slug}`}>Contact</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Case studies */}
      <section className="border-t border-border/60 bg-muted/20">
        <div className="container py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Selected case studies
          </h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {i.caseStudies.map((cs) => (
              <Card key={cs.href} className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-base">{cs.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>{cs.blurb}</p>
                  <div className="mt-4 flex gap-2">
                    <Button asChild size="sm">
                      <Link href={cs.href}>Read</Link>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <Link href="/case-studies">All case studies</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-12 md:py-16">
        <div className="rounded-md border border-border/60 bg-card p-6 md:p-8">
          <div className="md:flex items-center justify-between gap-6">
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Plan an engagement for {i.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                We’ll tailor scope, security, and rollout to your environment.
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-3">
              <Button asChild>
                <Link href={`/contact?industry=${i.slug}`}>
                  Request a proposal
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/pricing">See pricing models</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
