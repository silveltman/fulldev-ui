/** @type {import('tailwindcss').Config} */

const radixColors = require("@radix-ui/colors");

function getRadixColors(object) {
	const newObject = {}
	Object.keys(object).forEach((item, index) => {
		newObject[index + 1] = object[item]
	})
	return newObject
}

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			base: '"Inter", sans-serif',
			heading: '"Inter", sans-serif',
			subheading: '"Inter", sans-serif',
		},
		lineHeight: {
			base: 1.5,
			heading: 1.125,
			subheading: 1.125,
		},
		fontWeight: {
			base: 400,
			heading: 700,
			subheading: 600,
			button: 500,
			label: 500,
			eyebrow: 500,
		},
		borderRadius: {
			box: '1rem',
			button: '0.5rem',
			input: '0.5rem',
			card: '1rem',
			image: '1rem',
		},
	},
	plugins: [
		require('tailwind-scrollbar'),
		require('@tailwindcss/typography'),
		require('rippleui')({
			defaultStyle: false,
			themes: [],
		}),
		require('tailwindcss-themer')({
			defaultTheme: {
				extend: {
					colors: {
						base: getRadixColors(radixColors.gray)
					}
				}
			},
			themes: [
				{
					name: 'dark',
					extend: {
						colors: {
							base: getRadixColors(radixColors.grayDark)
						}
					}
				},
				{
					name: 'orange-light',
					extend: {
						colors: {
							base: getRadixColors(radixColors.orange)
						}
					}
				},
				{
					name: 'orange-dark',
					extend: {
						colors: {
							base: getRadixColors(radixColors.orangeDark)
						}
					}
				},
				{
					name: 'size-sm',
				},
				{
					name: 'size-md',
				},
				{
					name: 'size-lg'
				},
			]
		}),
		require('./src/lib/plugin.cjs'),
		require("daisyui")
	],
	daisyui: {
		styled: false,
		themes: false,
		base: false,
		utils: false,
		prefix: "daisy-",
	},
}