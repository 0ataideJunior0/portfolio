import { ContentSection } from "./Sections/Content";
import { FooterSection } from "./Sections/Footer";
import { HeaderNavSection } from "./Sections/HeaderNav";
import { HeroSection } from "./Sections/hero";

export const MaidPage = () => {
  return (
    <>
      <HeaderNavSection />
      <HeroSection />
      <ContentSection />
      <FooterSection />
    </>
  );
};
