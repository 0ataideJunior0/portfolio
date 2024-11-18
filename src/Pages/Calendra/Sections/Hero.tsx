import Image from "next/image";

import CalendraCapa from "@/assets/images/calendra/1.png";
import Apresentação from "@/assets/images/calendra/2.png";

export const HeroSection = () => {
  return (
    <div className="container lg:mt-20 sm:mt-24" id="hero">
      <div className="flex flex-col items-center">
        <Image
          src={CalendraCapa}
          alt="Capa da Calendra"
          className="rounded-lg lg:mb-10 sm:mb-4"
        />
        <Image src={Apresentação} alt="Apresentação" />
      </div>
    </div>
  );
};
