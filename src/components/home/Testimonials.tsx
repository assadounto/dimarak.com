"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "../common/SectionHeader";
import { Card, CardContent } from "../ui/card";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Dimarak delivered on time with measurable impact across our billing workflow.",
    name: "Y. Mensah",
    title: "COO, Logistics Co.",
  },
  {
    quote: "Reliable partner for AI features—we shipped safely and fast.",
    name: "S. Boateng",
    title: "VP Eng, Fintech",
  },
  
];

export function Testimonials() {
  // Mobile carousel state (snap)
  const [active, setActive] = React.useState(0);
  const scrollRef = React.useRef<HTMLDivElement | null>(null);
  const slideRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  // Track which slide is centered
  React.useEffect(() => {
    const scroller = scrollRef.current;
    if (!scroller) return;
    const io = new IntersectionObserver(
      (entries) => {
        let top = entries[0];
        for (const e of entries) {
          if (e.intersectionRatio > (top?.intersectionRatio ?? 0)) top = e;
        }
        if (top?.target) {
          const idx = slideRefs.current.findIndex((n) => n === top.target);
          if (idx >= 0) setActive(idx);
        }
      },
      { root: scroller, threshold: [0.55, 0.75, 0.9] }
    );
    slideRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const scrollToIndex = (i: number) => {
    const scroller = scrollRef.current;
    const el = slideRefs.current[i];
    if (!scroller || !el) return;
    scroller.scrollTo({ left: el.offsetLeft - 16, behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="relative border-t border-border/60">
      {/* Subtle background: neutral tints + fine grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(36rem 36rem at 18% 20%, hsl(var(--accent)/.14), transparent 60%),
              radial-gradient(28rem 28rem at 82% 70%, hsl(var(--muted)/.12), transparent 65%)
            `,
          }}
        />
        <svg
          className="absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="t-grid"
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
          <rect width="100%" height="100%" fill="url(#t-grid)" />
        </svg>
      </div>

      <div className="container py-16 md:py-20">
        <SectionHeading kicker="What clients say" title="Testimonials" />

        {/* Mobile: swipeable carousel */}
        <div className="mt-8 md:hidden">
          <div
            ref={scrollRef}
            className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2"
          >
            {testimonials.map((t, i) => (
              <motion.figure
                key={i}
                ref={(el) => (slideRefs.current[i] = el)}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                className="snap-start w-[88%] shrink-0"
              >
                <Card className="h-full overflow-hidden border-border bg-card transition-shadow hover:shadow-md supports-[backdrop-filter]:bg-card/70 backdrop-blur">
                  <CardContent className="p-6">
                    {/* decorative quote */}
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border/60 bg-background">
                      <Quote className="h-4 w-4 text-muted-foreground" />
                    </span>
                    <blockquote className="mt-3 text-sm text-card-foreground">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="mt-2 text-xs text-muted-foreground">
                      — {t.name}, {t.title}
                    </figcaption>
                  </CardContent>
                </Card>
              </motion.figure>
            ))}
          </div>

          {/* Pager dots */}
          <div className="mt-3 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => scrollToIndex(i)}
                className={[
                  "h-2.5 w-2.5 rounded-full border border-primary/30",
                  i === active ? "bg-primary" : "bg-background",
                ].join(" ")}
              />
            ))}
          </div>
        </div>

        {/* Desktop: tidy grid */}
        <div className="mt-8 hidden grid-cols-2 gap-6 md:grid">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="h-full overflow-hidden border-border bg-card transition-shadow hover:shadow-md supports-[backdrop-filter]:bg-card/70 backdrop-blur">
                <CardContent className="p-6">
                  {/* decorative quote */}
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border/60 bg-background">
                    <Quote className="h-4 w-4 text-muted-foreground" />
                  </span>
                  <blockquote className="mt-3 text-sm text-card-foreground">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-2 text-xs text-muted-foreground">
                    — {t.name}, {t.title}
                  </figcaption>
                </CardContent>
              </Card>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
