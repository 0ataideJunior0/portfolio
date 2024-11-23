import { DefinitionSection } from "./Sections/Definition";
import { DesignSection } from "./Sections/Design";
import { FooterSection } from "./Sections/Footer";
import { HeaderNavSection } from "./Sections/HeaderNav";
import { HeroSection } from "./Sections/Hero";
import { ResultsSection } from "./Sections/Results";
import { SearchSection } from "./Sections/Search";

export const CalendraPage = () => {
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
};
