import type { Config } from "tailwindcss";

const config: Config = {
  content: [
  "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors:{
        text: "var(--color-textW)",
        primary: "var(--color-primary)",
        background: "var(--color-background)",
        whiteP: "var(--color-whiteP)",
        whiteS: "var(--color-whiteS)"
      }
    },
  },
  plugins: [],
};
export default config;
