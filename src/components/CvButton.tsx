import { TbDownload } from "react-icons/tb";

export const CvButton = () => {
  return (
    <a
      className="group relative inline-flex items-center overflow-hidden rounded bg-primary px-8 py-3
       text-white focus:outline-none focus:ring active:bg-primary"
      href="#"
    >
      <span className="absolute -end-full transition-all  group-hover:end-4">
        <TbDownload />
      </span>

      <span className="text-sm font-medium transition-all group-hover:me-4">
        Baixe meu CV
      </span>
    </a>

    /*     <button className=" text-primary flex items-center border border-primary p-6 ">
      <span>Baixe meu CV</span>
      <span>
        <TbDownload />
      </span>
    </button> */
  );
};
