import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#e11d48",
				"primary-hover": "#f22e59",
				"primary-shadow": "#f57f99",
				secondary: "#191e38",
				"secondary-hover": "#202f49",
				"secondary-shadow": "#454c6e",
				content: "#1f1f1f",
			},
		},
	},
	plugins: [],
};
export default config;
