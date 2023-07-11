// uno.config.ts
import { defineConfig, presetWebFonts } from 'unocss';
import { presetShortcuts, presetResponsive } from './src/lib/uno';
import { presetRadix } from 'unocss-preset-radix';

export default defineConfig({
	theme: {
		lineHeight: {
			base: 1.625,
			heading: 1.25
		},
		fontWeight: {
			base: 400,
			heading: 600,
			button: 600
		},
		borderRadius: {
			panel: '16px',
			box: '8px',
			image: '8px',
			button: '4px',
			input: '4px'
		}
	},
	presets: [
		presetResponsive(),
		presetShortcuts(),
		//@ts-ignore
		presetWebFonts({
			fonts: {
				heading: {
					name: 'Inter',
					weights: [600],
					italic: false
				},
				text: {
					name: 'Inter',
					weights: [400],
					italic: false
				}
			}
		}),
		//@ts-ignore
		presetRadix({
			lightSelector: '.light',
			darkSelector: '.dark',
			palette: ['slate', 'tomato'],
			aliases: {
				base: 'slate',
				primary: 'tomato'
			}
		})
	]
});
