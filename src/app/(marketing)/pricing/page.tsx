// =============================================================
// app/(marketing)/pricing/page.tsx — Pricing / Engagement
// =============================================================


import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle2,
  ShieldCheck,
  Clock,
  UserRound,
  Zap,
  Crown,
  BriefcaseBusiness,
  Headphones,
  FileText,
} from "lucide-react";

export const metadata = {
  title: "Pricing & Engagement | Dimarak",
  description:
    "Engagement models for projects, retainers, and enterprise support. Response times, SLAs, and inclusions.",
};

const tiers = [
  {
    name: "Project",
    tagline: "Fixed‑scope delivery",
    price: "from $10k",
    badge: "Popular for MVPs",
    icon: BriefcaseBusiness,
    response: "< 1 business day",
    uptime: "N/A",
    includes: [
      "Scoped plan & estimates",
      "Design + build + launch",
      "Weekly demos",
      "CI/CD & analytics",
    ],
    cta: { label: "Get a quote", href: "/contact" },
  },
  {
    name: "Retainer",
    tagline: "Ongoing roadmap & iterations",
    price: "from $8k/mo",
    badge: "Best value",
    icon: Zap,
    response: "< 4 hours",
    uptime: "99.9%",
    includes: [
      "Quarterly roadmap",
      "Design & engineering squad",
      "SLAs & incident response",
      "Backlog management",
    ],
    highlighted: true,
    cta: { label: "Book a slot", href: "/contact" },
  },
  {
    name: "Enterprise",
    tagline: "Tailored to your org & security",
    price: "custom",
    badge: "Procurement‑ready",
    icon: Crown,
    response: "< 1 hour",
    uptime: "99.95%",
    includes: [
      "Dedicated success manager",
      "SSO/RBAC, audit logs",
      "Custom SLAs & reporting",
      "Security review & DPA",
    ],
    cta: { label: "Talk to sales", href: "/contact" },
  },
] as const;

const comparison = [
  { feature: "SSO / OIDC", values: ["—", "Included", "Included"] },
  { feature: "RBAC & audit logs", values: ["—", "Included", "Included"] },
  { feature: "SLA uptime", values: ["—", "99.9%", "99.95%"] },
  {
    feature: "SLA response",
    values: ["< 1 business day", "< 4 hours", "< 1 hour"],
  },
  {
    feature: "Dedicated success manager",
    values: ["—", "Optional", "Included"],
  },
  { feature: "Security review", values: ["—", "Optional", "Included"] },
  { feature: "DPA & data residency", values: ["—", "Optional", "Available"] },
  {
    feature: "Support channels",
    values: ["Email", "Email + Slack", "Email + Slack + On‑call"],
  },
  {
    feature: "Onboarding & training",
    values: ["Basic", "Standard", "Enhanced"],
  },
];

const addons = [
  {
    title: "Design Sprint (1–2 weeks)",
    desc: "Problem framing, UX flows, clickable prototype, and prioritized backlog.",
  },
  {
    title: "Security Review",
    desc: "Threat model, control review, and remediation plan. Useful pre‑launch.",
  },
  {
    title: "Dedicated PM",
    desc: "Embedded PM for complex programs and stakeholder alignment.",
  },
  {
    title: "Extended Support",
    desc: "24/7 on‑call coverage and regional rotations.",
  },
];

const faqs = [
  {
    q: "How do we start?",
    a: "Send a brief on /contact. We run a short discovery, then share a proposal with scope, timeline, and team.",
  },
  {
    q: "Can you work with our cloud?",
    a: "Yes. We deploy to AWS, GCP, or Azure and can support VPC & residency requirements.",
  },
  {
    q: "What billing options are available?",
    a: "Cards or invoicing. For Enterprise, we support POs, MSAs, and vendor onboarding.",
  },
  {
    q: "Do prices include tooling?",
    a: "Open‑source defaults are included; commercial tools (e.g., error tracking) can be billed at cost or through your accounts.",
  },
];

export default function PricingPage() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="border-b border-border/60">
        <div className="container py-14 md:py-20">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Pricing & Engagement
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Choose the model that fits your goals. We’ll align scope, timeline,
            and success metrics, then deliver with SLAs and clear reporting.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge variant="secondary">Projects</Badge>
            <Badge variant="secondary">Retainers</Badge>
            <Badge variant="secondary">Enterprise SLAs</Badge>
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="container py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <Card
              key={t.name}
              className={`bg-card border-border ${t.highlighted ? "ring-1 ring-ring" : ""}`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-base">{t.name}</CardTitle>
                    <div className="text-xs text-muted-foreground">
                      {t.tagline}
                    </div>
                  </div>
                  <t.icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <div className="text-2xl font-semibold text-card-foreground">
                    {t.price}
                  </div>
                  {t.badge ? (
                    <Badge variant="secondary">{t.badge}</Badge>
                  ) : null}
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-md border border-border/60 bg-background p-3">
                    <div className="text-xs text-muted-foreground">
                      Response
                    </div>
                    <div className="text-sm font-medium text-card-foreground">
                      {t.response}
                    </div>
                  </div>
                  <div className="rounded-md border border-border/60 bg-background p-3">
                    <div className="text-xs text-muted-foreground">Uptime</div>
                    <div className="text-sm font-medium text-card-foreground">
                      {t.uptime}
                    </div>
                  </div>
                </div>
                <ul className="mt-4 space-y-1">
                  {t.includes.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />{" "}
                      {i}
                    </li>
                  ))}
                </ul>
                <div className="mt-5">
                  <Button asChild className="w-full">
                    <Link href={t.cta.href}>{t.cta.label}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="border-t border-b border-border/60 bg-muted/20">
        <div className="container py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Compare plans</h2>
          <div className="mt-6 overflow-x-auto rounded-md border border-border/60 bg-card">
            <table className="w-full text-sm">
              <thead className="bg-muted/30 text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 text-left font-medium text-foreground/80">
                    Feature
                  </th>
                  {tiers.map((t) => (
                    <th
                      key={t.name}
                      className="px-4 py-3 text-left font-medium"
                    >
                      {t.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, idx) => (
                  <tr
                    key={row.feature}
                    className={idx % 2 === 0 ? "bg-background" : ""}
                  >
                    <td className="px-4 py-3 whitespace-nowrap text-foreground/90">
                      {row.feature}
                    </td>
                    {row.values.map((val, i) => (
                      <td
                        key={`${row.feature}-${i}`}
                        className="px-4 py-3 whitespace-nowrap text-muted-foreground"
                      >
                        {val === "Included" ? (
                          <span className="inline-flex items-center gap-1">
                            <CheckCircle2 className="h-4 w-4 text-primary" />{" "}
                            Included
                          </span>
                        ) : val === "—" ? (
                          <span className="text-muted-foreground/60">—</span>
                        ) : (
                          val
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            SLAs apply to supported products and environments agreed in scope.
            Higher uptime targets may be available on request.
          </p>
        </div>
      </section>

      {/* Add‑ons */}
      <section className="container py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Add‑ons</h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {addons.map((a) => (
            <Card key={a.title} className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-base">{a.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {a.desc}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Procurement & Legal */}
      <section className="border-t border-b border-border/60 bg-muted/20">
        <div className="container py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Procurement & Legal
          </h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5" /> Security
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                SSO/OIDC, RBAC, audit logs, encryption. See{" "}
                <Link href="/security" className="underline">
                  Security
                </Link>
                .
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <FileText className="h-5 w-5" /> Legal docs
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-1">
                <div>
                  <Link href="/legal/privacy" className="underline">
                    Privacy Policy
                  </Link>
                </div>
                <div>
                  <Link href="/legal/terms" className="underline">
                    Terms of Service
                  </Link>
                </div>
                <div>
                  <Link href="/legal/dpa" className="underline">
                    Data Processing Addendum
                  </Link>
                </div>
                <div>
                  <Link href="/legal/subprocessors" className="underline">
                    Subprocessors
                  </Link>
                </div>
                <div>
                  <Link href="/legal/cookies" className="underline">
                    Cookies
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Headphones className="h-5 w-5" /> Support
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Email support for all plans; Slack connect for Retainer &
                Enterprise; optional on‑call rotations.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">FAQs</h2>
        <div className="mt-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
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
                  Ready to scope your engagement?
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Tell us your goals and constraints — we’ll send a proposal
                  with timeline and team.
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
      </section>
    </main>
  );
}
