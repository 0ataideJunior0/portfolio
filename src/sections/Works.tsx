import calendra from "@/assets/images/calendra_caba_dribble.png";
import maid from "@/assets/images/maiddashboard.png";
import Image from "next/image";

export const WorksSection = () => {
  const CardWorks = [
    {
      title: "Calendra",
      img: calendra,
      desc: "Precisa de ajuda para organizar o seus serviços? Com o Calendra, você tem uma gama de opções para ofertar seus serviços e uma agenda inteligente que centraliza seus compromissos, tarefas e lembretes, tudo em um só lugar.",
    },
    {
      title: "Polys Maid",
      img: maid,
      desc: "Gestor de equipe com agendamentos para cada time e funcionário. É um SaaS para gestão de equipes para empregadas domésticas.",
    },
  ];

  return (
    <div className="container">
      {/* Header */}
      <div className="flex flex-col items-center py-10 my-8">
        <span className="text-4xl text-whiteP ">Meus trabalhos</span>
        <span className="text-2xl text-whiteS ">
          Dê uma espiada nos trabalhos realizados recentes!
        </span>
      </div>
      {/* content */}
      <section className="flex flex-col gap-4 items-center">
        {CardWorks.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white border
         border-gray-200 rounded-3xl shadow md:flex-row md:max-w-xl lg:max-w-4xl hover:bg-gray-100
          dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 overflow-hidden gap-4"
          >
            <div>
              <Image src={item.img} alt="imagem" className="" />
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="text-6xl text-whiteP">{item.title}</div>
              <div className="text-xl text-whiteS">{item.desc}</div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
