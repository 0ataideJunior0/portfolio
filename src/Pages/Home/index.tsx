import { ContactSection } from "@/Pages/Home/sections/Contact";
import { FooterSection } from "@/Pages/Home/sections/Footer";
import { HeaderNavSection } from "@/Pages/Home/sections/HeaderNav";
import { HeroSection } from "@/Pages/Home/sections/Hero";
import { MarqueeSkillsSection } from "@/Pages/Home/sections/MarqueeSkills";
import { ToolsTechSection } from "@/Pages/Home/sections/ToolsTech";
import { WorksSection } from "@/Pages/Home/sections/Works";

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
