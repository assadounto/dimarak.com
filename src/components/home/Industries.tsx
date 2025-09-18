import { SectionHeading } from "../common/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  ShoppingCart,
  Scale,
  Truck,
  Stethoscope,
  Banknote,
  Landmark,
  ShieldCheck,
} from "lucide-react";

type Industry = {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  tags?: string[];
};

const INDUSTRIES: Industry[] = [
  {
    name: "Commerce & Marketplaces",
    icon: ShoppingCart,
    tags: ["B2C", "Headless"],
  },
  {
    name: "Legal & Professional Services",
    icon: Scale,
    tags: ["Docs", "Workflows"],
  },
  {
    name: "Logistics & Mobility",
    icon: Truck,
    tags: ["Telemetry", "Dispatch"],
  },
  { name: "Healthcare", icon: Stethoscope, tags: ["HIPAA*", "PHI"] },
  { name: "Fintech", icon: Banknote, tags: ["PCI*", "KYC"] },
  { name: "Public Sector & NGOs", icon: Landmark, tags: ["Gov", "Field Ops"] },
];

export function Industries() {
  return (
    <section id="industries" className="relative border-t border-border/60">
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
              id="ind-grid"
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
          <rect width="100%" height="100%" fill="url(#ind-grid)" />
        </svg>
      </div>

      <div className="container py-16 md:py-20">
        <SectionHeading
          kicker="Where we operate"
          title="Industries"
          desc="We adapt delivery to your domain, compliance, and operational realities."
        />

        <div className="mt-8 grid auto-rows-fr gap-5 sm:grid-cols-2 md:grid-cols-3 sm:gap-6 lg:gap-8">
          {INDUSTRIES.map((ind) => {
            const Icon = ind.icon;
            return (
              <Card
                key={ind.name}
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
                  <CardTitle className="flex items-center gap-2 text-base text-card-foreground">
                    <Icon className="h-5 w-5 text-primary" />
                    {ind.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 pt-0 text-sm">
                  {/* Tag chips */}
                  {ind.tags && ind.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 text-[11px] text-muted-foreground">
                      {ind.tags.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center gap-1 rounded-md border border-border/60 bg-background/70 px-2 py-1"
                        >
                          <ShieldCheck className="h-3.5 w-3.5" />
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Small footnote for compliance tags */}
        <p className="mt-6 text-center text-xs text-muted-foreground">
          *Compliance-ready patterns for regulated contexts (e.g., HIPAA/PCI).
          Final posture depends on your stack and hosting.
        </p>
      </div>
    </section>
  );
}
