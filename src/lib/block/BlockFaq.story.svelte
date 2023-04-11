<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import type { Layout, FaqContent } from '$lib/types'
	import BlockFaq from 'block/BlockFaq.svelte'

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
				heading: 'Lorem ipsum dolor sit amet',
				textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
			},
			{
				heading: 'Lorem ipsum dolor sit amet',
				textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
			},
			{
				heading: 'Lorem ipsum dolor sit amet',
				textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
			}
		]
	}
</script>

<Hst.Story>
	<svelte:fragment slot="controls">
		<Hst.Checkbox
			title="box"
			bind:value={layout.box}
		/>
		<Hst.Checkbox
			title="split"
			bind:value={layout.split}
		/>
		<Hst.Checkbox
			title="center"
			bind:value={layout.center}
		/>
		<Hst.Checkbox
			title="reverse"
			bind:value={layout.reverse}
		/>
	</svelte:fragment>

	<BlockFaq
		{layout}
		{content}
	/>
</Hst.Story>
