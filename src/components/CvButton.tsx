import { TbDownload } from "react-icons/tb";

export const CvButton = () => {
  return (
    <a
      className="group relative inline-flex items-center overflow-hidden rounded-xl border border-primary px-8 py-3
       text-primary focus:outline-none focus:ring active:bg-primary
       sm:max-w-[200px]
       sm:justify-center"
      href="CV_uiux.pdf"
      target="_blank"
    >
      <span className="absolute -end-full transition-all  group-hover:end-4 group-hover:text-whiteP">
        <TbDownload />
      </span>

      <span className="text-md font-medium transition-all group-hover:me-4 group-hover:text-whiteP">
        Baixe meu CV
      </span>
    </a>
  );
};
