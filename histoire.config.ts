import { defineConfig } from 'histoire'
import { HstSvelte } from '@histoire/plugin-svelte'

export default defineConfig({
    setupFile: '/src/histoire/histoire-setup.js',
    tree: {
        file: 'path',
    },
    plugins: [
        HstSvelte(),
    ],
})