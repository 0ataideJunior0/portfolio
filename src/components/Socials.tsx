import Link from "next/link";
import {
  TbBrandBehance,
  TbBrandDribbble,
  TbBrandLinkedin,
} from "react-icons/tb";

export const Socials = () => {
  return (
    <div
      className="lg:flex lg:flex-row md:flex md:flex-row gap-2 text-2xl my-4 text-whiteS items-center 
    sm:flex-col sm:gap-2"
    >
      <span>Diga um olá:</span>
      <span className="flex flex-row gap-2 text-whiteP text-3xl sm:justify-center">
        <Link
          href="https://www.linkedin.com/in/ataide-jr/"
          className="hover:text-primary hover:scale-125 transition-all duration-200"
          target="_blank"
        >
          <TbBrandLinkedin />
        </Link>

        <Link
          href={"#"}
          className="hover:text-primary hover:scale-125 transition-all duration-200"
        >
          <TbBrandDribbble />
        </Link>

        <Link
          href={"#"}
          className="hover:text-primary hover:scale-125 transition-all duration-200"
        >
          <TbBrandBehance />
        </Link>
      </span>
    </div>
  );
};
