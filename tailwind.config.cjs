/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		//------------------------------------------------
		// ----------------- Base ------------------------
		//------------------------------------------------
		fontFamily: {
			base: '"Inter", sans-serif',
			heading: '"Inter", sans-serif',
			subheading: '"Inter", sans-serif',
		},
		fontWeight: {
			base: 400,
			heading: 700,
			subheading: 600,
			eyebrow: 500,
			label: 500,
			button: 500,
		},
		lineHeight: {
			base: 1.5,
			heading: 1.125,
			subheading: 1.125,
		},
	},
	daisyui: {
		themes: [
			{
				base: {
					//------------------------------------------------
					// ----------------- Colors ----------------------
					//------------------------------------------------
					// Background
					"base-100": "#ffffff",
					"base-200": "#ffffff",
					"base-300": "#F4F4F5",

					// Foreground
					'--content-100': 'black',
					'--content-300': '#a3a3a3',
					'--content-200': '#525252',
					// Set equal to base-200
					"base-content": "#0f172a",

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
					success: "green",
					warning: "yellow",
					error: "red",

					//-------------------------------------------------
					// ----------------- Styling ----------------------
					//-------------------------------------------------
					// Border radius
					"--rounded-box": "1rem",
					"--rounded-btn": "0.5rem",
					"--rounded-badge": "1.9rem",
					"--rounded-card": "1rem",
					"--tab-radius": "0.5rem",

					// Border width
					"--border-btn": "1px",
					"--border-box": "1px",
					"--border-card": "1px",
					"--tab-border": "1px",

					// Animation
					"--animation-btn": "0.25s",
					"--animation-input": "0.2s",

					// Button
					"--btn-text-case": "none",
					"--btn-focus-scale": "0.95",
				},
			},
		]
	},
	plugins: [
		require('tailwind-scrollbar'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/typography'),
		require("daisyui"),
		require('./src/lib/plugin.cjs'),
	],
};
