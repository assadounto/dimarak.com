import { SectionHeading } from "../common/SectionHeader";
import { Button } from "../ui/button";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border/60">
      <div className="container py-16 md:py-20">
        <SectionHeading
          kicker="Contact"
          title="Let’s talk"
          desc="Send us a brief (what, who, when, budget) — we’ll respond with a proposal."
        />
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild>
            <a href="mailto:hello@dimarak.com">Email sales</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#">Download RFP checklist</a>
          </Button>
        </div>
        <footer className="mt-12 flex items-center justify-between border-t border-border/60 pt-6 text-xs text-muted-foreground">
          <span>
            © {new Date().getFullYear()} Dimarak. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <a className="hover:text-foreground underline" href="#">
              Privacy
            </a>
            <a className="hover:text-foreground underline" href="#">
              Terms
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
