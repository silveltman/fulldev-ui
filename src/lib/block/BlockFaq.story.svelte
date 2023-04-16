<script lang="ts">
	import type { Layout, FaqContent, Hst } from '$lib/types'
	import BlockFaq from 'block/BlockFaq.svelte'
	import LayoutControls from '../../histoire/LayoutControls.svelte'

	export let Hst: Hst

	let layout: Layout = {}
	let content: FaqContent = {
		highlight: {
			eyebrow: 'lorem ipsum',
			heading: 'Lorem ipsum dolor',
			textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		accordion: [
			{
				heading: 'Lorem ipsum dolor sit amet 1',
				textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
			},
			{
				heading: 'Lorem ipsum dolor sit amet 2',
				textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
			},
			{
				heading: 'Lorem ipsum dolor sit amet 3',
				textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
			}
		]
	}
</script>

<Hst.Story>
	<LayoutControls
		slot="controls"
		bind:layout
	/>

	<BlockFaq
		{layout}
		{content}
	/>
</Hst.Story>
