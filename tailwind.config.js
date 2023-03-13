/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				purple: "#8015E8",
				purpleLight: "#8858ED",
				black: "#272443",
				gray: " #F6F4F0",
				yellow: "#FDA923",
			},
			screens: {
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1440px",
				"2xl": "1600px",
				"3xl": "1920px",
				"4xl": "2560px",
			},
			borderRadius: {
				sm: "5px",
			},
		},
	},
	plugins: [],
};
