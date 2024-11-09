import calendra from "@/assets/images/calendra_caba_dribble.png";
import maid from "@/assets/images/maiddashboard.png";
import { CtaButton } from "@/components/CtaButton";
import Image from "next/image";
import {
  IoBulbOutline,
  IoCodeSlash,
  IoFingerPrint,
  IoPlanetOutline,
} from "react-icons/io5";

export const WorksSection = () => {
  const CardWorks = [
    {
      title: "Calendra",
      img: calendra,
      desc: "Precisa de ajuda para organizar o seus serviços? Com o Calendra, você tem uma gama de opções para ofertar seus serviços e uma agenda inteligente que centraliza seus compromissos, tarefas e lembretes, tudo em um só lugar.",
      skills: {
        ux: {
          title: "UX Designer",
          icon: <IoFingerPrint />,
        },
        ui: {
          title: "UI Designer",
          icon: <IoPlanetOutline />,
        },
        Smid: {
          title: "Social Midia",
          icon: <IoBulbOutline />,
        },
        Wdes: {
          title: "Web Designer",
          icon: <IoCodeSlash />,
        },
      },
    },
    {
      title: "Polys Maid",
      img: maid,
      desc: "Gestor de equipe com agendamentos para cada time e funcionário. É um SaaS para gestão de equipes para empregadas domésticas.",
      skills: {
        ux: {
          title: "UX Designer",
          icon: <IoFingerPrint />,
        },
        ui: {
          title: "UI Designer",
          icon: <IoPlanetOutline />,
        },
        Smid: {
          title: "Social Midia",
          icon: <IoBulbOutline />,
        },
        Wdes: {
          title: "Web Designer",
          icon: <IoCodeSlash />,
        },
      },
    },
  ];

  /*   const skills = [{
    ux: {
      title: "UX Designer",
      icon: <IoFingerPrint />,
    },
    ui: {
      title: "UI Designer",
      icon: <IoPlanetOutline />,
    },
    Smid: {
      title: "Social Midia",
      icon: <IoBulbOutline />,
    },
    Wdes: {
      title: "Web Designer",
      icon: <IoCodeSlash />,
    },
  }] */

  return (
    <div className="container" id="works">
      {/* Header */}
      <div className="flex flex-col items-center py-10 my-8">
        <span className="text-4xl text-whiteP ">Meus trabalhos</span>
        <span className="text-2xl text-whiteS ">
          Dê uma espiada nos trabalhos realizados recentes!
        </span>
        <span className="text-xl text-whiteS ">
          Todos os trabalhos deste portfólio são com resultados no mundo real.
        </span>
      </div>
      {/* content */}
      <section className="flex flex-col gap-4 items-center">
        {CardWorks.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center border  
         border-gray-200 rounded-3xl shadow-2xl lg:flex-row md:max-w-xl lg:max-w-4xl bg-slate-800
         lg:px-5
          overflow-hidden sticky top-20"
          >
            <div className="h-full">
              <Image src={item.img} alt="imagem" className="rounded-md" />
            </div>
            <div className="flex flex-col gap-4 mx-4 justify-between py-4">
              <div className="lg:text-5xl md:text-4xl sm:text-3xl text-whiteP flex justify-center">
                {item.title}
              </div>
              <div className="lg:text-xl text-whiteS lg:min-w-[400px] md:min-w-[300px] lg:min-h-[200px]">
                {item.desc}
              </div>
              <span className="text-2xl text-whiteP flex justify-center">
                Minhas funções no projeto:
              </span>
              <div className="flex gap-2 justify-evenly mt-3">
                <div className="text-whiteP flex flex-col items-center gap-2 lg:text-xl sm:text-base">
                  {item.skills?.ux.icon}
                  {item.skills?.ux.title}
                </div>
                <div className="text-whiteP flex flex-col items-center gap-2 lg:text-xl sm:text-base">
                  {item.skills?.ui.icon}
                  {item.skills?.ui.title}
                </div>
                <div className="text-whiteP flex flex-col items-center gap-2 lg:text-xl sm:text-base">
                  {item.skills?.Smid.icon}
                  {item.skills?.Smid.title}
                </div>
              </div>
              <div className="flex w-full justify-center mt-4">
                <CtaButton>Veja com mais detalhes</CtaButton>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
