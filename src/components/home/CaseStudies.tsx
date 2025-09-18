import { CheckCircle2, ChevronRight } from "lucide-react";
import { SectionHeading } from "../common/SectionHeader";
import { Card, CardContent } from "../ui/card";

export function CaseStudies() {
  return (
    <section id="cases" className="container py-16 md:py-20">
      <SectionHeading
        kicker="Results"
        title="Selected case studies"
        desc="Revenue lift, cost savings, risk reduction, and time‑to‑value."
      />
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="bg-card border-border">
            <CardContent className="p-6 text-sm text-muted-foreground">
              <div className="text-xs font-medium text-muted-foreground">
                Logistics · 6 months
              </div>
              <div className="mt-1 text-card-foreground font-semibold">
                Automated vendor onboarding & billing
              </div>
              <ul className="mt-3 space-y-1">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /> 28%
                  faster invoice cycles
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /> 35%
                  fewer manual reviews
                </li>
              </ul>
              <a
                href="#"
                className="mt-4 inline-flex items-center text-xs underline"
              >
                Read case <ChevronRight className="ml-1 h-3.5 w-3.5" />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
