import { CvButton } from "@/components/CvButton";
import Image from "next/image";

import profilePhoto from "@/assets/images/profile_alta.png";
import { CtaButton } from "@/components/CtaButton";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { Socials } from "@/components/Socials";
import { TypeWriter } from "@/components/Typewriter";
import Meteors from "@/components/ui/meteors";
import Particles from "@/components/ui/particles";

export const HeroSection = () => {
  return (
    <div
      className="h-dvh py-28 md:py-20 lg:py-64 relative z-0 flex items-start sm:flex-col overflow-hidden"
      id="hero"
    >
      {/* bg image */}
      {/*       <Image
        src={bgImage}
        alt="backgroundImage"
        className="absolute inset-0 -z-30 opacity-100"
      /> */}

      <div className="container flex items-center lg:flex-row  sm:flex-col lg:gap-40 md:gap-8 sm:gap-6 ">
        {/* <Meteors number={30} /> */}
        <Particles
          className="absolute inset-0 "
          quantity={200}
          ease={100}
          size={1}
          refresh
        />

        <Meteors />
        {/* Text and left content  */}
        <div className="lg:hidden md:flex md:size-[300px] sm:flex sm:size-[200px] z-30">
          <Image src={profilePhoto} alt="my profile Photo" />
        </div>
        <div className="flex flex-col text-whiteP gap-4">
          <span
            className="
            lg:flex lg:justify-start lg:text-4xl lg:ml-1
            md:flex md:text-2xl md:justify-center
            sm:flex sm:text-xl sm:justify-center"
          >
            <span className="mr-2">Olá eu sou</span>
            <TypeWriter />
          </span>
          <span className="lg:text-2xl lg:max-w-[500px] md:text-2xl md:max-w-[400px]">
            Apaixonado por criar experiências interfaces intuitivas e centradas
            no usuário. Com mais de 2 anos de experiência na indústria, tenho um
            histórico comprovado em transformar insights de usuários em soluções
            de design eficazes.
          </span>
          <span
            className="
          lg:flex lg:justify-start
          md:flex md:justify-center md:items-center
          sm:flex sm:justify-center"
          >
            <Socials>Diga um Olá:</Socials>
          </span>
          {/* buttons  */}
          <div
            className="
          lg:flex lg:flex-row lg:gap-8 lg:justify-start
          md:flex md:flex-row md:gap-6 md:justify-center
          sm:flex sm:flex-col sm:items-center sm:justify-center sm:gap-4"
          >
            <CtaButton href="#contact">Entre em contato</CtaButton>
            <CvButton />
          </div>
        </div>

        {/* images and right contents  */}

        <div className="md:hidden sm:hidden lg:flex lg:size-[400px]">
          <ProfilePhoto />
        </div>
      </div>
    </div>
  );
};
