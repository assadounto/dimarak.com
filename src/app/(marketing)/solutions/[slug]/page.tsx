

// =============================================================
// app/(marketing)/solutions/[slug]/page.tsx — Solution detail
// =============================================================
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import { getSolutionBySlug, getRelatedSolutions } from "@/constants/solutions";

export const metadata = {
  title: "Solution | Dimarak",
};

export default function SolutionDetail({
  params,
}: {
  params: { slug: string };
}) {
  const s = getSolutionBySlug(params.slug);
  if (!s) return notFound();

  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="border-b border-border/60">
        <div className="container py-14 md:py-20">
          <div className="text-xs text-muted-foreground">Solution</div>
          <h1 className="mt-1 text-4xl md:text-5xl font-semibold tracking-tight">
            {s.title}
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">{s.blurb}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge variant="secondary">{s.timeline}</Badge>
            <Badge variant="secondary">{s.priceFrom}</Badge>
            <Badge variant="secondary" className="capitalize">
              {s.categoryLabel}
            </Badge>
          </div>
          <div className="mt-8 flex gap-3">
            <Button asChild>
              <Link href={`/contact?solution=${s.slug}`}>
                Request this package
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/services">See related services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Outcomes / Deliverables */}
      <section className="container py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-base">Expected outcomes</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="space-y-1">
                {s.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /> {o}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-base">What you get</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="list-disc pl-5 space-y-1">
                {s.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-b border-border/60 bg-muted/20">
        <div className="container py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">How it works</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              {
                t: "Discovery",
                d: "1–3 sessions to confirm scope, risks, and success metrics.",
              },
              {
                t: "Build",
                d: "Design & engineering sprints with weekly demos and QA.",
              },
              { t: "Handoff", d: "Deploy, docs, training, and support plan." },
            ].map((step) => (
              <Card key={step.t} className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-base">{step.t}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {step.d}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Where this fits */}
      <section className="container py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-card border-border md:col-span-2">
            <CardHeader>
              <CardTitle className="text-base">Best for</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <div className="flex flex-wrap gap-2">
                {s.industries.map((i) => (
                  <span
                    key={i}
                    className="rounded-md border border-border/60 bg-background px-2 py-1 text-xs"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-base">Timeline & pricing</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-1">
              <div>
                <span className="text-foreground/90 font-medium">
                  Estimated timeline:
                </span>{" "}
                {s.timeline}
              </div>
              <div>
                <span className="text-foreground/90 font-medium">
                  Starts at:
                </span>{" "}
                {s.priceFrom}
              </div>
              <p className="text-xs text-muted-foreground">
                Exact scope and estimates provided after discovery.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-border/60 bg-muted/20">
        <div className="container py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Related solutions
          </h2>
          <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {getRelatedSolutions(s.slug, s.category).map((r) => (
              <Card key={r.slug} className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-base">{r.title}</CardTitle>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="secondary">{r.timeline}</Badge>
                    <Badge variant="secondary">{r.priceFrom}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>{r.blurb}</p>
                  <div className="mt-4 flex gap-2">
                    <Button asChild size="sm">
                      <Link href={`/solutions/${r.slug}`}>View</Link>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <Link href={`/contact?solution=${r.slug}`}>Contact</Link>
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
                Ready to start?
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Tell us about your goals and constraints — we’ll tailor the
                package.
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-3">
              <Button asChild>
                <Link href={`/contact?solution=${s.slug}`}>
                  Request this solution
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/pricing">See pricing models</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
