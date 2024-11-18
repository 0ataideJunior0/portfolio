import { DefinitionSection } from "@/Pages/Calendra/Sections/Definition";
import { DesignSection } from "@/Pages/Calendra/Sections/Design";
import { FooterSection } from "@/Pages/Calendra/Sections/Footer";
import { HeaderNavSection } from "@/Pages/Calendra/Sections/HeaderNav";
import { HeroSection } from "@/Pages/Calendra/Sections/Hero";
import { ResultsSection } from "@/Pages/Calendra/Sections/Results";
import { SearchSection } from "@/Pages/Calendra/Sections/Search";

export default function CalendraRoute() {
  return (
    <>
      <HeaderNavSection />
      <HeroSection />
      <SearchSection />
      <DefinitionSection />
      <DesignSection />
      <ResultsSection />
      <FooterSection />
    </>
  );
}
