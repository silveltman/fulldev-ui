/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin');

module.exports = plugin(
	function ({ addBase, addVariant, addComponents, addUtilities, theme }) {
		addBase({
			':root': {
				'--space-media': '0.75',

				'@screen sm': {
					'--space-media': '1'
				}
			},
			'body,html': {
				fontFamily: theme('fontFamily.base'),
				lineHeight: theme('lineHeight.base'),
				color: theme('colors.base.12'),
				backgroundColor: theme('colors.base.1')
			},
			'body, p': {
				fontSize: theme('fontSize.md')
			},
			'h1, h2, h3': {
				fontFamily: theme('fontFamily.heading'),
				fontWeight: theme('fontWeight.heading'),
				lineHeight: theme('lineHeight.heading'),
				fontSize: theme('fontSize.lg')
			},
			'h4, h5, h6': {
				fontFamily: theme('fontFamily.subheading'),
				fontWeight: theme('fontWeight.subheading'),
				lineHeight: theme('lineHeight.subheading'),
				fontSize: theme('fontSize.md')
			},
			img: {
				borderRadius: theme('borderRadius.image'),
				width: '100%',
				height: 'auto'
			}
		});

		// Add selectors for components, like button:my-property.
		const components = ['button', 'textfield', 'card'];
		components.forEach((component) => {
			addVariant(component, `& .${component}`);
		});

		addVariant('small', [`&.small`, `.small &`]);
		addVariant('medium', [`&.medium`, `.medium &`]);
		addVariant('large', [`&.large`, `.large &`]);
		addUtilities({
			'.small': {
				'--space-multiplier': '0.5',
				'--text-sm': '12px',
				'--text-md': '14px',
				'--text-lg': '24px',
				'@screen sm': {
					'--text-sm': '14px',
					'--text-md': '16px',
					'--text-lg': '26px'
				}
			},
			'.medium': {
				'--space-multiplier': '1',
				'--text-sm': '14px',
				'--text-md': '16px',
				'--text-lg': '30px',

				'@screen sm': {
					'--text-sm': '16px',
					'--text-md': '18px',
					'--text-lg': '36px'
				}
			},
			'.large': {
				'--space-multiplier': '1.5',
				'--text-sm': '16px',
				'--text-md': '18px',
				'--text-lg': '36px',

				'@screen sm': {
					'--text-sm': '18px',
					'--text-md': '20px',
					'--text-lg': '60px'
				}
			}
		});

		addComponents({
			'.solid': {
				backgroundColor: theme('colors.base.9'),
				color: 'white',
				'&:hover': {
					backgroundColor: theme('colors.base.10')
				}
			},
			'.soft': {
				backgroundColor: theme('colors.base.3'),
				color: theme('colors.base.11'),
				'&:hover': {
					backgroundColor: theme('colors.base.4')
				},
				'&:active': {
					backgroundColor: theme('colors.base.5')
				}
			},
			'.ringed': {
				borderWidth: '2px',
				borderColor: theme('colors.base.7'),
				backgroundColor: 'transparent',
				color: theme('colors.base.11'),
				'&:hover, &:active, &:focus': {
					borderColor: theme('colors.base.8')
				}
			},
			'.ghost': {
				backgroundColor: 'transparent',
				color: theme('colors.base.11'),
				'&:hover': {
					backgroundColor: theme('colors.base.4')
				},
				'&:active': {
					backgroundColor: theme('colors.base.5')
				}
			},
			'.scrollbar': {
				scrollbarColor: theme('colors.base.3'),
				scrollbarWidth: 'auto',
				'&::-webkit-scrollbar': {},
				'&::-webkit-scrollbar-track': {
					background: theme('colors.base.3')
				},
				'&::-webkit-scrollbar-thumb': {
					backgroundColor: theme('colors.base.7'),
					borderRadius: theme('borderRadius.card'),
					'&:hover': {
						backgroundColor: theme('colors.blue.8')
					}
				}
			}
		});
	},
	{
		theme: {
			fontSize: {
				sm: 'var(--text-sm)',
				md: 'var(--text-md)',
				lg: 'var(--text-lg)'
			},
			extend: {
				spacing: {
					xs: 'calc(0.25rem * var(--space-multiplier, 1) * var(--space-media, 1))',
					sm: 'calc(0.5rem * var(--space-multiplier, 1) * var(--space-media, 1))',
					md: 'calc(1rem * var(--space-multiplier, 1) * var(--space-media, 1))',
					lg: 'calc(2rem * var(--space-multiplier, 1) * var(--space-media, 1))',
					xl: 'calc(4rem * var(--space-multiplier, 1) * var(--space-media, 1))',
					'2xl': 'calc(8rem * var(--space-multiplier, 1) * var(--space-media, 1))'
				}
			}
		},
		corePlugins: {
			aspectRatio: false,
			container: false
		}
	}
);
