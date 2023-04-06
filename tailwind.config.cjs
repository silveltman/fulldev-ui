/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [
		require('tailwind-scrollbar'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
		require('./src/lib/plugin.cjs'),
		require('tailwindcss-themer')({
			defaultTheme: {
				extend: {
					colors: {
						neutral: {
							0: '#ffffff',
							50: '#f8fafc',
							100: '#f1f5f9',
							200: '#e2e8f0',
							300: '#cbd5e1',
							400: '#94a3b8',
							500: '#64748b',
							600: '#475569',
							700: '#334155',
							800: '#1e293b',
							900: '#0f172a',
							1000: '#020617'
						},
						primary: {
							50: '#eef2ff',
							100: '#e0e7ff',
							200: '#c7d2fe',
							300: '#a5b4fc',
							400: '#818cf8',
							500: '#6366f1',
							600: '#4f46e5',
							700: '#4338ca',
							800: '#3730a3',
							900: '#312e81',
							950: '#1e1b4b',
						},
						success: {
							300: '#86efac',
							500: '#22c55e',
							700: '#15803d',
						},
						warning: {
							300: '#fdba74',
							500: '#f97316',
							700: '#c2410c',
						},
						danger: {
							300: '#fca5a5',
							500: '#ef4444',
							700: '#b91c1c',
						}
					},
				}
			},
			themes: [
				{
					name: 'dark',
					extend: {
						colors: {
							neutral: {
								0: '#020617',
								50: '#0f172a',
								100: '#1e293b',
								200: '#334155',
								300: '#475569',
								400: '#64748b',
								500: '#94a3b8',
								600: '#cbd5e1',
								700: '#e2e8f0',
								800: '#f1f5f9',
								900: '#f8fafc',
								1000: '#ffffff'
							},
							primary: {
								50: '#1e1b4b',
								100: '#312e81',
								200: '#3730a3',
								300: '#4338ca',
								400: '#4f46e5',
								500: '#6366f1',
								600: '#818cf8',
								700: '#a5b4fc',
								800: '#c7d2fe',
								900: '#e0e7ff',
								950: '#eef2ff',
							},
							success: {
								300: '#15803d',
								500: '#22c55e',
								700: '#86efac',
							},
							warning: {
								300: '#c2410c',
								500: '#f97316',
								700: '#fdba74',
							},
							danger: {
								300: '#b91c1c',
								500: '#ef4444',
								700: '#fca5a5',
							}
						}
					}
				},
			]
		})
	]
}
