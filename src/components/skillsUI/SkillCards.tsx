import {
  IoBulbOutline,
  IoCodeSlash,
  IoFingerPrint,
  IoPlanetOutline,
} from "react-icons/io5";

export const UxCard = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="text-whiteP lg:text-4xl sm:text-xl">
        <IoFingerPrint />
      </span>
      <span className="text-whiteP lg:text-4xl sm:text-xl">UX Designer</span>
    </div>
  );
};
export const UiCard = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="text-whiteP lg:text-4xl sm:text-xl">
        <IoPlanetOutline />
      </span>
      <span className="text-whiteP lg:text-4xl sm:text-xl">UI Designer</span>
    </div>
  );
};
export const SmidCard = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="text-whiteP lg:text-4xl sm:text-xl">
        <IoBulbOutline />
      </span>
      <span className="text-whiteP lg:text-4xl sm:text-xl">Social Midia</span>
    </div>
  );
};
export const FrontEndCard = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="text-whiteP lg:text-4xl sm:text-xl">
        <IoCodeSlash />
      </span>
      <span className="text-whiteP lg:text-4xl sm:text-xl">Dev FrontEnd</span>
    </div>
  );
};
