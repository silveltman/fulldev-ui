import { defineConfig, presetUno } from 'unocss';
import { presetRadix } from 'unocss-preset-radix';

export default defineConfig({
	presets: [
		presetUno(),
		presetRadix({
			palette: ['blue', 'green', 'red'],
			aliases: {
				primary: 'green',
				base: 'slate'
			}
		})
	]
});
