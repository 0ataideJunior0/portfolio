import { DefinitionSection } from "@/Pages/Calendra/Sections/Definition";
import { DesignSection } from "@/Pages/Calendra/Sections/Design";
import { HeroSection } from "@/Pages/Calendra/Sections/Hero";
import { SearchSection } from "@/Pages/Calendra/Sections/Search";

export default function CalendraRoute() {
  return (
    <>
      <HeroSection />
      <SearchSection />
      <DefinitionSection />
      <DesignSection />
    </>
  );
}
