import Simples from "@/assets/images/polysmaid/2.png";
import Intuitivo from "@/assets/images/polysmaid/3.png";
import Pratico from "@/assets/images/polysmaid/4.png";
import Bonito from "@/assets/images/polysmaid/5.png";
import Assets from "@/assets/images/polysmaid/6.png";
import Image from "next/image";

export const ContentSection = () => {
  return (
    <div className="flex flex-col gap-4 lg:gap-10 container">
      <Image src={Simples} alt="hero maid" />
      <Image src={Intuitivo} alt="hero maid" />
      <Image src={Pratico} alt="hero maid" />
      <Image src={Bonito} alt="hero maid" />
      <Image src={Assets} alt="hero maid" />
    </div>
  );
};
