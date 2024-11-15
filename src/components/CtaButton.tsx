import { ReactNode } from "react";
import { TbCircleArrowRight } from "react-icons/tb";

interface Props {
  children?: ReactNode;
  href?: string;
}

export const CtaButton = ({ children, href }: Props) => {
  return (
    <a
      className="group rounded-xl relative inline-block overflow-hidden border
       border-primary600
       px-8 py-3 focus:outline-none focus:ring cursor-pointer"
      href={href}
    >
      <span
        className="absolute inset-x-0 bottom-0 h-[2px] bg-primary600 
      transition-all group-hover:h-full
       group-active:bg-primary"
      ></span>

      <span
        className="flex gap-2 relative items-center justify-center text-md font-medium text-primary600 
      transition-colors duration-300 group-hover:text-whiteP"
      >
        {children}
        <span className="text-2xl sm:hidden lg:flex">
          <TbCircleArrowRight />
        </span>
      </span>
    </a>
  );
};
