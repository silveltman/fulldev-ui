/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
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
				base: {
					// Foundation, mostly used for backgrounds.
					100: 'white',
					200: '#f1f5f9',
					300: '#cbd5e1',
					// Medium contrast, mostly used for borders.
					400: '#94a3b8',
					500: '#64748b',
					600: '#475569',
					// High contrast, mostly used for text.
					700: '#1e293b',
					800: '#0f172a',
					900: '#020617',
				},
				primary: {
					bg: 'blue',
					ring: 'blue',
					text: 'white',
					hover: 'blue',
				},
			},
		},
		plugins: [
			require("daisyui"),
			require('tailwind-scrollbar'),
			require('@tailwindcss/typography'),
			require('tailwindcss-themer')({}),
			require('./src/lib/plugin.cjs'),
		],
	}
};