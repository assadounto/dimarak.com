
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/constants/services";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2, ChevronRight } from "lucide-react";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const svc = getServiceBySlug(params.slug);
  if (!svc) return {};
  return {
    title: `${svc.title} — Services | Dimarak`,
    description: svc.summary,
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const svc = getServiceBySlug(params.slug);
  if (!svc) notFound();

  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="border-b border-border/60">
        <div className="container py-14 md:py-20">
          <div className="text-xs text-muted-foreground">
            <Link href="/services" className="underline">
              Services
            </Link>{" "}
            / <span className="text-foreground">{svc!.title}</span>
          </div>
          <h1 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight">
            {svc!.title}
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">{svc!.summary}</p>

          <ul className="mt-6 grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
            {svc!.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/contact">Request a proposal</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/resources">Download one‑pager</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Deliverables & Timeline */}
      <section className="container py-14 md:py-20">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-card border-border md:col-span-2">
            <CardHeader>
              <CardTitle className="text-base">Deliverables</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="space-y-1">
                {svc!.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                    {d}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-base">Typical timeline</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="space-y-1">
                {svc!.timeline.map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <ChevronRight className="mt-0.5 h-4 w-4" />
                    {t}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-b border-border/60 bg-muted/20">
        <div className="container py-14 md:py-20">
          <h2 className="text-2xl md:text-3xl font-semibold">How we work</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {svc!.process.map((p) => (
              <Card key={p.name} className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-base">{p.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {p.desc}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container py-14 md:py-20">
        <h2 className="text-2xl md:text-3xl font-semibold">FAQs</h2>
        <div className="mt-6">
          <Accordion type="single" collapsible className="w-full">
            {svc!.faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60">
        <div className="container py-12 md:py-16">
          <div className="rounded-md border border-border/60 bg-card p-6 md:p-8">
            <div className="md:flex items-center justify-between gap-6">
              <div>
                <h3 className="text-lg md:text-xl font-semibold">
                  Ready to get started?
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Send us a brief — we’ll respond with a proposal and timeline.
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex gap-3">
                <Button asChild>
                  <Link href="/contact">Book a discovery call</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/resources">RFP checklist</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

