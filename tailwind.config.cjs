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
		// require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('./src/lib/plugin.cjs'),
		require("daisyui"),
		require('tailwindcss-themer')({
			defaultTheme: {
				extend: {
					// backgroundColor: {
					// 	300: '#ffffff',
					// 	500: '#f8fafc',
					// 	700: '#f1f5f9',
					// 	'button-primary': '#000000',
					// 	'button-primary-hover': '#1e293b',
					// 	// 'button-secondary': '#000000',
					// 	// 'button-secondary-hover': '#000000',
					// },
					// ringColor: {
					// 	'button-primary': '#000000',
					// 	'button-primary-hover': '#1e293b',
					// 	'button-secondary': '#000000',
					// 	'button-secondary-hover': '#1e293b',
					// },
					// textColor: {
					// 	300: '#1e293b',
					// 	500: '#0f172a',
					// 	700: '#000000',
					// 	'button-primary': '#ffffff',
					// 	'button-secondary': '#000000',
					// 	'button-tertiary': '#000000',
					// 	'eyebrow': '#000000',
					// },
					// borderColor: {
					// 	300: '#e2e8f0',
					// 	500: '#cbd5e1',
					// 	700: '#94a3b8',
					// },
					// colors: {
					// 	accent: {
					// 		300: '#a5b4fc',
					// 		500: '#6366f1',
					// 		700: '#a5b4fc',
					// 	},
					// 	text: {
					// 		300: '#1e293b',
					// 		500: '#0f172a',
					// 		700: '#000000',
					// 	},
					// 	info: {
					// 		300: '#6ee7b7',
					// 		500: '#10b981',
					// 		700: '#047857',
					// 	},
					// 	success: {
					// 		300: '#86efac',
					// 		500: '#22c55e',
					// 		700: '#15803d',
					// 	},
					// 	warning: {
					// 		300: '#fdba74',
					// 		500: '#f97316',
					// 		700: '#c2410c',
					// 	},
					// 	danger: {
					// 		300: '#fca5a5',
					// 		500: '#ef4444',
					// 		700: '#b91c1c',
					// 	},
					// },
					// colors: {
					// 	'content-100': 'var(--content-100)',
					// 	'content-200': 'var(--content-200)',
					// 	'content-300': 'var(--content-300)',
					// }
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
