/** @type {import('tailwindcss').Config} */

const radixColors = require('@radix-ui/colors');

function getRadixColors(object) {
	const newObject = {};
	Object.keys(object).forEach((item, index) => {
		newObject[index + 1] = object[item];
	});
	return newObject;
}

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			base: '"Inter", sans-serif',
			heading: '"Inter", sans-serif',
			subheading: '"Inter", sans-serif'
		},
		lineHeight: {
			heading: 1.25,
			subheading: 1.25,
			base: 1.625
		},
		fontWeight: {
			base: 400,
			heading: 700,
			subheading: 600,
			button: 500,
			label: 500,
			eyebrow: 500
		},
		borderRadius: {
			box: '1rem',
			card: '1rem',
			button: '0.5rem',
			input: '0.5rem',
			image: '1rem'
		}
	},
	plugins: [
		// require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
		require('rippleui')({
			defaultStyle: false,
			themes: []
		}),
		require('tailwindcss-themer')({
			themes: [
				{
					name: 'light',
					extend: {
						colors: {
							base: getRadixColors(radixColors.gray),
							'base-9-content': 'white'
						}
					}
				},
				{
					name: 'dark',
					extend: {
						colors: {
							base: getRadixColors(radixColors.grayDark),
							'base-9-content': 'white'
						}
					}
				}
			]
		}),
		require('./src/lib/plugin.cjs')
	]
};
