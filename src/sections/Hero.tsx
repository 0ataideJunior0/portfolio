import { CvButton } from "@/components/CvButton";
import Image from "next/image";

import bgImage from "@/assets/images/pattern.png";
import { CtaButton } from "@/components/CtaButton";
import { Socials } from "@/components/Socials";
import { TypeWriter } from "@/components/Typewriter";
import profilePhoto from "../assets/images/profile_alta.png";

export const HeroSection = () => {
  return (
    <div className="py-24 md:py-24 lg:py-48 relative z-0 flex items-start">
      {/* bg image */}
      <Image
        src={bgImage}
        alt="backgroundImage"
        className="absolute inset-0 -z-30 opacity-5"
      />
      <div className="container flex items-center flex-row gap-20">
        {/* Text and left content  */}
        <div className="flex flex-col text-whiteP gap-4">
          <span className=" flex text-3xl">
            <TypeWriter />
          </span>
          <span className="text-3xl max-w-[600px]">
            Apaixonado por criar experiências interfaces intuitivas e centradas
            no usuário. Com mais de 2 anos de experiência na indústria, tenho um
            histórico comprovado em transformar insights de usuários em soluções
            de design eficazes.
          </span>
          <Socials />
          {/* buttons  */}
          <div className="flex flex-row gap-8 ">
            <CtaButton />
            <CvButton />
          </div>
        </div>

        {/* images and right contents  */}
        <div className="size-[400px] border-4 border-dashed border-primary rounded-full border-spacing-2">
          <Image src={profilePhoto} alt="my profile Photo" />
        </div>
      </div>
    </div>
  );
};
