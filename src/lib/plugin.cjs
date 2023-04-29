/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')

module.exports = plugin(
	function ({ addBase, theme }) {
		addBase({
			':root': {
				'--text-xs': '12px',
				'--text-sm': '14px',
				'--text-md': '16px',
				'--text-lg': '18px',
				'--text-xl': '24px',
				'--text-2xl': '30px',
				'--text-3xl': '36px',

				'--space-xs': '3px',
				'--space-sm': '6px',
				'--space-md': '12px',
				'--space-lg': '18px',
				'--space-xl': '24px',
				'--space-2xl': '36px',
				'--space-3xl': '48px',
				'--space-4xl': '96px',
				'--space-5xl': '192px',
			},
			'@screen sm': {
				':root': {
					'--text-xs': '14px',
					'--text-sm': '16px',
					'--text-md': '18px',
					'--text-lg': '20px',
					'--text-xl': '26px',
					'--text-2xl': '36px',
					'--text-3xl': '60px',

					'--space-xs': '4px',
					'--space-sm': '8px',
					'--space-md': '16px',
					'--space-lg': '24px',
					'--space-xl': '32px',
					'--space-2xl': '48px',
					'--space-3xl': '64px',
					'--space-4xl': '128px',
					'--space-5xl': '256px',
				}
			},
			'body,html': {
				fontFamily: theme('fontFamily.body'),
				lineHeight: theme('lineHeight.relaxed'),
				color: theme('color.content-500'),
				fontWeight: theme('fontWeight.light'),
				backgroundColor: theme('color.base-200'),
			},
			body: {
				fontSize: theme('fontSize.md'),
			},
			'h1, h2, h3, h4, h5, h6': {
				color: theme('color.content-300'),
			},
			'h1, h2, h3': {
				fontFamily: theme('fontFamily.heading'),
			},
			h1: {
				fontSize: theme('fontSize.3xl'),
				fontWeight: theme('fontWeight.bold'),
				lineHeight: theme('lineHeight.none'),
				letterSpacing: theme('letterSpacing.tight'),
			},
			h2: {
				fontSize: theme('fontSize.2xl'),
				fontWeight: theme('fontWeight.bold'),
				lineHeight: theme('lineHeight.none'),
				letterSpacing: theme('letterSpacing.tight'),
			},
			h3: {
				fontSize: theme('fontSize.xl'),
				fontWeight: theme('fontWeight.bold'),
				lineHeight: theme('lineHeight.none'),
				letterSpacing: theme('letterSpacing.tight'),
			},
			h4: {
				fontSize: theme('fontSize.lg'),
				fontWeight: theme('fontWeight.medium'),
			},
			h5: {
				fontSize: theme('fontSize.md'),
				fontWeight: theme('fontWeight.medium'),
			},
			h6: {
				fontSize: theme('fontSize.sm'),
				fontWeight: theme('fontWeight.medium'),
			},
			'p, ul, ol, dl, dd, blockquote, pre, figure, hr': {
				color: theme('color.content-200'),
			}
		})
	},
	{
		corePlugins: {
			aspectRatio: false,
			container: false
		},
		theme: {
			// Font family
			fontFamily: {
				heading: '"Inter", sans-serif',
				body: '"Inter", sans-serif',
			},

			// Font size
			fontSize: {
				'xs': 'var(--text-xs)',
				'sm': 'var(--text-sm)',
				'md': 'var(--text-md)',
				'lg': 'var(--text-lg)',
				'xl': 'var(--text-xl)',
				'2xl': 'var(--text-2xl)',
				'3xl': 'var(--text-3xl)',
			},
			extend: {
				// Spacing
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
				},
				colors: {
					'content-100': 'var(--content-100)',
					'content-200': 'var(--content-200)',
					'content-300': 'var(--content-300)',
				}
			}
		}
	}
)
