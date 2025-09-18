"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Rocket, Sparkles, Cpu, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/constants/services";

export default function ServicesIndexPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="border-b border-border/60">
        <div className="container py-14 md:py-20">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Services
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Hire Dimarak to design, build, and scale software and IoT systems.
            Enterprise‑ready, outcomes‑driven, Ghana‑rooted, globally delivered.
          </p>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}>
                <Card className="bg-card border-border hover:bg-accent/20 transition">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-base">
                      <s.Icon className="h-5 w-5" /> {s.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <p>{s.summary}</p>
                    <span className="mt-3 inline-flex items-center text-xs underline">
                      View details <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/contact">Book a discovery call</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/pricing">See engagement models</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Web & Mobile",
              Icon: Rocket,
              desc: "Next.js, React Native (Expo), Rails/Node APIs.",
            },
            {
              title: "AI Enablement",
              Icon: Sparkles,
              desc: "LLM features, agents, guardrails, RAG.",
            },
            {
              title: "Hardware & IoT",
              Icon: Cpu,
              desc: "Sensors, firmware, cloud APIs, dashboards.",
            },
          ].map((b) => (
            <div
              key={b.title}
              className="rounded-md border border-border/60 bg-card p-4"
            >
              <div className="flex items-center gap-2 text-sm font-medium">
                <b.Icon className="h-4 w-4" /> {b.title}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
