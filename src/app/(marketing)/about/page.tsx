// =============================================================
// app/(marketing)/about/page.tsx — About Dimarak (Services Company)
// Modern + lively edition
// =============================================================
"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Globe,
  BriefcaseBusiness,
  Activity,
  Users,
  ShieldCheck,
  Zap,
  Rocket,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { leaders } from "@/constants/leaders";

// export const metadata = {
//   title: "About | Dimarak",
//   description:
//     "Dimarak is a Ghana-rooted, globally delivering services company for software, AI, and IoT. We design, build, and scale dependable platforms.",
// };

const principles = [
  {
    title: "Outcome over output",
    desc: "We optimize for measurable business results, not ticket volume.",
    icon: <Zap className="h-4 w-4" />,
    tag: "Impact",
  },
  {
    title: "Security by design",
    desc: "SSO/RBAC, audit logs, and data controls are first-class features.",
    icon: <ShieldCheck className="h-4 w-4" />,
    tag: "Trust",
  },
  {
    title: "Fast, then durable",
    desc: "Ship early value, then harden for reliability, cost, and scale.",
    icon: <Rocket className="h-4 w-4" />,
    tag: "Velocity",
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
    desc: "Dimarak established in Accra to build & operate multi-disciplinary products.",
  },
  {
    date: "2023",
    title: "First enterprise projects",
    desc: "Launched billing automation & support AI with uptime SLAs.",
  },
  {
    date: "2024",
    title: "IoT pilots",
    desc: "Shipped cold-chain telemetry pilot across regional health sites.",
  },
  {
    date: "2025",
    title: "Services scale-up",
    desc: "Formalized services lines: Web/Mobile, AI, IoT, and Product Media.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden border-b border-border/60">
        {/* interactive tint */}
        <HeroBG />

        <div className="relative container py-14 md:py-20">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Globe className="h-3.5 w-3.5" /> Accra, Ghana · Global delivery
          </div>

          <h1 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight">
            <span className="text-brand-gradient">About Dimarak</span>
          </h1>

          <p className="mt-3 max-w-2xl text-muted-foreground">
            We are a services company focused on building dependable software,
            AI, and IoT systems. Ghana-rooted, globally delivered. We thrive on
            clear outcomes, secure operations, and long-term partnerships.
          </p>

          {/* quick trust bullets */}
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted-foreground">
            <TrustPill>SLAs &amp; enterprise onboarding</TrustPill>
            <TrustPill>SSO/RBAC · Audit logs</TrustPill>
            <TrustPill>Web/Mobile · AI · IoT</TrustPill>
          </div>

          <div className="mt-8 flex gap-3">
            <Button asChild>
              <Link href="/contact">Book a discovery call</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/services">Explore services</Link>
            </Button>
          </div>

          {/* KPIs */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <KPI label="Uptime (12m)" value="99.95%" />
            <KPI label="Avg. response" value="< 2h" />
            <KPI label="Deploys/mo" value="50+" />
            <KPI label="Regions live" value="3+" />
          </div>
        </div>
      </section>

      {/* ===== Principles ===== */}
      <section className="container py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Principles</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {principles.map((p) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Card className="bg-card border-border hover:shadow-sm transition">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Badge variant="outline" className="border-border/70">
                      {p.tag}
                    </Badge>
                    <span className="inline-flex items-center gap-1">
                      {p.icon}
                      {/* icon */}
                    </span>
                  </div>
                  <CardTitle className="mt-2 text-base">{p.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {p.desc}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Operating model ===== */}
      <section className="border-y border-border/60 bg-muted/20">
        <div className="container py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">How we operate</h2>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <ConicCard
              icon={<BriefcaseBusiness className="h-5 w-5" />}
              title="Engagements"
              copy="Project (fixed scope), Retainer (shared roadmap), or Enterprise (SLAs, procurement)."
            />
            <ConicCard
              icon={<Activity className="h-5 w-5" />}
              title="Delivery"
              copy="Sprints with weekly demos, CI/CD, observability, and clear success metrics."
              delay={0.05}
            />
            <ConicCard
              icon={<Users className="h-5 w-5" />}
              title="Team"
              copy="Small senior squads: product, design, engineering, and QA; extend with specialists as needed."
              delay={0.1}
            />
          </div>
        </div>
      </section>

      {/* ===== Leadership ===== */}
      <section className="container py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Leadership</h2>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {leaders.map((p) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
            >
              <Card className="bg-card border-border hover:shadow-sm transition">
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

                  <Dialog>
                    <div className="mt-3 flex items-center gap-3">
                      <DialogTrigger className="text-xs underline">
                        View bio
                      </DialogTrigger>
                      {p.linkedin && (
                        <a
                          href={p.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs underline inline-flex items-center gap-1"
                        >
                          <LinkedInLogoIcon className="h-3.5 w-3.5" /> LinkedIn
                        </a>
                      )}
                    </div>
                    <DialogContent className="sm:max-w-lg">
                      <DialogHeader>
                        <DialogTitle className="text-base">
                          {p.name} · {p.role}
                        </DialogTitle>
                      </DialogHeader>
                      <Separator className="my-2" />
                      <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                        {p.longBio}
                      </p>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Timeline ===== */}
      <section className="border-t border-border/60">
        <div className="container py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Timeline</h2>

          <div className="mt-6 grid md:grid-cols-4 gap-6">
            {timeline.map((t, i) => (
              <motion.div
                key={t.date}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
              >
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="text-xs text-muted-foreground">
                      {t.date}
                    </div>
                    <div className="mt-1 font-medium text-card-foreground">
                      {t.title}
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {t.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Trust marquee ===== */}
      <section className="border-t border-b border-border/60 bg-muted/20">
        <div className="container py-10">
          <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Trusted by teams across sectors
          </div>

          <div className="relative mt-4 overflow-hidden">
            <div className="flex gap-4 animate-[marquee_22s_linear_infinite] hover:[animation-play-state:paused]">
              {[...trust, ...trust].map((t, i) => (
                <div
                  key={`${t}-${i}`}
                  className="h-10 min-w-[180px] rounded-md border border-border/60 bg-card grid place-items-center px-4 text-xs text-muted-foreground"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="container py-12 md:py-16">
        <div className="relative">
          {/* animated gradient border ring */}
          <div
            className="brand-conic-border absolute -inset-[2px] rounded-xl"
            aria-hidden
          />
          <div className="relative rounded-xl border border-border/60 bg-card p-6 md:p-8">
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
        </div>
      </section>

      {/* local keyframes for marquee (scoped via Tailwind's arbitrary) */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </main>
  );
}

/* ===== Small helpers ===== */

function KPI({ label, value }: { label: string; value: string }) {
  return (
    <Card className="bg-card border-border/80">
      <CardContent className="p-4">
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="text-lg font-semibold">{value}</div>
      </CardContent>
    </Card>
  );
}

function ConicCard({
  icon,
  title,
  copy,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  copy: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay }}
    >
      <div className="relative">
        <div
          className="brand-conic-border absolute -inset-[2px] rounded-xl"
          aria-hidden
        />
        <Card className="relative rounded-xl bg-card border-border">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <span className="text-muted-foreground">{icon}</span> {title}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            {copy}
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}

function TrustPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded border border-border/60 bg-background px-2 py-1">
      <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
      {children}
    </span>
  );
}

function HeroBG() {
  const ref = React.useRef<HTMLElement>(null);
  const [spot, setSpot] = React.useState({ x: "50%", y: "50%" });

  return (
    <section
      ref={ref as any}
      aria-hidden
      className="absolute inset-0 -z-10"
      onMouseMove={(e) => {
        const el = (ref.current as unknown as HTMLElement) || null;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width) * 100;
        const y = ((e.clientY - r.top) / r.height) * 100;
        setSpot({ x: `${x.toFixed(1)}%`, y: `${y.toFixed(1)}%` });
      }}
      onMouseLeave={() => setSpot({ x: "50%", y: "50%" })}
    >
      {/* Soft interactive tint */}
      <motion.div
        className="absolute inset-0"
        animate={{ backgroundPosition: "0% 0%" }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{
          background: `
            radial-gradient(40rem 40rem at ${spot.x} ${spot.y}, hsl(var(--accent) / .18), transparent 60%),
            radial-gradient(28rem 28rem at calc(${spot.x} + 12%) calc(${spot.y} + 10%), hsl(var(--muted) / .16), transparent 65%)
          `,
        }}
      />
      {/* Fine grid with center fade */}
      <svg
        className="absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="about-grid"
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
        <rect width="100%" height="100%" fill="url(#about-grid)" />
      </svg>
    </section>
  );
}
