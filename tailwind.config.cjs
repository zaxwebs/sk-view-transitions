/** @type {import('tailwindcss').Config}*/
const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {},
		fontFamily: {
			'sans': ['"Inter var"', 'Arial', 'sans-serif'],
		}
	},

	plugins: [],
};

module.exports = config;
