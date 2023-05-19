import { defineConfig } from 'histoire';
import { HstSvelte } from '@histoire/plugin-svelte';

export default defineConfig({
	setupFile: '/src/histoire-setup.js',
	plugins: [
		{
			name: 'builtin:tailwind-tokens'
		},
		HstSvelte()
	],
	storyMatch: ['**/stories/*.story.svelte']
});
