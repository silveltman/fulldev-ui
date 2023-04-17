/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')

module.exports = plugin(
	function ({ addBase, theme }) {
		addBase({
			':root': {
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
				fontSize: theme('fontSize.md'),
				lineHeight: theme('lineHeight.relaxed'),
				color: theme('textColor.500'),
				fontWeight: theme('fontWeight.light'),
			},
			'h1, h2, h3, h4, h5, h6': {
				fontFamily: theme('fontFamily.heading'),
				color: theme('textColor.700'),
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
				color: theme('textColor.500'),
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

			// Border Radius
			borderRadius: {
				box: '24px',
				button: '12px',
				input: '12px',
				eyebrow: '12px',
				image: '4px',
				full: '9999px',
				none: '0px',
			},

			// Shadow
			boxShadow: {
				box: '0 0 0 1px',
				image: '0 0 0 1px',
				'button-primary': '0 0 0 1px',
			},
			boxShadowColor: {
				box: '#000000',
				image: '#000000',
				'button-primary': '#000000',
			},

			// Font size
			fontSize: {
				'sm': 'var(--text-sm)',
				'md': 'var(--text-md)',
				'lg': 'var(--text-lg)',
				'xl': 'var(--text-xl)',
				'2xl': 'var(--text-2xl)',
				'3xl': 'var(--text-3xl)',
			},
			extend: {
				// Color
				backgroundColor: {
					300: '#ffffff',
					500: '#f8fafc',
					700: '#f1f5f9',
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
				},

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
			}
		}
	}
)
