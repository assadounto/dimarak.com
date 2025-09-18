// =============================================================
// app/(marketing)/legal/page.tsx — Legal Hub
// =============================================================

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShieldCheck,
  FileText,
  Scale,
  Cookie,
  Users,
  Lock,
} from "lucide-react";

export const metadata = {
  title: "Legal | Dimarak",
  description:
    "Privacy, Terms, DPA, Subprocessors, and Cookies for Dimarak services.",
};

const docs = [
  {
    icon: FileText,
    title: "Privacy Policy",
    desc: "How we collect, use, share, and retain information.",
    href: "/legal/privacy",
    badge: "Updated",
  },
  {
    icon: Scale,
    title: "Terms of Service",
    desc: "Contract terms governing the use of our services and website.",
    href: "/legal/terms",
  },
  {
    icon: ShieldCheck,
    title: "Data Processing Addendum (DPA)",
    desc: "Our standard DPA for customers processing personal data with us.",
    href: "/legal/dpa",
  },
  {
    icon: Users,
    title: "Subprocessors",
    desc: "List of third‑party service providers and the purpose of processing.",
    href: "/legal/subprocessors",
  },
  {
    icon: Cookie,
    title: "Cookies & Preferences",
    desc: "Cookie categories, purposes, retention, and managing consent.",
    href: "/legal/cookies",
  },
];

export default function LegalHubPage() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="border-b border-border/60">
        <div className="container py-14 md:py-20">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Legal
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Find our key legal documents and compliance resources. For vendor
            onboarding or legal requests, email{" "}
            <a className="underline" href="mailto:legal@dimarak.com">
              legal@dimarak.com
            </a>
            .
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge variant="secondary">Privacy</Badge>
            <Badge variant="secondary">Terms</Badge>
            <Badge variant="secondary">DPA</Badge>
            <Badge variant="secondary">Subprocessors</Badge>
            <Badge variant="secondary">Cookies</Badge>
          </div>
        </div>
      </section>

      {/* Docs grid */}
      <section className="container py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {docs.map((d) => (
            <Link key={d.title} href={d.href}>
              <Card className="bg-card border-border hover:bg-accent/20 transition">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <d.icon className="h-5 w-5 text-muted-foreground" />{" "}
                    {d.title}
                    {d.badge ? (
                      <Badge variant="secondary" className="ml-auto">
                        {d.badge}
                      </Badge>
                    ) : null}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>{d.desc}</p>
                  <span className="mt-3 inline-flex text-xs underline">
                    View document
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Compliance summary */}
      <section className="border-t border-b border-border/60 bg-muted/20">
        <div className="container py-12 md:py-16">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-border md:col-span-2">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Lock className="h-5 w-5" /> Security & compliance
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>
                  We design and operate with least‑privilege access, encryption
                  in transit and at rest, auditable controls, and documented
                  incident response. Learn more on our{" "}
                  <Link href="/security" className="underline">
                    Security
                  </Link>{" "}
                  page.
                </p>
                <ul className="mt-3 list-disc pl-5 space-y-1">
                  <li>SSO/OIDC and RBAC for supported products</li>
                  <li>Audit logs and monitoring for critical actions</li>
                  <li>Regional deployments and data residency on request</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5" /> Requests
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  Need a signed DPA, security questionnaire, or vendor form?
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button asChild size="sm">
                    <Link href="/legal/dpa">View DPA</Link>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <Link href="/contact">Contact legal</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="container py-12 md:py-16">
        <div className="rounded-md border border-border/60 bg-card p-6 md:p-8">
          <div className="md:flex items-center justify-between gap-6">
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Questions about compliance?
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                We\'re happy to run through our controls, data flows, and
                contracts with your team.
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-3">
              <Button asChild>
                <Link href="/contact">Talk to us</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/security">Security overview</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
