const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		// defaults to these values
		textFillColor: (theme) => theme("borderColor"),
		textStrokeColor: (theme) => theme("borderColor"),
		textStrokeWidth: (theme) => theme("borderWidth"),
		paintOrder: {
			fsm: { paintOrder: "fill stroke markers" },
			fms: { paintOrder: "fill markers stroke" },
			sfm: { paintOrder: "stroke fill markers" },
			smf: { paintOrder: "stroke markers fill" },
			mfs: { paintOrder: "markers fill stroke" },
			msf: { paintOrder: "markers stroke fill" },
		},
		extend: {
			fontFamily: {
				roboSlab: ['"RoboSlab"', "./public/static/fonts/RobotoSlab-Regular.ttf", ...defaultTheme.fontFamily.serif],
			},
			colors: {
				shadow10: "rgba(0, 0, 0, 0.3)",
				shadow20: "rgba(158, 155, 155, 0.3)",
				shadow30: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
			},
			backgroundImage: {
				"hero-pattern":
					"linear-gradient(to bottom, var(--tw-gradient-stops)): --gradient-from, var(--black); --gradient-stops: var(--gradient-from), var(--gradient-to, rgba(0, 0, 0, 0)); width: 100%; z-index: 50;",
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("tailwindcss-text-fill-stroke"), // no options to configur
	],
};
