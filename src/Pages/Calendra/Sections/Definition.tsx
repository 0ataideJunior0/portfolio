import Image from "next/image";

import Dor from "@/assets/images/dor.png";
import Remedios from "@/assets/images/remedios.png";

export const DefinitionSection = () => {
  return (
    <div className="container mt-10">
      <div className="flex flex-col">
        <span className="text-primary text-4xl">2- Definição</span>
        <span className="text-whiteS text-2xl">
          Após os conceitos iniciais estarem estabelecidos, é hora de convergir
          ideias e planejar os próximos passos!
        </span>
        <div className="grid grid-cols-2 items-center mt-8">
          <span className="text-whiteP text-3xl">Resultado das pesquisas</span>
          <span className=" text-whiteS text-2xl">
            Após coletar os dados das pesquisas com uma amostragem em diferentes
            cidades e com diferentes públicos. Chegamos a primeira idealização
            do projeto que viria a se tornas um aplicativo.
          </span>
        </div>
        <div className="grid grid-cols-2 items-center mt-8">
          <span className="text-whiteP text-3xl">Idealização do app</span>
          <span className=" text-whiteS text-2xl">
            Uma plataforma mobile foi a melhor solução para o nosso problema,
            pois todos os seus atributos estariam nas palmas de suas mãos, e com
            poucos toques na tela conseguiria chegar ao seu objetivo.
          </span>
        </div>
        <div className="flex flex-col justify-center items-center mt-6 gap-4">
          <span className="text-whiteP text-3xl">Pontos de dor</span>
          <Image src={Dor} alt="pontos de dor" />

          <span className="text-whiteP text-3xl">Remedios</span>
          <Image src={Remedios} alt="Remedios" />
        </div>
      </div>
    </div>
  );
};
