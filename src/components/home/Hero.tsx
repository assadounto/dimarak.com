"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Lock,
  Server,
  Terminal,
  Cpu,
  CircuitBoard,
  Cloud,
  ShieldCheck,
  Smartphone,
  Radio,
  Lightbulb,
  PencilRuler,
  Wrench,
  Rocket,
} from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { Stat } from "../common/Stat";

export function Hero() {
  const ref = React.useRef<HTMLElement>(null);
  const [spot, setSpot] = React.useState({ x: "50%", y: "50%" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-b border-border/60"
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width) * 100;
        const y = ((e.clientY - r.top) / r.height) * 100;
        setSpot({ x: `${x.toFixed(1)}%`, y: `${y.toFixed(1)}%` });
      }}
      onMouseLeave={() => setSpot({ x: "50%", y: "50%" })}
    >
      {/* ===== Cleaner background: subtle tint + fine grid (no loud gradient) ===== */}
      <div aria-hidden className="absolute inset-0 z-0">
        {/* Soft interactive tint, but neutral */}
        <div
          className="absolute inset-0 transition-[background-position] duration-300"
          style={{
            background: `
              radial-gradient(40rem 40rem at ${spot.x} ${spot.y}, hsl(var(--accent) / .18), transparent 60%),
              radial-gradient(28rem 28rem at calc(${spot.x} + 12%) calc(${spot.y} + 10%), hsl(var(--muted) / .16), transparent 65%)
            `,
          }}
        />
        {/* Fine grid lines with center fade */}
        <svg
          className="absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hero-grid-lines"
              width="28"
              height="28"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 28 0 L 0 0 0 28"
                fill="none"
                stroke="hsl(var(--primary) / .12)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid-lines)" />
        </svg>
      </div>

      {/* ===== Content ===== */}
      <div className="relative z-10 container grid gap-12 py-14 md:grid-cols-2 md:py-20">
        {/* Left: simple, direct copy */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-balance text-4xl md:text-6xl font-semibold tracking-tight"
          >
            We build software <br className="hidden sm:block" />
            and electronics that work.
          </motion.h1>

          <p className="mt-4 text-base text-muted-foreground">
            Apps, APIs, and connected devices—designed, built, and supported
            with clear SLAs.
          </p>

          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
              Web & mobile apps
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
              Embedded/IoT hardware & firmware
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
              Cloud, data, and integrations
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <a href="#contact">Request a proposal</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#services">Explore services</a>
            </Button>
          </div>
        </div>

        {/* Right: Tabs — Capabilities / Devices / KPIs / Process */}
        <div className="relative">
          <Card className="bg-card/90 border-border supports-[backdrop-filter]:bg-card/70 backdrop-blur">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between gap-2">
                <CardTitle className="text-base">What we ship</CardTitle>
                <span className="inline-flex items-center gap-1 rounded-md border border-border/60 bg-background/60 px-2 py-1 text-[11px] text-muted-foreground">
                  <Terminal className="h-3.5 w-3.5" />
                  SLAs & secure delivery
                </span>
              </div>
            </CardHeader>

            <CardContent>
              <Tabs defaultValue="capabilities" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="capabilities">Capabilities</TabsTrigger>
                  <TabsTrigger value="devices">Devices</TabsTrigger>
                  <TabsTrigger value="kpis">KPIs</TabsTrigger>
                  <TabsTrigger value="process">Process</TabsTrigger>
                </TabsList>

                {/* Capabilities */}
                <TabsContent value="capabilities" className="mt-4">
                  <div className="grid gap-3">
                    <div className="rounded-md border border-border/60 p-3">
                      <div className="flex items-center gap-2 text-xs font-medium text-card-foreground">
                        <Cpu className="h-4 w-4" /> Software
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Web/mobile apps, APIs, dashboards, auth, billing,
                        integrations.
                      </p>
                    </div>
                    <div className="rounded-md border border-border/60 p-3">
                      <div className="flex items-center gap-2 text-xs font-medium text-card-foreground">
                        <CircuitBoard className="h-4 w-4" /> Electronics / IoT
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Boards & firmware, telemetry, OTA updates, gateways.
                      </p>
                    </div>
                    <div className="rounded-md border border-border/60 p-3">
                      <div className="flex items-center gap-2 text-xs font-medium text-card-foreground">
                        <Cloud className="h-4 w-4" /> Cloud & Data
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Pipelines, monitoring, RBAC/SSO, backups, on-call
                        playbooks.
                      </p>
                    </div>

                    {/* Micro trust row */}
                    <div className="mt-1 flex flex-wrap gap-2 text-[11px] text-muted-foreground">
                      <span className="inline-flex items-center gap-1 rounded border border-border/60 px-2 py-1">
                        <ShieldCheck className="h-3.5 w-3.5" /> Security-ready
                        patterns
                      </span>
                      <span className="inline-flex items-center gap-1 rounded border border-border/60 px-2 py-1">
                        <Radio className="h-3.5 w-3.5" /> OTA & fleet mgmt
                      </span>
                    </div>
                  </div>
                </TabsContent>

                {/* Devices */}
                <TabsContent value="devices" className="mt-4">
                  <div className="overflow-hidden rounded-md border border-border/60">
                    <div className="relative aspect-[5/4] w-full">
                      <Image
                        src="/hero/overlay-devices.png"
                        alt="Connected devices & gateway"
                        fill
                        sizes="(min-width: 768px) 44vw, 92vw"
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-2 p-3 text-[11px] text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Smartphone className="h-3.5 w-3.5" /> Mobile app
                      </div>
                      <div className="flex items-center gap-1">
                        <CircuitBoard className="h-3.5 w-3.5" /> Firmware
                      </div>
                      <div className="flex items-center gap-1">
                        <Cloud className="h-3.5 w-3.5" /> Telemetry
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* KPIs */}
                <TabsContent value="kpis" className="mt-4">
                  <div className="text-sm text-muted-foreground">
                    <div className="grid grid-cols-2 gap-3">
                      <Stat label="Uptime (12m)" value="99.95%" />
                      <Stat label="Avg. response" value="< 2h" />
                      <Stat label="Deploys/mo" value="50+" />
                      <Stat label="Regions live" value="3+" />
                    </div>
                    <div className="mt-4 text-[11px]">
                      Staged rollouts • Robust logging & audit • RBAC/SSO
                      supported
                    </div>
                  </div>
                </TabsContent>

                {/* Process (new) */}
                <TabsContent value="process" className="mt-4">
                  <ol className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
                    <li className="rounded-md border border-border/60 p-3">
                      <div className="flex items-center gap-2 text-xs font-medium text-card-foreground">
                        <Lightbulb className="h-4 w-4" /> Discovery
                      </div>
                      <p className="mt-1 text-xs">
                        Goals, constraints, and success metrics.
                      </p>
                    </li>
                    <li className="rounded-md border border-border/60 p-3">
                      <div className="flex items-center gap-2 text-xs font-medium text-card-foreground">
                        <PencilRuler className="h-4 w-4" /> Design
                      </div>
                      <p className="mt-1 text-xs">
                        Architecture, UX flows, delivery plan.
                      </p>
                    </li>
                    <li className="rounded-md border border-border/60 p-3">
                      <div className="flex items-center gap-2 text-xs font-medium text-card-foreground">
                        <Wrench className="h-4 w-4" /> Build
                      </div>
                      <p className="mt-1 text-xs">
                        Sprints, CI/CD, test coverage.
                      </p>
                    </li>
                    <li className="rounded-md border border-border/60 p-3">
                      <div className="flex items-center gap-2 text-xs font-medium text-card-foreground">
                        <Rocket className="h-4 w-4" /> Launch & Run
                      </div>
                      <p className="mt-1 text-xs">
                        Rollout, monitoring, SLAs & support.
                      </p>
                    </li>
                  </ol>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Subtle glow behind card */}
          <div className="pointer-events-none absolute -inset-[1px] -z-10 rounded-2xl bg-gradient-to-tr from-primary/15 via-secondary/15 to-primary/15 blur-lg" />
        </div>
      </div>
    </section>
  );
}
