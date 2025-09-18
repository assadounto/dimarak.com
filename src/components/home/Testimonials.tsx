import { Quote } from "lucide-react";
import { SectionHeading } from "../common/SectionHeader";
import { Card, CardContent } from "../ui/card";
 
const testimonials = [
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
  return (
    <section id="testimonials" className="border-t border-border/60">
      <div className="container py-16 md:py-20">
        <SectionHeading kicker="What clients say" title="Testimonials" />
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <Card key={idx} className="bg-card border-border">
              <CardContent className="p-6">
                <Quote className="h-5 w-5 text-muted-foreground" />
                <p className="mt-3 text-sm text-card-foreground">“{t.quote}”</p>
                <div className="mt-2 text-xs text-muted-foreground">
                  — {t.name}, {t.title}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
