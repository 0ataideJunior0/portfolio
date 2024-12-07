"use client";
import Image from "next/image";
import { useState } from "react";
import { GrTechnology } from "react-icons/gr";
import { IoMenu } from "react-icons/io5";
import { RxPaperPlane } from "react-icons/rx";
import { TbHome, TbScreenShare } from "react-icons/tb";

import logo from "@/assets/images/logo.png";
import logoName from "@/assets/images/logoName.svg";

export const HeaderNavSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const togleMenu = () => {
    setIsMenuOpen(!isMenuOpen); //!false = true
  };
  console.log(isMenuOpen);
  return (
    <nav
      className="fixed  top-1 w-full z-30 shadow-md
      backdrop-blur-md"
    >
      <div
        className="flex items-center lg:justify-evenly sm:justify-between
        my-2 p-2 mx-4 "
      >
        {/* logos */}
        <a className=" hover:scale-110  transition duration-300" href="#hero">
          <Image src={logo} width={55} height={55} alt="minha logo" />
        </a>
        <a
          className="sm:hidden md:hidden lg:flex hover:scale-110 transition duration-300"
          href="#hero"
        >
          <Image src={logoName} width={120} height={120} alt="minha logo" />
        </a>

        {/* hamburguer menu */}
        <div
          onClick={togleMenu}
          className="lg:hidden text-3xl text-whiteP cursor-pointer"
        >
          <IoMenu />
        </div>

        <ul className="hidden md:hidden lg:flex space-x-4">
          <li>
            <a href="#hero" className="nav-item gap-1 flex items-center">
              Inicio
              <TbHome />
            </a>
          </li>

          <li>
            <a href="#works" className="nav-item gap-1 flex items-center">
              Trabalhos
              <TbScreenShare />
            </a>
          </li>
          <li>
            <a href="#about" className="nav-item gap-1 flex items-center">
              Habilidades
              <GrTechnology />
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-item gap-1 flex items-center">
              Contato
              <RxPaperPlane />
            </a>
          </li>
        </ul>
      </div>
      {/* mobile menu */}
      {isMenuOpen ? (
        <ul className="flex flex-col my-2 justify-center items-center space-y-4 lg:hidden">
          <li>
            <a href="#hero" className="nav-item">
              Inicio
            </a>
          </li>
          <li>
            <a href="#works" className="nav-item">
              Trabalhos
            </a>
          </li>
          <li>
            <a href="#about" className="nav-item">
              Habilidades
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-item">
              Contato
            </a>
          </li>
        </ul>
      ) : null}
    </nav>
  );
};
