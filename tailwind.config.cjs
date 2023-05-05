/** @type {import('tailwindcss').Config} */

const radixColors = require("@radix-ui/colors");
const { toRadixVars } = require("windy-radix-palette/vars");

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		fontFamily: {
			base: '"Inter", sans-serif',
			heading: '"Inter", sans-serif',
			subheading: '"Inter", sans-serif',
		},
		fontWeight: {
			base: 400,
			heading: 700,
			subheading: 600,
			button: 500,
			label: 500,
			eyebrow: 500,
		},
		lineHeight: {
			base: 1.5,
			heading: 1.125,
			subheading: 1.125,
		},
		borderRadius: {
			box: '1rem',
			button: '0.5rem',
			input: '0.5rem',
			card: '1rem',
			image: '1rem',
		},
		extend: {
			colors: {
				test1: toRadixVars('blue')
			}
		}
	},
	plugins: [
		require('tailwind-scrollbar'),
		require('@tailwindcss/typography'),
		require('rippleui')({
			defaultStyle: false,
			removeThemes: ['light', 'dark'],
		}),
		require('windy-radix-palette')({
			colors: {
				blue: radixColors.blue,
				red: radixColors.red,
			},
		}),
		require('tailwindcss-themer')({
			defaultTheme: {
				extend: {
					colors: {
						test2: toRadixVars('red')
					}
				}
			},
		}),
		require('./src/lib/plugin.cjs'),
	],
};