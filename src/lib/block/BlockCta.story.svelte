<script lang="ts">
	import type { Layout, CtaContent, Hst } from '$lib/types'
	import BlockCta from './BlockCta.svelte'
	import BlockControls from '../../histoire/BlockControls.svelte'

	export let Hst: Hst

	let layout: Layout = {}
	let content: CtaContent = {
		highlight: {
			eyebrow: 'lorem ipsum',
			heading: 'Lorem ipsum dolor',
			textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			button_primary: {
				text: 'Lorem ipsum',
				href: '#'
			},
			button_secondary: {
				text: 'Lorem ipsum',
				href: '#'
			}
		},
		media: {
			src: 'https://picsum.photos/1600/900',
			alt: 'Lorem ipsum'
		}
	}
</script>

<Hst.Story>
	<!-- <BlockControls
		slot="controls"
		bind:layout
	/> -->

	<BlockCta
		{layout}
		{content}
	/>
</Hst.Story>
