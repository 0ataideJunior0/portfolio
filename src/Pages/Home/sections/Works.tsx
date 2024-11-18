import calendra from "@/assets/images/calendra_caba_dribble.png";
import maid from "@/assets/images/maiddashboard.png";
import { CtaButton } from "@/components/CtaButton";
import {
  CustomCard,
  FrontEndCard,
  SmidCard,
  UiCard,
  UxCard,
} from "@/components/skillsUI/SkillCards";
import Image, { StaticImageData } from "next/image";

interface ICardData {
  title: string;
  img: StaticImageData;
  desc: string;
  href: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  skills: (({ textSize }: CustomCard) => JSX.Element)[];
}

export const WorksSection = () => {
  const CardWorks: ICardData[] = [
    {
      title: "Calendra",
      img: calendra,
      desc: "Precisa de ajuda para organizar os seus serviços? Com o Calendra, você tem uma gama de opções para ofertar seus serviços e uma agenda inteligente que centraliza seus compromissos, tarefas e lembretes, tudo em um só lugar. ",
      skills: [UiCard, UxCard, SmidCard],
      href: "/calendra",
    },
    {
      title: "Polys Maid",
      img: maid,
      desc: "Gestor de equipe com agendamentos para cada time e funcionário. É um SaaS para gestão de equipes para empregadas domésticas.",
      skills: [UiCard, UxCard, FrontEndCard],
      href: "/maid",
    },
  ];

  return (
    <div className="container" id="works">
      {/* Header */}
      <div className="flex flex-col items-center py-10">
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
          overflow-hidden sticky top-20 sm:top-10"
          >
            <div className="h-full">
              <Image src={item.img} alt="imagem" className="rounded-md" />
            </div>
            <div className="flex flex-col gap-4 mx-4 justify-between py-4">
              <div className="lg:text-5xl md:text-4xl sm:text-3xl text-whiteP flex justify-center">
                {item.title}
              </div>
              <div className="sm:hidden lg:flex lg:text-xl text-whiteS lg:min-w-[400px] md:min-w-[300px] lg:min-h-[200px]">
                {item.desc}
              </div>
              <span className="sm:text-xl md:text-2xl text-whiteP flex justify-center">
                Minhas funções no projeto:
              </span>
              <div className="flex gap-2 justify-evenly mt-3">
                {item.skills.map((Skill, i) => (
                  <Skill key={i} textSize="sm" />
                ))}
              </div>
              <div className="flex w-full justify-center mt-4">
                <CtaButton href={item.href}>Veja com mais detalhes</CtaButton>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
