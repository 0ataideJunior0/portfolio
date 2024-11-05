"use client";
import { TypeAnimation } from "react-type-animation";

export const TypeWriter = () => {
  return (
    <TypeAnimation
      className="text-primary"
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Olá eu Sou Ataíde Junior",
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        "Olá eu Sou UX designer",
        2000,
        "Olá eu Sou UI designer",
        2000,
        "Olá eu Sou Web developer",
        2000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
};
