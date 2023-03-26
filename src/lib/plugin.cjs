const plugin = require('tailwindcss/plugin')

module.exports = plugin(
	function ({ addBase, addComponents, theme }) {
		{
			addBase({
				':root': {
					// Spacing
					'--space-xs': '3px',
					'--space-sm': '6px',
					'--space-md': '12px',
					'--space-lg': '24px',
					'--space-xl': '48px',
					'--space-2xl': '96px',
					'--space-3xl': '192px',

					// Text
					'--text-heading-xs': '14px',
					'--text-heading-sm': '16px',
					'--text-heading-md': '18px',
					'--text-heading-lg': '22px',
					'--text-heading-xl': '26px',
					'--text-heading-2xl': '32px',
					'--text-body-xs': '12px',
					'--text-body-sm': '14px',
					'--text-body-md': '16px',
					'--text-body-lg': '18px',
					'--text-body-xl': '20px',

					// Neutral
					'--color-neutral-0': '#ffffff',
					'--color-neutral-50': '#fafafa',
					'--color-neutral-100': '#f4f4f5',
					'--color-neutral-200': '#e4e4e7',
					'--color-neutral-300': '#d4d4d8',
					'--color-neutral-400': '#a1a2aa',
					'--color-neutral-500': '#71727a',
					'--color-neutral-600': '#52535b',
					'--color-neutral-700': '#3f4046',
					'--color-neutral-800': '#27272a',
					'--color-neutral-900': '#18181b',
					'--color-neutral-1000': '#000000',

					// Primary
					'--color-primary-50': '#f4f5fe',
					'--color-primary-100': '#c8cdf9',
					'--color-primary-200': '#a3abf5',
					'--color-primary-300': '#7e89f2',
					'--color-primary-400': '#5968ee',
					'--color-primary-500': '#3446ea',
					'--color-primary-600': '#172bde',
					'--color-primary-700': '#1221ab',
					'--color-primary-800': '#0c1778',
					'--color-primary-900': '#070d45',

					// Feedback
					'--color-success-300': '#b3e6b3',
					'--color-success-500': '#80cc80',
					'--color-success-700': '#4db34d',
					'--color-warning-300': '#e6e6b3',
					'--color-warning-500': '#cccc80',
					'--color-warning-700': '#b3b34d',
					'--color-danger-300': '#e6b3b3',
					'--color-danger-500': '#cc8080',
					'--color-danger-700': '#b34d4d'
				},
				'@screen sm': {
					':root': {
						// Spacing
						'--space-xs': '4px',
						'--space-sm': '8px',
						'--space-md': '16px',
						'--space-lg': '32px',
						'--space-xl': '64px',
						'--space-2xl': '128px',
						'--space-3xl': '256px',

						// Text
						'--text-heading-xs': '15px',
						'--text-heading-sm': '17px',
						'--text-heading-md': '19px',
						'--text-heading-lg': '24px',
						'--text-heading-xl': '32px',
						'--text-heading-2xl': '40px',
						'--text-body-xs': '13px',
						'--text-body-sm': '15px',
						'--text-body-md': '17px',
						'--text-body-lg': '19px',
						'--text-body-xl': '21px'
					}
				},
				'@screen xl': {
					':root': {
						'--text-heading-xs': '16px',
						'--text-heading-sm': '18px',
						'--text-heading-md': '20px',
						'--text-heading-lg': '28px',
						'--text-heading-xl': '40px',
						'--text-heading-2xl': '56px',
						'--text-body-xs': '14px',
						'--text-body-sm': '16px',
						'--text-body-md': '18px',
						'--text-body-lg': '20px',
						'--text-body-xl': '22px'
					}
				},
				'.dark': {
					// Neutral
					'--color-neutral-1000': '#ffffff',
					'--color-neutral-900': '#fafafa',
					'--color-neutral-800': '#f4f4f5',
					'--color-neutral-700': '#e4e4e7',
					'--color-neutral-600': '#d4d4d8',
					'--color-neutral-500': '#a1a2aa',
					'--color-neutral-400': '#71727a',
					'--color-neutral-300': '#52535b',
					'--color-neutral-200': '#3f4046',
					'--color-neutral-100': '#27272a',
					'--color-neutral-50': '#18181b',
					'--color-neutral-0': '#000000',

					// Primary
					'--color-primary-900': '#f4f5fe',
					'--color-primary-800': '#c8cdf9',
					'--color-primary-700': '#a3abf5',
					'--color-primary-600': '#7e89f2',
					'--color-primary-500': '#5968ee',
					'--color-primary-400': '#3446ea',
					'--color-primary-300': '#172bde',
					'--color-primary-200': '#1221ab',
					'--color-primary-100': '#0c1778',
					'--color-primary-50': '#070d45',

					// Feedback
					'--color-success-300': '#b3e6b3',
					'--color-success-500': '#80cc80',
					'--color-success-700': '#4db34d',
					'--color-warning-300': '#e6e6b3',
					'--color-warning-500': '#cccc80',
					'--color-warning-700': '#b3b34d',
					'--color-danger-300': '#e6b3b3',
					'--color-danger-500': '#cc8080',
					'--color-danger-700': '#b34d4d'
				},
				body: {
					fontSize: theme('fontSize.body-md'),
					fontWeight: theme('fontWeight.normal'),
					color: theme('colors.neutral.600'),
					lineHeight: theme('lineHeight.relaxed')
				},
				'p,span,ul,ol,li,blockquote': {
					color: theme('colors.neutral.600')
				},
				h1: {
					color: theme('colors.neutral.1000'),
					fontSize: theme('fontSize.heading-2xl'),
					fontWeight: theme('fontWeight.bold'),
					lineHeight: theme('lineHeight.tight')
				},
				h2: {
					color: theme('colors.neutral.1000'),
					fontSize: theme('fontSize.heading-xl'),
					fontWeight: theme('fontWeight.bold'),
					lineHeight: theme('lineHeight.tight')
				},
				h3: {
					color: theme('colors.neutral.1000'),
					fontSize: theme('fontSize.heading-lg'),
					fontWeight: theme('fontWeight.bold'),
					lineHeight: theme('lineHeight.tight')
				},
				h4: {
					color: theme('colors.neutral.1000'),
					fontSize: theme('fontSize.heading-md'),
					fontWeight: theme('fontWeight.medium'),
					lineHeight: theme('lineHeight.tight')
				},
				h5: {
					color: theme('colors.neutral.1000'),
					fontSize: theme('fontSize.heading-sm'),
					fontWeight: theme('fontWeight.medium'),
					lineHeight: theme('lineHeight.tight')
				},
				h6: {
					color: theme('colors.neutral.1000'),
					fontSize: theme('fontSize.heading-xs'),
					fontWeight: theme('fontWeight.medium'),
					lineHeight: theme('lineHeight.tight')
				}
			}),
				addComponents({
					'.container': {
						width: '100%',
						maxWidth: theme('maxWidth.screen-2xl'),
						marginLeft: 'auto',
						marginRight: 'auto',
						paddingLeft: theme('spacing.lg'),
						paddingRight: theme('spacing.lg')
					}
				})
		}
	},
	{
		darkMode: 'class',
		corePlugins: {
			aspectRatio: false,
			container: false
		},
		theme: {
			extend: {
				fontFamily: {
					heading: ['Roboto', 'sans-serif'],
					body: ['Roboto', 'sans-serif']
				},
				fontSize: {
					'heading-xs': 'var(--text-heading-xs)',
					'heading-sm': 'var(--text-heading-sm)',
					'heading-md': 'var(--text-heading-md)',
					'heading-lg': 'var(--text-heading-lg)',
					'heading-xl': 'var(--text-heading-xl)',
					'heading-2xl': 'var(--text-heading-2xl)',
					'body-xs': 'var(--text-body-xs)',
					'body-sm': 'var(--text-body-sm)',
					'body-md': 'var(--text-body-md)',
					'body-lg': 'var(--text-body-lg)',
					'body-xl': 'var(--text-body-xl)'
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
					'3xl': 'var(--space-3xl)'
				},
				borderRadius: {
					box: '24px',
					button: '12px',
					input: '12px',
					image: '4px',
					eyebrow: '4px'
				}
			}
		}
	}
)
