// =============================================================
// app/(marketing)/industries/page.tsx — Industries index
// =============================================================


import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { industries, type Industry } from "@/constants/industries";
import {
  CreditCard,
  Activity,
  Truck,
  Bolt,
  Signal,
  Building2,
} from "lucide-react";

export const metadata = {
  title: "Industries | Dimarak",
  description:
    "Sector expertise for fintech, healthcare, logistics, energy, telco, and public sector.",
};

const iconMap: Record<Industry["icon"], React.ComponentType<any>> = {
  "credit-card": CreditCard,
  activity: Activity,
  truck: Truck,
  bolt: Bolt,
  signal: Signal,
  "building-2": Building2,
};

function IndustryCard({ item }: { item: Industry }) {
  const Icon = iconMap[item.icon];
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardTitle className="text-base">{item.title}</CardTitle>
            <p className="mt-1 text-xs text-muted-foreground">{item.blurb}</p>
          </div>
          <Icon className="h-5 w-5 text-muted-foreground" />
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {item.kpis.slice(0, 2).map((k) => (
            <Badge key={k} variant="secondary">
              {k}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        <div className="flex gap-2">
          <Button asChild>
            <Link href={`/industries/${item.slug}`}>View industry</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={`/contact?industry=${item.slug}`}>Contact us</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function IndustriesIndexPage() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="border-b border-border/60">
        <div className="container py-14 md:py-20">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Industries
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            We tailor delivery to the realities of your sector — from compliance
            and security to integration landscapes and KPIs.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge variant="secondary">Fintech</Badge>
            <Badge variant="secondary">Healthcare</Badge>
            <Badge variant="secondary">Logistics</Badge>
            <Badge variant="secondary">Energy</Badge>
            <Badge variant="secondary">Telco</Badge>
            <Badge variant="secondary">Public sector</Badge>
          </div>
          <div className="mt-8 flex gap-3">
            <Button asChild>
              <Link href="/contact">Book a discovery call</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/case-studies">View case studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="container py-12 md:py-16">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {industries.map((i) => (
            <IndustryCard key={i.slug} item={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 bg-muted/20">
        <div className="container py-12 md:py-16">
          <div className="rounded-md border border-border/60 bg-card p-6 md:p-8">
            <div className="md:flex items-center justify-between gap-6">
              <div>
                <h3 className="text-lg md:text-xl font-semibold">
                  Have a sector‑specific requirement?
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Compliance checklists, integration maps, and KPIs — we can
                  align to your program fast.
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex gap-3">
                <Button asChild>
                  <Link href="/contact">Request a proposal</Link>
                </Button>
                <Button asChild variant="outline">
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
