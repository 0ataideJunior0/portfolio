import { TbDownload } from "react-icons/tb";

export const CvButton = () => {
  return (
    <button className=" text-primary flex items-center border border-primary p-6 ">
      <span>Baixe meu CV</span>
      <span>
        <TbDownload />
      </span>
    </button>
  );
};
