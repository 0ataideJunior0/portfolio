import Image from "next/image";

import CalendraCapa from "@/assets/images/calendra_caba_port.png";
import DuploDiamante from "@/assets/images/duplodiamante 1.png";

export const HeroSection = () => {
  return (
    <div className="container lg:py-20">
      <div className="flex flex-col items-center ">
        <Image src={CalendraCapa} alt="Capa da Calendra" />
      </div>
      <div className="flex flex-col gap-2 py-6">
        <span className="text-whiteP text-4xl">Calendra</span>
        <span className="text-whiteS text-2xl">
          Minha função: Ux designer, Ui designer, Social Mídia
        </span>
        <div className="flex gap-6 py-4">
          <div className="flex flex-col gap-2">
            <span className="text-whiteP text-3xl">Panorama do Projeto</span>
            <span className="text-whiteS text-2xl">
              Já imaginou um aplicativo para os autônomos se organizarem e
              aumentarem seus lucros? A Calendra nasceu para trazer organização
              e funcionalidades que melhoram o dia a dia de trabalho de
              nutricionistas, médicos, cabeleireiros e outros profissionais.
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-whiteP text-3xl">Onde eu entro.</span>
            <span className=" text-whiteS text-2xl">
              Quando fui chamado para o projeto, ele estava em estágio inicial,
              a marca e padrões de cores ja haviam sidos estabelecidas
              previamente. Desde então, toda direção de UI e UX foram tomadas
              por mim!
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-whiteP text-4xl">Como foi feito:</span>
        <span className="text-whiteS text-2xl">
          A estratégia utilizada no projeto foi duplo diamante
        </span>
        <div className="flex items-center justify-center mt-4">
          <Image src={DuploDiamante} alt="duplo diamante" />
        </div>
      </div>
    </div>
  );
};
