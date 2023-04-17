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
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('./src/lib/plugin.cjs'),
		require('tailwindcss-themer')({
			defaultTheme: {
				extend: {
					backgroundColor: {
						300: '#ffffff',
						500: '#f8fafc',
						700: '#f1f5f9',
						'button-primary': '#000000',
					},
					textColor: {
						300: '#1e293b',
						500: '#0f172a',
						700: '#0000',
						'button-primary': '#ffffff',
						'button-secondary': '#000000',
						'button-tertiary': '#000000',
						'eyebrow': '#000000',
					},
					borderColor: {
						300: '#e2e8f0',
						500: '#cbd5e1',
						700: '#94a3b8',
					},
					ringColor: {
						'button-secondary': '#000000',
					},
					colors: {
						accent: {
							300: '#a5b4fc',
							500: '#6366f1',
							700: '#a5b4fc',
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
						},
					},
				}
			},
			themes: [
				{
					name: 'dark',
					extend: {
						backgroundColor: {
							300: '#362818',
							500: '#2D2215',
							700: '#231A10',
							'button-primary': '#000000',
						},
						textColor: {
							300: '#1e293b',
							500: '#0f172a',
							700: '#020617',
							'button-primary': '#ffffff',
							'button-secondary': '#000000',
							'button-tertiary': '#000000',
							'eyebrow': '#000000',
						},
						borderColor: {
							300: '#e2e8f0',
							500: '#cbd5e1',
							700: '#94a3b8',
						},
						ringColor: {
							'button-secondary': '#000000',
						},
						colors: {
							accent: {
								300: '#a5b4fc',
								500: '#6366f1',
								700: '#a5b4fc',
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
							},
						}
					},
				},
			]
		})
	]
}
