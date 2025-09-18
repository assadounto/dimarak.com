import { CaseStudies } from "@/components/home/CaseStudies";
import { Contact } from "@/components/home/Contact";
import { FAQ } from "@/components/home/FAQ";
import { Hero } from "@/components/home/Hero";
import { Industries } from "@/components/home/Industries";
import { Pricing } from "@/components/home/Pricing";
import { Process } from "@/components/home/Process";
import { Services } from "@/components/home/Services";
import { Solutions } from "@/components/home/Solutions";
import { Stack } from "@/components/home/Stack";
import { Testimonials } from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      
      <Hero />
      <Services />
      <Solutions />
      <Process />
      <Industries />
      <Stack />
      <CaseStudies />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
    </div>
  );
}
