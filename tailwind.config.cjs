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
			// defaultTheme: {
			// 	extend: {
			// 		colors: {
			// 			base: getRadixColors(radixColors.gray)
			// 		},
			// 		fontSize: {
			// 			1: 'var(--text-sm)',
			// 			2: 'var(--text-base)',
			// 			3: 'var(--text-2xl)'
			// 		},
			// 		spacing: {
			// 			'space-1': '4px',
			// 			'space-2': '8px',
			// 			'space-3': '12px',
			// 			'space-4': '16px',
			// 			'space-5': '24px',
			// 			'space-6': '32px',
			// 			'space-7': '48px',
			// 			'space-8': '64px',
			// 			'space-9': '96px',
			// 			'space-10': '128px',
			// 			'space-11': '192px'
			// 		}
			// 	}
			// },
			themes: [
				{
					name: 'light',
					extend: {
						colors: {
							base: getRadixColors(radixColors.gray)
						}
					}
				},
				{
					name: 'dark',
					extend: {
						colors: {
							base: getRadixColors(radixColors.grayDark)
						}
					}
				},
				{
					name: 'small',
					extend: {
						fontSize: {
							1: 'var(--text-xs)',
							2: 'var(--text-sm)',
							3: 'var(--text-xl)'
						},
						spacing: {
							'space-1': '2px',
							'space-2': '4px',
							'space-3': '8px',
							'space-4': '12px',
							'space-5': '16px',
							'space-6': '24px',
							'space-7': '32px',
							'space-8': '48px',
							'space-9': '64px',
							'space-10': '96px',
							'space-11': '128px'
						}
					}
				},
				{
					name: 'medium',
					extend: {
						fontSize: {
							1: 'var(--text-sm)',
							2: 'var(--text-base)',
							3: 'var(--text-2xl)'
						},
						spacing: {
							'space-1': '4px',
							'space-2': '8px',
							'space-3': '12px',
							'space-4': '16px',
							'space-5': '24px',
							'space-6': '32px',
							'space-7': '48px',
							'space-8': '64px',
							'space-9': '96px',
							'space-10': '128px',
							'space-11': '192px'
						}
					}
				},
				{
					name: 'large',
					extend: {
						fontSize: {
							1: 'var(--text-md)',
							2: 'var(--text-lg)',
							3: 'var(--text-3xl)'
						},
						spacing: {
							'space-1': '6px',
							'space-2': '12px',
							'space-3': '16px',
							'space-4': '20px',
							'space-5': '32px',
							'space-6': '40px',
							'space-7': '64px',
							'space-8': '80px',
							'space-9': '128px',
							'space-10': '160px',
							'space-11': '256px'
						}
					}
				}
			]
		}),
		require('./src/lib/plugin.cjs')
	]
};
