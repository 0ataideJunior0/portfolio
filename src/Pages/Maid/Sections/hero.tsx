import HeroMaid from "@/assets/images/polysmaid/1.png";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="container lg:mt-20 sm:mt-24 mb-4 lg:mb-10" id="hero">
      <Image src={HeroMaid} alt="hero maid" />
    </div>
  );
};
