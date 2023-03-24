/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		fontFamily: {
			heading: ['Roboto', 'sans-serif'],
			body: ['Roboto', 'sans-serif']
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
		extend: {
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
				button: '12px',
				box: '24px',
				input: '12px',
				image: '4px'
			}
		}
	},
	corePlugins: {
		aspectRatio: false,
		container: false
	},
	plugins: [
		require('tailwind-scrollbar'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms')
	]
}
