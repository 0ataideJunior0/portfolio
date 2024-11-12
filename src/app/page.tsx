import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { FooterSection } from "@/sections/Footer";
import { HeaderNavSection } from "@/sections/HeaderNav";
import { HeroSection } from "@/sections/Hero";
import { TestimonialSection } from "@/sections/Testimonials";
import { WorksSection } from "@/sections/Works";

export default function HomePage() {
  return (
    <main>
      <HeaderNavSection />
      <HeroSection />
      <WorksSection />
      <TestimonialSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
