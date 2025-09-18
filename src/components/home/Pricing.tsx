import { ShieldCheck, Star, UserRound } from "lucide-react";
import { SectionHeading } from "../common/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-border/60 bg-muted/20">
      <div className="container py-16 md:py-20">
        <SectionHeading
          kicker="Support"
          title="Engagement models"
          desc="Choose the support level that matches your needs."
        />
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Project",
              response: "< 1 business day",
              uptime: "N/A",
              cta: "Get a quote",
            },
            {
              name: "Retainer",
              response: "< 4 hours",
              uptime: "99.9%",
              cta: "Book a slot",
            },
            {
              name: "Enterprise",
              response: "< 1 hour",
              uptime: "99.95%",
              cta: "Talk to sales",
            },
          ].map((p) => (
            <Card key={p.name} className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-base">{p.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <ul className="space-y-1">
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" /> Response{" "}
                    {p.response}
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-primary" /> Uptime{" "}
                    {p.uptime}
                  </li>
                  <li className="flex items-center gap-2">
                    <UserRound className="h-4 w-4 text-primary" /> Dedicated
                    success manager
                  </li>
                </ul>
                <Button className="mt-4 w-full">{p.cta}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
