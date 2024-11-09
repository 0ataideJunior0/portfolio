import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { HeaderNavSection } from "@/sections/HeaderNav";
import { HeroSection } from "@/sections/Hero";
import { WorksSection } from "@/sections/Works";

export default function HomePage() {
  return (
    <main>
      <HeaderNavSection />
      <HeroSection />
      <WorksSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
