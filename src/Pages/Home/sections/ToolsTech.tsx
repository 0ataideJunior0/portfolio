"use client";
import figma from "@/assets/icons/figma.svg";
import framerMotion from "@/assets/icons/framer-motion.svg";
import framer from "@/assets/icons/framer.svg";
import javascript from "@/assets/icons/javascript.svg";
import miro from "@/assets/icons/miro.svg";
import react from "@/assets/icons/react.svg";
import tailwind from "@/assets/icons/tailwindcss.svg";
import typescrip from "@/assets/icons/typescript.svg";

import Image from "next/image";

export const ToolsTechSection = () => {
  const CardList = [
    {
      title: "Figma",
      img: figma,
      desc: "Ferramenta de design",
    },
    {
      title: "Framer",
      img: framer,
      desc: "Site nocode",
    },
    {
      title: "FramerMotion ",
      img: framerMotion,
      desc: "React Animations",
    },
    {
      title: "Miro",
      img: miro,
      desc: "Gerenciador de progetos",
    },
    {
      title: "JavaScript",
      img: javascript,
      desc: "Ferramenta de design",
    },
    {
      title: "TypeScript",
      img: typescrip,
      desc: "Ferramenta de design",
    },
    {
      title: "React",
      img: react,
      desc: "Ferramenta de design",
    },
    {
      title: "Tailwind-css",
      img: tailwind,
      desc: "CSS framework",
    },
  ];
  return (
    <div className="container py-20 sm:py-4" id="about">
      <span className="flex text-2xl text-center justify-center mb-4 py-6 text-whiteP ">
        Conheça algumas ferramentas que eu domino!!!
      </span>
      <section
        className="grid gap-4 sm:grid-cols-[repeat(auto-fill,_minmax(250px,1fr))] 
      lg:grid-cols-[repeat(auto-fill,_minmax(400px,1fr))]"
      >
        {CardList.map((item, index) => (
          <div
            key={index}
            className="flex  border-2 rounded-md gap-2 py-1 px-1 items-center
              hover:border-2 hover:border-primary"
          >
            <span className=" flex bg-slate-800 h-[64px] w-[64px] justify-center items-center rounded-md">
              <Image src={item.img} alt={item.title} width={50} height={50} />
            </span>
            <div className="flex flex-col">
              <span className="text-3xl text-whiteP">{item.title}</span>
              <span className="text-whiteS">{item.desc}</span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
