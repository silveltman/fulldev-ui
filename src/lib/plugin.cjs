/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')

module.exports = plugin(
	function ({ addBase, theme }) {
		addBase({})
	},
	{
		corePlugins: {
			aspectRatio: false,
			container: false
		},
		theme: {
			extend: {
				fontFamily: {
					heading: 'var(--font-heading)',
					body: 'var(--font-body)'
				},
				borderRadius: {
					box: 'var(--radius-box)',
					button: 'var(--radius-button)',
					input: 'var(--radius-input)',
					eyebrow: 'var(--radius-eyebrow)',
					image: 'var(--radius-image)'
				},
				fontSize: {
					'body-sm': 'var(--text-body-sm)',
					'body-md': 'var(--text-body-md)',
					'body-lg': 'var(--text-body-lg)',
					'heading-xs': 'var(--text-heading-xs)',
					'heading-sm': 'var(--text-heading-sm)',
					'heading-md': 'var(--text-heading-md)',
					'heading-lg': 'var(--text-heading-lg)',
					'heading-xl': 'var(--text-heading-xl)',
					'heading-2xl': 'var(--text-heading-2xl)'
				},
				colors: {
					neutral: {
						0: 'var(--color-neutral-0)',
						50: 'var(--color-neutral-50)',
						100: 'var(--color-neutral-100)',
						200: 'var(--color-neutral-200)',
						300: 'var(--color-neutral-300)',
						400: 'var(--color-neutral-400)',
						500: 'var(--color-neutral-500)',
						600: 'var(--color-neutral-600)',
						700: 'var(--color-neutral-700)',
						800: 'var(--color-neutral-800)',
						900: 'var(--color-neutral-900)',
						1000: 'var(--color-neutral-1000)'
					},
					primary: {
						50: 'var(--color-primary-50)',
						100: 'var(--color-primary-100)',
						200: 'var(--color-primary-200)',
						300: 'var(--color-primary-300)',
						400: 'var(--color-primary-400)',
						500: 'var(--color-primary-500)',
						600: 'var(--color-primary-600)',
						700: 'var(--color-primary-700)',
						800: 'var(--color-primary-800)',
						900: 'var(--color-primary-900)'
					},
					success: {
						300: 'var(--color-success-300)',
						500: 'var(--color-success-500)',
						700: 'var(--color-success-700)'
					},
					warning: {
						300: 'var(--color-warning-300)',
						500: 'var(--color-warning-500)',
						700: 'var(--color-warning-700)'
					},
					danger: {
						300: 'var(--color-danger-300)',
						500: 'var(--color-danger-500)',
						700: 'var(--color-danger-700)'
					}
				},
				spacing: {
					xs: 'var(--space-xs)',
					sm: 'var(--space-sm)',
					md: 'var(--space-md)',
					lg: 'var(--space-lg)',
					xl: 'var(--space-xl)',
					'2xl': 'var(--space-2xl)',
					'3xl': 'var(--space-3xl)',
					'4xl': 'var(--space-4xl)',
					'5xl': 'var(--space-5xl)'
				}
			}
		}
	}
)
