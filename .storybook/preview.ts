import type { Preview } from '@storybook/svelte';
import '../src/app.css';

const preview: Preview = {
	parameters: {
		// layout: 'centered',
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/
			},
			exclude: ['class', 'id']
		},
		themes: {
			default: 'dark',
			list: [
				{ name: 'light', class: ['light', 'medium'], color: 'white' },
				{ name: 'dark', class: ['dark', 'medium'], color: 'black' },
				{ name: 'small', class: ['light', 'small'], color: 'white' },
				{ name: 'medium', class: ['light', 'medium'], color: 'white' },
				{ name: 'large', class: ['light', 'large'], color: 'white' }
			]
		}
	}
};

export default preview;
