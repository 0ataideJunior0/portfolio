import type { Config } from "tailwindcss";

const config: Config = {
  content: [
  "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  
  theme: {
    screens:{
      sm: "375px",
      md: "798px",
      lg: "1200px"
    },
    container:{
      center: true,
      padding:{
        DEFAULT:"1rem",
        md: "2rem"
      }
    },
    extend: {
      colors:{
        text: "var(--color-textW)",
        primary: "var(--color-primary)",
        primary600: "var(--color-primary600)",
        background: "var(--color-background)",
        whiteP: "var(--color-whiteP)",
        whiteS: "var(--color-whiteS)"
      },
      fontFamily:{
        primaryFont: "var(--font-primary)"
      },
      keyframes: {
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
      },
      animation: {
        'border-spin': 'border-spin 7s linear infinite',
      },
    },
    
  },
  plugins: [],
};
export default config;
