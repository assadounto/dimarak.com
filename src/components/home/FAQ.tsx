import { SectionHeading } from "../common/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
const faqs = [
  {
    q: "Do you offer enterprise support & SLAs?",
    a: "Yes. Tiered response times, uptime commitments, and a dedicated Customer Success manager are available.",
  },
  {
    q: "Can you deploy to our cloud?",
    a: "Yes. We support AWS/GCP/Azure, VPC setups, and regional data residency.",
  },
  {
    q: "How do projects start?",
    a: "We run a short discovery to align scope, success metrics, and timeline, then propose an execution plan.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="container py-16 md:py-20">
      <SectionHeading kicker="FAQ" title="Common questions" />
      <div className="mt-6">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
