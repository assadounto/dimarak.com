// =============================================================
// app/(marketing)/solutions/page.tsx — Solutions index
// =============================================================
"use client";

import * as React from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  CheckCircle2,
  Rocket,
  Brain,
  CircuitBoard,
  RefreshCcw,
  MessageSquare,
  Database,
} from "lucide-react";
import { solutions, categories, type Solution } from "@/constants/solutions";

// export const metadata = {
//   title: "Solutions | Dimarak",
//   description:
//     "Outcome‑focused solution packages for web/mobile, AI enablement, IoT pilots, and platform modernization.",
// };

const iconMap: Record<string, React.ComponentType<any>> = {
  rocket: Rocket,
  brain: Brain,
  "circuit-board": CircuitBoard,
  "refresh-ccw": RefreshCcw,
  "message-square": MessageSquare,
  database: Database,
};

function SolutionCard({ s }: { s: Solution }) {
  const Icon = iconMap[s.icon] ?? Rocket;
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardTitle className="text-base">{s.title}</CardTitle>
            <p className="mt-1 text-xs text-muted-foreground">{s.blurb}</p>
          </div>
          <Icon className="h-5 w-5 text-muted-foreground" />
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <Badge variant="secondary">{s.timeline}</Badge>
          <Badge variant="secondary">{s.priceFrom}</Badge>
        </div>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        <ul className="space-y-1">
          {s.outcomes.slice(0, 4).map((o) => (
            <li key={o} className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /> {o}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex gap-2">
          <Button asChild>
            <Link href={`/solutions/${s.slug}`}>View package</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={`/contact?solution=${s.slug}`}>Contact us</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function SolutionsIndexPage() {
  const params = useSearchParams();
  const router = useRouter();
  const initial =
    (params.get("category") as (typeof categories)[number]["key"]) || "all";
  const [tab, setTab] = React.useState(initial);

  function filtered(cat: typeof tab) {
    if (cat === "all") return solutions;
    return solutions.filter((s) => s.category === cat);
  }

  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="border-b border-border/60">
        <div className="container py-14 md:py-20">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Solutions
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Packaged ways to start fast and deliver outcomes. Choose a solution
            below or tell us your goals and constraints — we'll tailor the plan.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge variant="secondary">Web/Mobile</Badge>
            <Badge variant="secondary">AI Enablement</Badge>
            <Badge variant="secondary">IoT Pilots</Badge>
            <Badge variant="secondary">Platform</Badge>
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

      {/* Tabs + Grid */}
      <section className="container py-12 md:py-16">
        <Tabs
          value={tab}
          onValueChange={(v) => {
            setTab(v as any);
            router.replace(`/solutions?category=${v}`);
          }}
        >
          <TabsList className="flex flex-wrap">
            {categories.map((c) => (
              <TabsTrigger key={c.key} value={c.key} className="capitalize">
                {c.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((c) => (
            <TabsContent key={c.key} value={c.key} className="mt-6">
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered(c.key).map((s) => (
                  <SolutionCard key={s.slug} s={s} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 bg-muted/20">
        <div className="container py-12 md:py-16">
          <div className="rounded-md border border-border/60 bg-card p-6 md:p-8">
            <div className="md:flex items-center justify-between gap-6">
              <div>
                <h3 className="text-lg md:text-xl font-semibold">
                  Not sure which fits?
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Share your goals; we’ll propose the fastest, lowest‑risk path.
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex gap-3">
                <Button asChild>
                  <Link href="/contact">Request a proposal</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/case-studies">View case studies</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
