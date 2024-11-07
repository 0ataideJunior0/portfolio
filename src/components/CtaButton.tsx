import { TbCircleArrowRight } from "react-icons/tb";

export const CtaButton = () => {
  return (
    <a
      className="group rounded  relative inline-block overflow-hidden border
       border-primary600
       px-8 py-3 focus:outline-none focus:ring
        sm:max-w-[200px]
       sm:justify-center"
      href="#"
    >
      <span
        className="absolute inset-x-0 bottom-0 h-[2px] bg-primary600 
      transition-all group-hover:h-full
       group-active:bg-primary"
      ></span>

      <span
        className="flex gap-2 relative items-center text-md font-medium text-primary600 
      transition-colors duration-300 group-hover:text-whiteP"
      >
        Entre em contato
        <span className="text-2xl sm:hidden">
          <TbCircleArrowRight />
        </span>
      </span>
    </a>
  );
};
