/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')

module.exports = plugin(
	function ({ addBase, addVariant, addComponents, theme }) {
		addBase({
			':root': {
				'--text-xs': '12px',
				'--text-sm': '14px',
				'--text-base': '16px',
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
					'--text-base': '18px',
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
				fontFamily: theme('fontFamily.base'),
				lineHeight: theme('lineHeight.base'),
				color: theme('colors.base.12'),
				backgroundColor: theme('colors.base.1'),
			},
			body: {
				fontSize: theme('fontSize.base'),
			},
			'h1, h2, h3': {
				fontFamily: theme('fontFamily.heading'),
				fontWeight: theme('fontWeight.heading'),
				lineHeight: theme('lineHeight.heading'),
			},
			'h4, h5, h6': {
				fontFamily: theme('fontFamily.subheading'),
				fontWeight: theme('fontWeight.subheading'),
				lineHeight: theme('lineHeight.subheading'),
			},
			h1: {
				fontSize: theme('fontSize.3xl'),
			},
			h2: {
				fontSize: theme('fontSize.2xl'),
			},
			h3: {
				fontSize: theme('fontSize.xl'),
			},
			h4: {
				fontSize: theme('fontSize.lg'),
			},
			h5: {
				fontSize: theme('fontSize.md'),
			},
			h6: {
				fontSize: theme('fontSize.sm'),
			},
			img: {
				borderRadius: theme('borderRadius.image'),
				width: '100%',
				height: 'auto',
			}
		})

		// Add selectors for components, like button:my-property.
		const components = ['button', 'textfield', 'card']
		components.forEach(component => {
			addVariant(component, `& .${component}`)
		})

		// Add variants for sizes. Use size-x to enable and size-x:my-property to style.
		const variants = ['size-sm', 'size-md', 'size-lg']
		variants.forEach(item => {
			addVariant(`${item}`, [
				`&.${item}`,
				`.${item} &`,
			])
		})

		addComponents({
			'.solid': {
				backgroundColor: theme('colors.base.9'),
				color: 'white',
				'&:hover': {
					backgroundColor: theme('colors.base.10'),
				},
			},
			'.soft': {
				backgroundColor: theme('colors.base.3'),
				color: theme('colors.base.11'),
				'&:hover': {
					backgroundColor: theme('colors.base.4'),
				},
				'&:active, &:focus': {
					backgroundColor: theme('colors.base.5'),
				},
			},
			'.ringed': {
				borderWidth: '2px',
				borderColor: theme('colors.base.7'),
				backgroundColor: 'transparent',
				color: theme('colors.base.11'),
				'&:hover, &:active, &:focus': {
					borderColor: theme('colors.base.8'),
				},
			},
			'.ghost': {
				backgroundColor: 'transparent',
				color: theme('colors.base.11'),
				'&:hover': {
					backgroundColor: theme('colors.base.4'),
				},
				'&:active, &:focus': {
					backgroundColor: theme('colors.base.5'),
				},
			},
		})
	},
	{
		theme: {
			fontSize: {
				'xs': 'var(--text-xs)',
				'sm': 'var(--text-sm)',
				'base': 'var(--text-base)',
				'lg': 'var(--text-lg)',
				'xl': 'var(--text-xl)',
				'2xl': 'var(--text-2xl)',
				'3xl': 'var(--text-3xl)',
			},
			extend: {
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
		},
		corePlugins: {
			aspectRatio: false,
			container: false,
		},
	},
)
