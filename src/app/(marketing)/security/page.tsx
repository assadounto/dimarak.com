// =============================================================
// app/(marketing)/security/page.tsx — Security & Compliance
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
  Lock,
  Server,
  FileText,
  AlertTriangle,
} from "lucide-react";

export const metadata = {
  title: "Security & Compliance | Dimarak",
  description:
    "Overview of Dimarak's security controls: SSO/OIDC, RBAC, audit logs, encryption, incident response, and data handling.",
};

const controls = [
  {
    category: "Access Management",
    items: [
      "SSO / OIDC (Google, GitHub) with optional MFA (via IdP)",
      "Role‑based access control (RBAC) with least privilege",
      "Granular project- and environment-level permissions",
    ],
  },
  {
    category: "Data Protection",
    items: [
      "Encryption in transit (TLS 1.2+)",
      "Encryption at rest (cloud‑managed keys)",
      "Backups with periodic restore tests",
    ],
  },
  {
    category: "Logging & Audit",
    items: [
      "Structured logs for critical actions",
      "Immutable audit trails (read/export)",
      "Alerting on auth & privilege anomalies",
    ],
  },
  {
    category: "Application Security",
    items: [
      "Secure SDLC (code review, dependency scanning)",
      "OWASP‑informed testing & threat modeling for new features",
      "Secrets management via cloud vaults",
    ],
  },
  {
    category: "Infrastructure",
    items: [
      "VPC isolation and security groups",
      "Hardened CI/CD with least‑privilege deploy roles",
      "Regional deployments & data residency on request",
    ],
  },
  {
    category: "Business Continuity",
    items: [
      "RTO/RPO targets defined per engagement",
      "Incident playbooks & on‑call escalation paths",
      "Uptime targets with SLAs (see Pricing)",
    ],
  },
];

const policies = [
  { name: "Privacy Policy", href: "/legal/privacy" },
  { name: "Terms of Service", href: "/legal/terms" },
  { name: "Data Processing Addendum (DPA)", href: "/legal/dpa" },
  { name: "Subprocessors", href: "/legal/subprocessors" },
  { name: "Cookies", href: "/legal/cookies" },
];

const faqs = [
  {
    q: "Can you deploy into our cloud?",
    a: "Yes. We support AWS, GCP, or Azure with VPC setups, private networking, and regional data residency as required.",
  },
  {
    q: "Do you provide SSO and role‑based access?",
    a: "Yes. We support SSO/OIDC (e.g., Google, GitHub) and RBAC with least‑privilege defaults.",
  },
  {
    q: "How do you handle incidents?",
    a: "We follow a documented process: detect, triage, contain, remediate, and post‑mortem with corrective actions. We notify affected customers per contract.",
  },
  {
    q: "Do you sign a DPA and support data residency?",
    a: "Yes. We have a standard DPA and can scope data residency requirements during discovery.",
  },
];

export default function SecurityPage() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="border-b border-border/60">
        <div className="container py-14 md:py-20">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Security & Compliance
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            We design with least‑privilege, encrypted data flows, and auditable
            controls. For disclosure or urgent issues, email{" "}
            <a className="underline" href="mailto:security@dimarak.com">
              security@dimarak.com
            </a>
            .
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge variant="secondary">SSO / OIDC</Badge>
            <Badge variant="secondary">RBAC</Badge>
            <Badge variant="secondary">Audit logs</Badge>
            <Badge variant="secondary">Encryption</Badge>
            <Badge variant="secondary">Data residency</Badge>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/contact">Book a security review</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/legal/dpa">View DPA</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Controls matrix */}
      <section className="container py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Controls overview
        </h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {controls.map((group) => (
            <Card key={group.category} className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5" /> {group.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <ul className="space-y-1">
                  {group.items.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Data handling */}
      <section className="border-t border-b border-border/60 bg-muted/20">
        <div className="container py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Data handling & retention
          </h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-border md:col-span-2">
              <CardHeader>
                <CardTitle className="text-base">Standard practices</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <ul className="space-y-1">
                  <li className="flex items-start gap-2">
                    <Lock className="mt-0.5 h-4 w-4" /> Encryption in transit
                    (TLS 1.2+) and at rest
                  </li>
                  <li className="flex items-start gap-2">
                    <Server className="mt-0.5 h-4 w-4" /> Region selection &
                    data residency on request
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="mt-0.5 h-4 w-4" /> DPAs for applicable
                    customers
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="mt-0.5 h-4 w-4" /> Data deletion upon
                    contract termination or per request
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-base">Retention</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>
                  Defaults are set per‑engagement. Logs and backups follow
                  configurable retention policies. We can align with your policy
                  during discovery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Incident response */}
      <section className="container py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Incident response
        </h2>
        <div className="mt-6 grid md:grid-cols-4 gap-6">
          {[
            {
              title: "Detect",
              desc: "Monitoring & alerting across app and infra layers.",
            },
            {
              title: "Triage",
              desc: "Assess severity, assemble incident commander and on‑call.",
            },
            {
              title: "Contain & Remediate",
              desc: "Limit blast radius, apply fixes, validate.",
            },
            {
              title: "Post‑mortem",
              desc: "Timeline, root cause, corrective actions, customer comms.",
            },
          ].map((s) => (
            <Card key={s.title} className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" /> {s.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {s.desc}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Policies & docs */}
      <section className="border-t border-border/60 bg-muted/20">
        <div className="container py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Policies & documents
          </h2>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {policies.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="rounded-md border border-border/60 bg-card p-4 text-sm hover:bg-accent/20 transition"
              >
                {p.name}
              </Link>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Need a security questionnaire or a custom DPA?{" "}
            <Link href="/contact" className="underline">
              Contact us
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-12 md:py-16">
        <div className="rounded-md border border-border/60 bg-card p-6 md:p-8">
          <div className="md:flex items-center justify-between gap-6">
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Request a security review
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                We\'ll walk through controls, data flows, and SLAs with your
                team.
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-3">
              <Button asChild>
                <Link href="/contact">Talk to security</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/pricing">See engagement models</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
