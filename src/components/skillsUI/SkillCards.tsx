import { ReactNode } from "react";
import {
  IoBulbOutline,
  IoCodeSlash,
  IoFingerPrint,
  IoPlanetOutline,
} from "react-icons/io5";

interface ICardProps {
  children: ReactNode;
  label: string;
  textSize?: "sm" | "lg" | "md";
}

export const Card = ({ children, label, textSize = "lg" }: ICardProps) => {
  const text =
    textSize === "lg"
      ? "lg:text-4xl md:text-2xl sm:text-xl"
      : textSize === "md"
      ? "lg:text-3xl md:text-2xl sm:text-xl"
      : "lg:text-xl md:text-xl sm:text-base";
  return (
    <div className="flex flex-col justify-center items-center">
      <span className={`text-whiteP ${text}`}>{children}</span>
      <span className={`text-whiteP ${text}`}>{label}</span>
    </div>
  );
};

export interface CustomCard {
  textSize?: "sm" | "lg" | "md";
}
export const UxCard = ({ textSize }: CustomCard) => {
  return (
    <Card label="UX Designer" textSize={textSize}>
      <IoFingerPrint />
    </Card>
  );
};

export const UiCard = ({ textSize }: CustomCard) => {
  return (
    <Card label="UI Designer" textSize={textSize}>
      <IoPlanetOutline />
    </Card>
  );
};

export const SmidCard = ({ textSize }: CustomCard) => {
  return (
    <Card label="Social Midia" textSize={textSize}>
      <IoBulbOutline />
    </Card>
  );
};

export const FrontEndCard = ({ textSize }: CustomCard) => {
  return (
    <Card label="Dev FrontEnd" textSize={textSize}>
      <IoCodeSlash />
    </Card>
  );
};
