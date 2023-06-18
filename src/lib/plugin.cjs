const fs = require('fs');
const postcss = require('postcss');
const postcssJs = require('postcss-js');
const plugin = require('tailwindcss/plugin');
const path = require('path');

const componentsPath = path.resolve(__dirname, 'main.css');

module.exports = plugin(
	function ({ addBase, addVariant, addUtilities, addComponents, theme }) {
		const componentsContent = fs.readFileSync(componentsPath, 'utf8');
		const componentsCss = postcss.parse(componentsContent);
		const componentsObject = postcssJs.objectify(componentsCss);
		addComponents(componentsObject);

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
				backgroundColor: theme('colors.base.1'),
				scrollBehavior: 'smooth',
				width: '100%',
				height: '100%',
				'@apply medium': {}
			},
			'body, p': {
				fontSize: theme('fontSize.md'),
				color: theme('colors.base.12')
			},
			'h1, h2, h3': {
				fontFamily: theme('fontFamily.heading'),
				fontWeight: theme('fontWeight.heading'),
				lineHeight: theme('lineHeight.heading')
			},
			'h4, h5, h6': {
				fontFamily: theme('fontFamily.subheading'),
				fontWeight: theme('fontWeight.subheading'),
				lineHeight: theme('lineHeight.subheading')
			}
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
					'2xl': 'calc(8rem * var(--space-multiplier, 1) * var(--space-media, 1))',
					'3xl': 'calc(16rem * var(--space-multiplier, 1) * var(--space-media, 1))'
				}
			}
		},
		corePlugins: {
			aspectRatio: false,
			container: false
		}
	}
);
