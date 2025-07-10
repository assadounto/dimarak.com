import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import WhoWeAre from "@/components/sections/WhoWeAre";
// import ScrollingTextSection from "@/components/sections/ScrollTextSection";

import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <ScrollingTextSection /> */}
      <ServicesSection />
      <WhoWeAre />
      {/* <WhyChooseUs /> */}
      {/* <Testimonial /> */}
    </>
  );
}
