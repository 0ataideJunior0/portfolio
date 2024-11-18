import Image from "next/image";

import Design from "@/assets/images/calendra/5.png";
import Persona from "@/assets/images/calendra/6.png";
import Wireframe from "@/assets/images/calendra/7.png";
import DesignSystem from "@/assets/images/calendra/8.png";

export const DesignSection = () => {
  return (
    <div className="container lg:mt-10 sm:mt-4" id="Design">
      <div className="flex flex-col">
        <Image src={Design} alt="Design" />
        <Image src={Persona} alt="Design" className=" lg:mt-10 sm:mt-4" />
        <Image src={Wireframe} alt="Design" className=" lg:mt-10 sm:mt-4" />
        <Image src={DesignSystem} alt="Design" className=" lg:mt-10 sm:mt-4" />
      </div>
    </div>
  );
};
