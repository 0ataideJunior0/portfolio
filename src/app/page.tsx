import { AboutSection } from "@/sections/About";
import { HeaderNavSection } from "@/sections/HeaderNav";
import { HeroSection } from "@/sections/Hero";
import { WorksSection } from "@/sections/Works";

export default function HomePage() {
  return (
    <main>
      <HeaderNavSection />
      <HeroSection />
      <AboutSection />
      <WorksSection />
    </main>
  );
}
