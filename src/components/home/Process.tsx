"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../common/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Lightbulb,
  Target,
  PencilRuler,
  Wrench,
  Rocket,
  TrendingUp,
  CheckCircle2,
  Play,
  Pause,
} from "lucide-react";

type Step = {
  name: string;
  desc: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  bullets?: string[];
};

const STEPS: Step[] = [
  {
    name: "Discover",
    desc: "Stakeholder interviews, constraints, success metrics.",
    icon: Lightbulb,
    bullets: ["Goals & risks", "Initial tech options", "Success measures"],
  },
  {
    name: "Define",
    desc: "Scope, estimates, architecture, delivery plan.",
    icon: Target,
    bullets: ["Scope & estimates", "Architecture draft", "Delivery plan"],
  },
  {
    name: "Design",
    desc: "UX flows, UI components, data contracts.",
    icon: PencilRuler,
    bullets: ["Flows & wireframes", "Design tokens", "API contracts"],
  },
  {
    name: "Build",
    desc: "Agile sprints, weekly demos, CI/CD.",
    icon: Wrench,
    bullets: ["Weekly demos", "CI/CD & tests", "Issue tracking"],
  },
  {
    name: "Launch",
    desc: "Cutover plan, observability, runbooks.",
    icon: Rocket,
    bullets: ["Staged rollout", "Dashboards & alerts", "Runbooks"],
  },
  {
    name: "Scale",
    desc: "SLAs, performance & cost tuning, roadmap.",
    icon: TrendingUp,
    bullets: ["SLAs & on-call", "Perf & cost tuning", "Roadmap"],
  },
];

interface ProcessProps {
  /** Set true to start with auto-advance demo on (you can still toggle in UI) */
  demo?: boolean;
}

export function Process({ demo = false }: ProcessProps) {
  const [active, setActive] = React.useState(0);
  const total = STEPS.length;
  const [demoOn, setDemoOn] = React.useState(demo);

  // ===== Desktop rail progress
  const progress = (active / (total - 1)) * 100;

  // ===== Mobile carousel refs
  const scrollRef = React.useRef<HTMLDivElement | null>(null);
  const slideRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  // Keep active in range
  const clampIndex = (i: number) => Math.max(0, Math.min(i, total - 1));

  // Scroll a mobile slide into view
  const scrollToIndex = (i: number) => {
    const scroller = scrollRef.current;
    const el = slideRefs.current[i];
    if (!scroller || !el) return;
    scroller.scrollTo({ left: el.offsetLeft - 16, behavior: "smooth" });
  };

  // Observe which mobile slide is centered to update active
  React.useEffect(() => {
    const scroller = scrollRef.current;
    if (!scroller) return;
    const io = new IntersectionObserver(
      (entries) => {
        // Pick the most visible slide
        let topEntry = entries[0];
        for (const e of entries) {
          if (e.intersectionRatio > (topEntry?.intersectionRatio ?? 0))
            topEntry = e;
        }
        if (topEntry?.target) {
          const idx = slideRefs.current.findIndex((n) => n === topEntry.target);
          if (idx >= 0) setActive(idx);
        }
      },
      { root: scroller, threshold: [0.5, 0.75, 0.9] },
    );
    slideRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  // Demo (auto-advance): works for both desktop & mobile
  React.useEffect(() => {
    if (!demoOn) return;
    const id = setInterval(() => {
      setActive((i) => {
        const next = (i + 1) % total;
        // also scroll mobile
        scrollToIndex(next);
        return next;
      });
    }, 3500);
    return () => clearInterval(id);
  }, [demoOn, total]);

  const StepIcon = STEPS[active].icon;

  // Keyboard nav (desktop rail)
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (["ArrowDown", "ArrowRight"].includes(e.key)) {
      e.preventDefault();
      const next = clampIndex(active + 1);
      setActive(next);
      scrollToIndex(next);
    }
    if (["ArrowUp", "ArrowLeft"].includes(e.key)) {
      e.preventDefault();
      const prev = clampIndex(active - 1);
      setActive(prev);
      scrollToIndex(prev);
    }
  };

  return (
    <section id="process" className="relative">
      {/* Subtle background: neutral tints + fine grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <svg
          className="absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="proc-grid"
              width="28"
              height="28"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 28 0 L 0 0 0 28"
                fill="none"
                stroke="hsl(var(--primary)/.10)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#proc-grid)" />
        </svg>
        <div className="absolute inset-0 bg-[radial-gradient(40rem_40rem_at_20%_20%,hsl(var(--accent)/.14),transparent_60%),radial-gradient(32rem_32rem_at_80%_70%,hsl(var(--muted)/.12),transparent_65%)]" />
      </div>

      <div className="container py-16 md:py-20">
        <SectionHeading
          kicker="How we work"
          title="Process"
          desc="Transparent, iterative delivery with measurable outcomes."
        />

        {/* ===== Mobile: horizontal snap carousel ===== */}
        <div className="mt-8 md:hidden">
          {/* Controls */}
          <div className="mb-3 flex items-center justify-between">
            <div className="text-xs text-muted-foreground">
              Step {active + 1} of {total}
            </div>
            <button
              onClick={() => setDemoOn((d) => !d)}
              className="inline-flex items-center gap-1 rounded-md border border-border/60 bg-background px-2 py-1 text-xs"
            >
              {demoOn ? (
                <Pause className="h-3.5 w-3.5" />
              ) : (
                <Play className="h-3.5 w-3.5" />
              )}
              {demoOn ? "Pause" : "Demo"}
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 -mx-4 px-4"
          >
            {STEPS.map((st, i) => {
              const Icon = st.icon;
              return (
                <div
                  key={st.name}
                  ref={(el) => (slideRefs.current[i] = el)}
                  className="snap-start shrink-0 w-[85%]"
                >
                  <Card className="h-full supports-[backdrop-filter]:bg-card/70 bg-card/90 backdrop-blur">
                    {/* progress bar */}
                    <div className="relative h-1 w-full bg-border/50">
                      <motion.div
                        className="absolute left-0 top-0 h-1 bg-primary"
                        style={{
                          width: `${((i + (active === i ? 1 : 0)) / total) * 100}%`,
                        }}
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2 text-base">
                        <Icon className="h-5 w-5 text-muted-foreground" />
                        {st.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                      <p>{st.desc}</p>
                      {st.bullets && (
                        <ul className="mt-3 space-y-1.5">
                          {st.bullets.map((p) => (
                            <li key={p} className="flex items-start gap-2">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                              {p}
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Pager dots */}
          <div className="mt-2 flex items-center justify-center gap-2">
            {STEPS.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to step ${i + 1}`}
                onClick={() => {
                  setActive(i);
                  scrollToIndex(i);
                }}
                className={[
                  "h-2.5 w-2.5 rounded-full border border-primary/30",
                  i === active ? "bg-primary" : "bg-background",
                ].join(" ")}
              />
            ))}
          </div>
        </div>

        {/* ===== Desktop: rail + detail panel ===== */}
        <div
          className="mt-8 hidden gap-8 md:grid md:grid-cols-[280px_minmax(0,1fr)]"
          onKeyDown={onKeyDown}
        >
          {/* Rail */}
          <aside className="relative">
            <div className="absolute left-[14px] top-0 h-full w-px bg-border/70" />
            <motion.div
              className="absolute left-[14px] top-0 w-px bg-primary"
              style={{ height: `${progress}%` }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            />
            <ol
              role="tablist"
              aria-orientation="vertical"
              className="space-y-3"
            >
              {STEPS.map((st, i) => {
                const isActive = i === active;
                return (
                  <li key={st.name} className="relative pl-8">
                    <button
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`process-panel-${i}`}
                      id={`process-tab-${i}`}
                      onClick={() => setActive(i)}
                      onMouseEnter={() => setActive(i)}
                      className={[
                        "group w-full rounded-md border border-transparent px-2 py-2 text-left transition",
                        isActive
                          ? "bg-card/80 ring-1 ring-border/60"
                          : "hover:bg-card/50 hover:border-border/60",
                      ].join(" ")}
                    >
                      <span className="absolute left-0 top-2">
                        <span className="relative block h-4 w-4 rounded-full border border-primary/40 bg-background">
                          {isActive && (
                            <>
                              <motion.span
                                layoutId="proc-dot"
                                className="absolute inset-[3px] rounded-full bg-primary"
                                transition={{
                                  type: "spring",
                                  stiffness: 400,
                                  damping: 26,
                                }}
                              />
                              <span className="pointer-events-none absolute -inset-1 rounded-full bg-primary/30 blur-[2px]" />
                            </>
                          )}
                        </span>
                      </span>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-medium text-card-foreground">
                          {st.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {i + 1}/{total}
                        </span>
                      </div>
                      <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                        {st.desc}
                      </p>
                    </button>
                  </li>
                );
              })}
            </ol>

            <p className="mt-3 text-xs text-muted-foreground">
              Tip: Use ↑/↓ or ←/→ to navigate.
            </p>
          </aside>

          {/* Detail panel */}
          <Card
            role="tabpanel"
            id={`process-panel-${active}`}
            aria-labelledby={`process-tab-${active}`}
            className="supports-[backdrop-filter]:bg-card/70 bg-card/90 backdrop-blur"
          >
            {/* Top bar: progress + demo toggle */}
            <div className="flex items-center justify-between gap-3 px-4 pt-3">
              <div className="relative h-1 w-full bg-border/50">
                <motion.div
                  className="absolute left-0 top-0 h-1 bg-primary"
                  style={{ width: `${((active + 1) / total) * 100}%` }}
                  transition={{ type: "spring", stiffness: 160, damping: 24 }}
                />
              </div>
              <button
                onClick={() => setDemoOn((d) => !d)}
                className="ml-3 inline-flex items-center gap-1 rounded-md border border-border/60 bg-background px-2 py-1 text-xs"
              >
                {demoOn ? (
                  <Pause className="h-3.5 w-3.5" />
                ) : (
                  <Play className="h-3.5 w-3.5" />
                )}
                {demoOn ? "Pause" : "Demo"}
              </button>
            </div>

            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <StepIcon className="h-5 w-5 text-muted-foreground" />
                {STEPS[active].name}
              </CardTitle>
            </CardHeader>

            <CardContent className="text-sm text-muted-foreground">
              <motion.p
                key={STEPS[active].name + "-desc"}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
              >
                {STEPS[active].desc}
              </motion.p>

              {STEPS[active].bullets && (
                <motion.ul
                  key={STEPS[active].name + "-bullets"}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: 0.05 }}
                  className="mt-3 grid gap-1.5 sm:grid-cols-2"
                >
                  {STEPS[active].bullets!.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                      {p}
                    </li>
                  ))}
                </motion.ul>
              )}

              <div className="mt-6 flex items-center justify-between text-xs">
                <button
                  className="rounded-md border border-border/60 bg-background px-3 py-1.5 text-foreground/90 hover:bg-background/70"
                  onClick={() => {
                    const prev = clampIndex(active - 1);
                    setActive(prev);
                    scrollToIndex(prev);
                  }}
                  disabled={active === 0}
                >
                  Previous
                </button>
                <span className="text-muted-foreground">
                  Step {active + 1} of {total}
                </span>
                <button
                  className="rounded-md border border-border/60 bg-background px-3 py-1.5 text-foreground/90 hover:bg-background/70"
                  onClick={() => {
                    const next = clampIndex(active + 1);
                    setActive(next);
                    scrollToIndex(next);
                  }}
                  disabled={active === total - 1}
                >
                  Next
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
