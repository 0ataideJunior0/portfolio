import Image from "next/image";
import logo from "../assets/images/logo.png";

export const HeaderSection = () =>{
  return(
    <header className="flex py-1.5 justify-between px-4 items-center relative top-5 border border-white/20 rounded-full
     bg-white/15 backdrop-blur-md">
        <a className="mx-4" href="#"><Image src={logo} width={55} height={55} alt="minha logo" /></a>
      <nav className="lg:flex md:flex sm:hidden gap-1 px-2 p-0.5 justify-center items-center ">
        <a className="nav-item " href="#">Inicio</a>
        <a className="nav-item " href="#">Sobre</a>
        <a className="nav-item " href="#">Trabalhos</a>
        <a className="nav-item " href="#">Contato</a>
      </nav>
      </header>
  );
};