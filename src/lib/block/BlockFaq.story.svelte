<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import type { Faq } from '$lib/types'
	import BlockFaq from 'block/BlockFaq.svelte'
	export let Hst: Hst

	// Styling props
	let box: boolean = false
	let split: boolean = false
	let center: boolean = false
	let reverse: boolean = false

	// Content props
	let block: Faq = {
		eyebrow: 'lorem ipsum',
		heading: 'Lorem ipsum dolor',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		accordion: [
			{
				heading: 'Lorem ipsum dolor sit amet',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
			},
			{
				heading: 'Lorem ipsum dolor sit amet',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
			},
			{
				heading: 'Lorem ipsum dolor sit amet',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
			}
		]
	}
</script>

<Hst.Story>
	<svelte:fragment slot="controls">
		<Hst.Checkbox
			title="box"
			bind:value={box}
		/>
		<Hst.Checkbox
			title="split"
			bind:value={split}
		/>
		<Hst.Checkbox
			title="center"
			bind:value={center}
		/>
		<Hst.Checkbox
			title="reverse"
			bind:value={reverse}
		/>
		<Hst.Json
			title="Block"
			bind:value={block}
		/>
	</svelte:fragment>

	<BlockFaq
		{box}
		{split}
		{center}
		{reverse}
		{block}
	/>
</Hst.Story>
