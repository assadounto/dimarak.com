"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeading } from "../common/SectionHeader";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { Cloud, CreditCard, Phone, Video, Database } from "lucide-react";

type Item = {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  cat: "cloud" | "comms" | "data";
};

const STACK: Item[] = [
  { name: "AWS", icon: Cloud, cat: "cloud" },
  { name: "GCP", icon: Cloud, cat: "cloud" },
  { name: "Azure", icon: Cloud, cat: "cloud" },
  { name: "Stripe", icon: CreditCard, cat: "comms" },
  { name: "Twilio", icon: Phone, cat: "comms" },
  { name: "Zoom", icon: Video, cat: "comms" },
  { name: "Postgres", icon: Database, cat: "data" },
  { name: "Redis", icon: Database, cat: "data" },
];

export function Stack() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [tab, setTab] = React.useState<"all" | "cloud" | "comms" | "data">(
    "all",
  );
  const filtered = tab === "all" ? STACK : STACK.filter((s) => s.cat === tab);

  return (
    <section id="stack" className="relative border-t border-border/60">
      {/* Subtle background: neutral tints + fine grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(36rem 36rem at 20% 18%, hsl(var(--accent)/.14), transparent 60%),
              radial-gradient(28rem 28rem at 82% 72%, hsl(var(--muted)/.12), transparent 65%)
            `,
          }}
        />
        <svg
          className="absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="stack-grid"
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
          <rect width="100%" height="100%" fill="url(#stack-grid)" />
        </svg>
      </div>

      <div className="container py-16 md:py-20">
        <SectionHeading
          kicker="Ecosystem"
          title="Tech stack & integrations"
          desc="We fit into your environment—cloud, comms, payments, and data stores."
        />

        {/* Tabs */}
        <div className="mt-6">
          <Tabs
            value={tab}
            onValueChange={(v) => setTab(v as any)}
            className="w-full"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <TabsList className="grid w-full grid-cols-4 md:w-auto">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="cloud">Cloud</TabsTrigger>
                <TabsTrigger value="comms">Comms/Pay</TabsTrigger>
                <TabsTrigger value="data">Data</TabsTrigger>
              </TabsList>

              {/* Marquee: duplicates content for seamless loop */}
              <Marquee items={filtered} />
            </div>

            <TabsContent ref={ref} value={tab} className="mt-6">
              <motion.div
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                variants={{
                  hidden: { opacity: 1 },
                  show: {
                    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
                  },
                }}
                className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
              >
                {filtered.map(({ name, icon: I }) => (
                  <motion.div
                    key={name}
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.25 },
                      },
                    }}
                    whileHover={{ y: -2 }}
                    className="group flex items-center gap-3 rounded-md border border-border/60 bg-card p-3 ring-0 transition-shadow hover:shadow-md"
                    title={name}
                  >
                    <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-md border border-border/60 bg-background">
                      <I className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                      {/* faint glow on hover */}
                      <span
                        className="pointer-events-none absolute inset-0 rounded-md opacity-0 blur-[6px] transition-opacity group-hover:opacity-100"
                        style={{
                          background:
                            "radial-gradient(8rem 8rem at 50% 50%, hsl(var(--primary)/.12), transparent 60%)",
                        }}
                      />
                    </span>
                    <span className="text-sm text-card-foreground">{name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

/* ======= Marquee component ======= */
function Marquee({ items, speed = 22 }: { items: Item[]; speed?: number }) {
  // Combine items twice for a seamless loop
  const row = [...items, ...items];

  return (
    <div className="relative isolate w-full overflow-hidden rounded-md border border-border/60 bg-card/70 backdrop-blur md:max-w-[520px]">
      {/* gradient edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-card to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-card to-transparent" />

      <motion.div
        className="flex min-w-[max-content] gap-4 py-2 pr-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: speed, repeat: Infinity }}
        onHoverStart={(e, i) =>
          ((e as any).target.style.animationPlayState = "paused")
        }
      >
        {row.map(({ name, icon: I }, idx) => (
          <div
            key={`${name}-${idx}`}
            className="flex items-center gap-2 rounded border border-border/60 bg-background/70 px-2.5 py-1 text-xs text-muted-foreground"
          >
            <I className="h-3.5 w-3.5" />
            {name}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
