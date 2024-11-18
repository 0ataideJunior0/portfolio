import Image from "next/image";

import Definition from "@/assets/images/calendra/4.png";

export const DefinitionSection = () => {
  return (
    <div className="container lg:mt-10 sm:mt-4" id="Definition">
      <div className="flex flex-col">
        <Image src={Definition} alt="Definition" />
      </div>
    </div>
  );
};
