import { CvButton } from "@/components/CvButton";
import Image from "next/image";

import grainImage from "@/assets/images/bgPattern.jpg";
import { CtaButton } from "@/components/CtaButton";
import profilePhoto from "../assets/images/Ellipse _perfil.png";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0">
      {/* bg image */}
      <div
        className="absolute inset-0 -z-30 opacity-5 mix-blend-multiply"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      <div className="container flex flex-row ">
        {/* Text and left content  */}
        <div className="flex flex-col text-whiteP gap-4">
          <span className="text-3xl">
            Me chamo <span className="text-primary ">Ataíde Junior</span>
          </span>
          <span className="text-2xl max-w-[600px]">
            apaixonado por criar experiências interfaces intuitivas e centradas
            no usuário. Com mais de 2 anos de experiência na indústria, tenho um
            histórico comprovado em transformar insights de usuários em soluções
            de design eficazes.
          </span>

          {/* buttons  */}
          <div className="flex flex-row gap-6">
            <CvButton />
            <CtaButton />
          </div>
        </div>

        <div>
          {/* images and right contents  */}
          <Image src={profilePhoto} alt="my profile Photo" />
        </div>
      </div>
    </div>
  );
};
