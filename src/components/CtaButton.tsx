import { TbDownload } from "react-icons/tb";

export const CtaButton = () => {
  return (
    <a
      className="group flex items-center justify-between gap-4 rounded-lg border border-indigo-600 bg-indigo-600 px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring"
      href="#"
    >
      <span className="font-medium text-white transition-colors group-hover:text-indigo-600 group-active:text-indigo-500">
        Find out more
      </span>

      <span className="shrink-0 rounded-full border border-current bg-white p-2 text-indigo-600 group-active:text-indigo-500">
        <TbDownload />
      </span>
    </a>
  );
};
