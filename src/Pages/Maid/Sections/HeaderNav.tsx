"use client";
import Image from "next/image";
import { useState } from "react";

import logo from "@/assets/images/logo.png";
//import logoName from "@/assets/images/logoName.svg";
import Link from "next/link";
import { CgArrowLeftR } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";

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
        className="flex items-center justify-around
        my-2 p-2 mx-4 "
      >
        {/* logos */}
        <Link
          className=" hover:scale-110  transition duration-300 "
          href="/#hero"
        >
          <CgArrowLeftR className="text-4xl text-primary" />
        </Link>
        <Link
          className="flex hover:scale-110 transition duration-300"
          href="/#hero"
        >
          <Image src={logo} width={55} height={55} alt="minha logo" />
        </Link>

        {/* hamburguer menu */}
        <div
          onClick={togleMenu}
          className="lg:hidden text-3xl text-whiteP cursor-pointer"
        >
          <IoMenu />
        </div>

        <ul className="hidden md:hidden lg:flex space-x-4">
          <li>
            <a href="#hero" className="nav-item2 gap-1 flex items-center">
              Inicio
            </a>
          </li>
        </ul>
      </div>
      {/* mobile menu */}
      {isMenuOpen ? (
        <ul className="flex flex-col my-2 justify-center items-center space-y-4 lg:hidden">
          <li>
            <a href="#hero" className="nav-item2">
              Inicio
            </a>
          </li>
        </ul>
      ) : null}
    </nav>
  );
};