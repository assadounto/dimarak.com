"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, Sparkles, Cpu } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/constants/services";

export default function ServicesIndexPage() {
  return (
    <main className="bg-background text-foreground">
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden border-b border-border/60">
        <HeroBG />

        <div className="relative container py-14 md:py-20">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            <span className="text-brand-gradient">Services</span>
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Hire Dimarak to design, build, and scale software and IoT systems.
            Enterprise-ready, outcomes-driven, Ghana-rooted, globally delivered.
          </p>

          {/* Services grid */}
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="relative group"
              >
                {/* soft corner glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition rounded-lg"
                  style={{
                    background:
                      "radial-gradient(40rem 40rem at 0% 0%, hsl(var(--primary)/.14), transparent 60%)",
                  }}
                />
                <Link href={`/services/${s.slug}`} className="block">
                  <Card className="relative bg-card border-border hover:shadow-sm transition">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2 text-base">
                        <s.Icon className="h-5 w-5 text-muted-foreground" />
                        {s.title}
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
              </motion.div>
            ))}
          </div>

          {/* CTAs */}
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

      {/* ===== Capability strip ===== */}
      <section className="container py-12 md:py-16">
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
          ].map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
            >
              <div className="rounded-md border border-border/60 bg-card p-4 hover:shadow-sm transition">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <b.Icon className="h-4 w-4 text-muted-foreground" /> {b.title}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="border-t border-border/60 bg-muted/20">
        <div className="container py-12 md:py-16">
          <div className="relative">
            <div
              className="brand-conic-border absolute -inset-[2px] rounded-xl"
              aria-hidden
            />
            <div className="relative rounded-xl border border-border/60 bg-card p-6 md:p-8">
              <div className="md:flex items-center justify-between gap-6">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">
                    Not sure which service fits?
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Share your goals and constraints — we’ll propose a fast,
                    low-risk path to value.
                  </p>
                </div>
                <div className="mt-4 md:mt-0 flex gap-3">
                  <Button asChild>
                    <Link href="/contact">Request a proposal</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/case-studies">See case studies</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* local keyframes for hero tint */}
      <style jsx>{`
        @keyframes svc_tint {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(2%, 0, 0);
          }
        }
      `}</style>
    </main>
  );
}

/* ===== Hero background helper ===== */
function HeroBG() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10">
      {/* Soft tint */}
      <div
        className="absolute inset-0 animate-[svc_tint_18s_linear_infinite] will-change-transform"
        style={{
          background: `
            radial-gradient(40rem 40rem at 25% 20%, hsl(var(--accent)/.18), transparent 60%),
            radial-gradient(28rem 28rem at 55% 40%, hsl(var(--muted)/.16), transparent 65%)
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
            id="svc-grid"
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
        <rect width="100%" height="100%" fill="url(#svc-grid)" />
      </svg>
    </div>
  );
}
