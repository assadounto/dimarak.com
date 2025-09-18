import { CheckCircle2, Timer, ArrowRight } from "lucide-react";
import { SectionHeading } from "../common/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const solutions = [
  {
    name: "MVP Sprint",
    duration: "6–8 weeks",
    bullets: ["Scope to launch", "Foundational UI kit", "CI/CD & analytics"],
  },
  {
    name: "AI Upgrade",
    duration: "3–6 weeks",
    bullets: [
      "Use-case discovery",
      "Secure LLM integration",
      "Quality guardrails",
    ],
  },
  {
    name: "IoT Pilot",
    duration: "4–8 weeks",
    bullets: ["Sensor selection", "Firmware + cloud API", "Admin dashboard"],
  },
  {
    name: "E-commerce Modernization",
    duration: "6–10 weeks",
    bullets: [
      "Headless storefront",
      "Payments & logistics",
      "Performance & SEO",
    ],
  },
];

export function Solutions() {
  return (
    <section
      id="solutions"
      className="relative border-t border-b border-border/60"
    >
      {/* Subtle background: neutral radial tints + fine grid */}
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
              id="sol-grid"
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
          <rect width="100%" height="100%" fill="url(#sol-grid)" />
        </svg>
      </div>

      <div className="container py-16 md:py-20">
        <SectionHeading
          kicker="Packages"
          title="Common solutions"
          desc="Battle-tested ways to reach value quickly."
        />

        <div className="mt-8 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 lg:gap-8">
          {solutions.map((sl) => (
            <Card
              key={sl.name}
              className="group relative h-full overflow-hidden border-border bg-card transition-shadow hover:shadow-md"
            >
              {/* subtle top highlight on hover */}
              <div
                className="pointer-events-none absolute -inset-px z-0 opacity-0 blur-md transition-opacity duration-200 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(180deg, hsl(var(--primary)/.10), transparent 40%)",
                }}
              />
              <CardHeader className="relative z-10 pb-2">
                <CardTitle className="text-base text-card-foreground">
                  {sl.name}
                </CardTitle>
                <div className="mt-2 inline-flex items-center gap-1 rounded-md border border-border/60 bg-background/70 px-2 py-1 text-[11px] text-muted-foreground">
                  <Timer className="h-3.5 w-3.5" />
                  {sl.duration}
                </div>
              </CardHeader>

              <CardContent className="relative z-10 pt-0 text-sm text-muted-foreground">
                <ul className="space-y-1.5">
                  {sl.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Optional deep link / CTA (kept minimal) */}
                <div className="mt-4">
                  <a
                    href={`#contact`}
                    className="inline-flex items-center gap-1 text-[12px] font-medium text-primary underline-offset-2 hover:underline"
                    aria-label={`Discuss ${sl.name}`}
                  >
                    Discuss this package <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          Need a different shape (e.g., audits, integrations, modernization)?{" "}
          <a href="#contact" className="underline">
            Let’s tailor a package
          </a>
          .
        </div>
      </div>
    </section>
  );
}
