import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
  "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  
  theme: {
  	screens: {
  		sm: '375px',
  		md: '798px',
  		lg: '1200px'
  	},
  	container: {
  		center: true,
  		padding: {
  			DEFAULT: '1rem',
  			md: '2rem'
  		}
  	},
  	extend: {
  		colors: {
  			text: 'var(--color-textW)',
  			primary: 'var(--color-primary)',
  			primary600: 'var(--color-primary600)',
  			background: 'var(--color-background)',
  			whiteP: 'var(--color-whiteP)',
  			whiteS: 'var(--color-whiteS)'
  		},
  		fontFamily: {
  			primaryFont: 'var(--font-primary)'
  		},
  		keyframes: {
  			'border-spin': {
  				'100%': {
  					transform: 'rotate(-360deg)'
  				}
  			},
  			meteor: {
  				'0%': {
  					transform: 'rotate(215deg) translateX(0)',
  					opacity: '1'
  				},
  				'70%': {
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'rotate(215deg) translateX(-500px)',
  					opacity: '0'
  				}
  			}
  		},
  		animation: {
  			'border-spin': 'border-spin 7s linear infinite',
  			meteor: 'meteor 5s linear infinite'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
		/* eslint-disable */
		require("tailwindcss-animate"),
	],
};
/* plugins: [require("tailwindcss-animate")], */
export default config;
