import Image from "next/image";

import Results2 from "@/assets/images/calendra/10.png";
import Showing from "@/assets/images/calendra/11.png";
import Thanks from "@/assets/images/calendra/12.png";
import Results from "@/assets/images/calendra/9.png";

export const ResultsSection = () => {
  return (
    <div className="container lg:mt-10 sm:mt-4" id="Result">
      <div className="flex flex-col">
        <Image src={Results} alt="Resultados" />
        <Image src={Results2} alt="Results2" className=" lg:mt-10 sm:mt-4" />
        <Image src={Showing} alt="Showing" className=" lg:mt-10 sm:mt-4" />
        <Image
          src={Thanks}
          alt="Thanks"
          className=" lg:mt-10 sm:mt-4 rounded-lg"
        />
      </div>
    </div>
  );
};
