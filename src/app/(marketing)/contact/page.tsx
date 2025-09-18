// =============================================================
// app/(marketing)/about/page.tsx — About Dimarak (Services Company)
// =============================================================
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { leaders } from "@/constants/leaders";
import {
  CheckCircle2,
  Globe,
  BriefcaseBusiness,
  Activity,
  Users,
} from "lucide-react";

export const metadata = {
  title: "About | Dimarak",
  description:
    "Dimarak is a Ghana‑rooted, globally delivering services company for software, AI, and IoT. We design, build, and scale dependable platforms.",
};

const principles = [
  {
    title: "Outcome over output",
    desc: "We optimize for measurable business results, not ticket volume.",
  },
  {
    title: "Security by design",
    desc: "SSO/RBAC, audit logs, and data controls are first‑class features.",
  },
  {
    title: "Fast, then durable",
    desc: "Ship early value, then harden for reliability, cost, and scale.",
  },
];

const trust = [
  "Acme Bank",
  "Helios Power",
  "Sahara Logistics",
  "Nile Health",
  "Atlas Telco",
];

const timeline = [
  {
    date: "2022",
    title: "Founding",
    desc: "Dimarak established in Accra to build & operate multi‑disciplinary products.",
  },
  {
    date: "2023",
    title: "First enterprise projects",
    desc: "Launched billing automation & support AI with uptime SLAs.",
  },
  {
    date: "2024",
    title: "IoT pilots",
    desc: "Shipped cold‑chain telemetry pilot across regional health sites.",
  },
  {
    date: "2025",
    title: "Services scale‑up",
    desc: "Formalized services lines: Web/Mobile, AI, IoT, and Product Media.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="border-b border-border/60">
        <div className="container py-14 md:py-20">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Globe className="h-3.5 w-3.5" /> Accra, Ghana · Global delivery
          </div>
          <h1 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight">
            About Dimarak
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            We are a services company focused on building dependable software,
            AI, and IoT systems. Ghana‑rooted, globally delivered. We thrive on
            clear outcomes, secure operations, and long‑term partnerships.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4 text-primary" /> SLAs &
              enterprise onboarding
            </span>
            <span className="inline-flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4 text-primary" /> SSO/RBAC · Audit
              logs
            </span>
            <span className="inline-flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4 text-primary" /> Web/Mobile · AI
              · IoT
            </span>
          </div>
          <div className="mt-8 flex gap-3">
            <Button asChild>
              <Link href="/contact">Book a discovery call</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/services">Explore services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="container py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Principles</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {principles.map((p) => (
            <Card key={p.title} className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-base">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {p.desc}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Operating model */}
      <section className="border-t border-b border-border/60 bg-muted/20">
        <div className="container py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">How we operate</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <BriefcaseBusiness className="h-5 w-5" /> Engagements
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Project (fixed scope), Retainer (shared roadmap), or Enterprise
                (SLAs, procurement).
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Activity className="h-5 w-5" /> Delivery
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Sprints with weekly demos, CI/CD, observability, and clear
                success metrics.
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Users className="h-5 w-5" /> Team
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Small senior squads: product, design, engineering, and QA;
                extend with specialists as needed.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership with images */}
      <section className="container py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Leadership</h2>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {leaders.map((p) => (
            <Card key={p.name} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={p.image} alt={p.name} />
                    <AvatarFallback>{p.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-card-foreground">
                      {p.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {p.role}
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{p.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-border/60">
        <div className="container py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Timeline</h2>
          <div className="mt-6 grid md:grid-cols-4 gap-6">
            {timeline.map((t) => (
              <Card key={t.date} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="text-xs text-muted-foreground">{t.date}</div>
                  <div className="mt-1 font-medium text-card-foreground">
                    {t.title}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-t border-b border-border/60 bg-muted/20">
        <div className="container py-10">
          <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Trusted by teams across sectors
          </div>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {trust.map((t) => (
              <div
                key={t}
                className="h-10 rounded-md border border-border/60 bg-card grid place-items-center text-xs text-muted-foreground"
              >
                {t}
              </div>
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
                Let’s build your next project
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
      </section>
    </main>
  );
}
