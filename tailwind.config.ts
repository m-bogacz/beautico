import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/ui/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			backgroundImage: {
				hero: "url('/img/hero.jpg')",
				bg_treatments: "url('@/assets/icons/wave.svg')",
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				ranga: ["var(--font-ranga)"],
				montserrat: ["var(--font-montserrat)"],
			},
			colors: {
				magenta: {
					200: "#DA0C81",
				},
			},
			height: {
				"screen-50": "calc(100vh - 50px)",
			},
		},
	},
	plugins: [],
};

// eslint-disable-next-line import/no-default-export
export default config;
