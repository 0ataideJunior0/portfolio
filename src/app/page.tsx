import { AboutSection } from "@/sections/About";
import { HeaderNavSection } from "@/sections/HeaderNav";
import { HeroSection } from "@/sections/Hero";

export default function HomePage() {
  return (
    <main>
      <HeaderNavSection />
      <HeroSection />
      <AboutSection />
    </main>
  );
}
