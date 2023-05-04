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
	},
	plugins: [
		require('tailwindcss-themer')({
			defaultTheme: {
				extend: {
					colors: {
						// Foundation, mostly used for backgrounds.
						back: {
							100: 'white',
							200: '#f1f5f9',
							300: '#cbd5e1',
						},
						// Medium contrast, mostly used for borders.
						middle: {
							200: '#94a3b8',
							100: '#64748b',
							300: '#475569',
						},
						// High contrast, mostly used for text.
						front: {
							100: '#1e293b',
							200: '#0f172a',
							300: '#020617',
						},
						// Semantic colors.
						primary: {
							back: '#4f46e5',
							middle: '#4f46e5',
							front: '#dbeafe',
						},
						secondary: {
							back: 'none',
							middle: '#4f46e5',
							front: '#4f46e5',
						},
						info: {
							back: '#2563eb',
							middle: '#60a5fa',
							front: '#dbeafe',
						},
						success: {
							back: '#16a34a',
							middle: '#4ade80',
							front: '#dcfce7',
						},
						warning: {
							back: '#ca8a04',
							middle: '#facc15',
							front: '#fef9c3',
						},
						error: {
							back: '#dc2626',
							middle: '#f87171',
							front: '#fee2e2',
						},
					}
				}
			},
			// themes: [
			// 	{
			// 		name: 'dark',
			// 		extend: {
			// 			colors: {
			// 				primary: 'blue'
			// 			}
			// 		}
			// 	}
			// ]
		}),
		require("daisyui"),
		require('tailwind-scrollbar'),
		require('@tailwindcss/typography'),
		require('./src/lib/plugin.cjs'),
	],
};