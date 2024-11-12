import { Socials } from "@/components/Socials";
import Image from "next/image";
import logo from "../assets/images/logo.png";

export const FooterSection = () => {
  return (
    <div className="container">
      <section className="flex sm:flex-col lg:flex-row lg:gap-8 justify-center dm:gap-8 py-4 items-center">
        <div
          className="
        sm:flex sm:flex-col sm:justify-center gap-2 sm:items-center
        lg:flex lg:flex-row
        "
        >
          <a className=" hover:scale-110  transition duration-300" href="#hero">
            <Image src={logo} width={65} height={65} alt="minha logo" />
          </a>
          <span className="text-primary text-base font-semibold items-center">
            Ataíde Junior
            <br />
            UI/UX Designer
          </span>
        </div>
        <div>
          <Socials />
        </div>
      </section>
      <div className="flex justify-center text-xl text-whiteP mb-4">
        <span>@2024 Todos os direitos reservados</span>
      </div>
    </div>
  );
};
