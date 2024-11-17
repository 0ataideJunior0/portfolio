import Image from "next/image";

import CalendraApresentation from "@/assets/images/calendra_apresentação.png";
import DesignSystem from "@/assets/images/calenra_Dsystem_dribble.png";
import FluxoGrama from "@/assets/images/fluxograma2_calendra.png";
import WireFrame from "@/assets/images/wireframe.png";

export const DesignSection = () => {
  return (
    <div className="container mt-10">
      <div className="flex flex-col">
        <span className="text-primary text-4xl">
          3- Desenvolvimento e design
        </span>
        <span className="text-whiteS text-2xl">
          Conforme a definição e estratégia da fase anterior, agora era a hora
          de começar a dar vida ao projeto.
        </span>
      </div>
      <div>
        <div className="flex flex-col justify-center items-center">
          <Image src={FluxoGrama} alt="fluxograma_calendra" className="mt-6" />
          <span className="flex text-whiteP text-4xl justify-center mt-6">
            Alguns Wireframes:
          </span>
          <Image src={WireFrame} alt="wireframe" />

          <Image
            src={DesignSystem}
            alt="DesignSystem"
            className="rounded-lg mt-4"
          />
          <Image
            src={CalendraApresentation}
            alt="CalendraApresentation"
            className="mt-6"
          />
        </div>
      </div>
    </div>
  );
};
