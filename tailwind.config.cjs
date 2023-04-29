/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
		}
	},
	plugins: [
		require('tailwind-scrollbar'),
		require('@tailwindcss/aspect-ratio'),
		require('./src/lib/plugin.cjs'),
		require('@tailwindcss/typography'),
		require("daisyui"),
		require('tailwindcss-themer')({
			defaultTheme: {
				extend: {
				}
			},

		})
	],
	daisyui: {
		themes: [
			{
				base: {
					//------------------------------------------------
					// ----------------- Base Colors -----------------
					//------------------------------------------------
					// Primary, used for primary buttons
					primary: "black",
					"primary-focus": "darkgray",
					"primary-content": "white",

					// Secondary, used for secondary buttons
					secondary: "black",
					"secondary-focus": "darkgray",
					"secondary-content": "white",

					// Accent, no use-case yet
					accent: "black",
					"accent-focus": "darkgray",
					"accent-content": "white",

					// Neutral, used for radio and checkboxes
					neutral: "black",
					"neutral-focus": "darkgray",
					"neutral-content": "white",

					// Feedback
					info: "blue",
					"info-content": "white",
					success: "green",
					"success-content": "white",
					warning: "yellow",
					"warning-content": "white",
					error: "red",
					"error-content": "white",

					//--------------------------------------------------
					// ----------------- Custom Colors -----------------
					//--------------------------------------------------
					// Background
					"base-100": "#ffffff",
					"base-200": "#ffffff",
					"base-300": "#ffffff",

					// Foreground
					'--content-100': '#1e293b',
					'--content-200': '#0f172a',
					'--content-300': '#000000',
					// Set equal to base-200
					"base-content": "#0f172a",

					//------------------------------------------------------
					// ----------------- Styling variables -----------------
					//------------------------------------------------------
					"--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
					"--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
					"--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
					"--animation-btn": "0.25s", // duration of animation when you click on button
					"--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
					"--btn-text-case": "lowercase", // set default text transform for buttons
					"--btn-focus-scale": "0.95", // scale transform of button when you focus on it
					"--border-btn": "1px", // border width of buttons
					"--tab-border": "1px", // border width of tabs
					"--tab-radius": "0.5rem", // border radius of tabs
				},
			},
		]
	}
};
