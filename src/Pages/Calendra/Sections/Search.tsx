import Image from "next/image";

import Search from "@/assets/images/calendra/3.png";

export const SearchSection = () => {
  return (
    <div className="container" id="Search">
      <div className="flex flex-col lg:mt-10 sm:mt-4">
        <Image src={Search} alt="Pesquisa" />
      </div>
    </div>
  );
};
