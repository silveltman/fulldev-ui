<script lang="ts">
	import type { Hst, FooterContent, ImageContent } from '$lib/types'
	import TheFooter from './TheFooter.svelte'

	export let Hst: Hst

	// export let image: ImageContent = {
	// 	src: 'https://placehold.it/200x50',
	// 	alt: 'Logo'
	// }

	let block: FooterContent = {
		logo: {
			light: {
				src: 'https://placehold.it/200x50',
				alt: 'Logo'
			}
		},
		text: '© 2021 Company, Inc. All rights reserved.',
		links: [
			{
				text: 'Privacy',
				href: '#'
			},
			{
				text: 'Terms',
				href: '#'
			}
		]
	}
</script>

<Hst.Story>
	<svelte:fragment slot="controls">
		<Hst.Json
			title="Content"
			bind:value={block}
		/>
	</svelte:fragment>

	<TheFooter {block} />
</Hst.Story>
