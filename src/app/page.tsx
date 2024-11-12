import { ContactSection } from "@/sections/Contact";
import { FooterSection } from "@/sections/Footer";
import { HeaderNavSection } from "@/sections/HeaderNav";
import { HeroSection } from "@/sections/Hero";
import { MarqueeSkillsSection } from "@/sections/MarqueeSkills";
import { ToolsTechSection } from "@/sections/ToolsTech";
import { WorksSection } from "@/sections/Works";

export default function HomePage() {
  return (
    <main>
      <HeaderNavSection />
      <HeroSection />
      <WorksSection />
      <MarqueeSkillsSection />
      <ToolsTechSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
