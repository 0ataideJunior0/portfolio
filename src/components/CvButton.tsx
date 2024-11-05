import { TbDownload } from "react-icons/tb";

export const CvButton = () => {
  return (
    <a
      className="group relative inline-flex items-center overflow-hidden rounded border border-primary px-8 py-3
       text-whiteP focus:outline-none focus:ring active:bg-primary
       sm:max-w-[200px]
       sm:justify-center"
      href="CV_uiux.pdf"
      target="_blank"
    >
      <span className="absolute -end-full transition-all  group-hover:end-4">
        <TbDownload />
      </span>

      <span className="text-sm font-medium transition-all group-hover:me-4">
        Baixe meu CV
      </span>
    </a>
  );
};
