<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import type { Features } from '$lib/types'
	import BlockFeatures from './BlockFeatures.svelte'
	export let Hst: Hst

	// Section props
	let box: boolean = false
	let split: boolean = false
	let center: boolean = false
	let reverse: boolean = false

	// Component props
	let block: Features = {
		eyebrow: 'lorem ipsum',
		heading: 'Lorem ipsum dolor',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		checklist: [
			{
				heading: 'Lorem ipsum dolor',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
			},
			{
				heading: 'Lorem ipsum dolor',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
			},
			{
				heading: 'Lorem ipsum dolor',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
			}
		],
		image: {
			src: 'https://picsum.photos/1600/900',
			alt: 'Lorem ipsum'
		}
	}
</script>

<Hst.Story>
	<svelte:fragment slot="controls">
		<Hst.Checkbox
			title="Box"
			bind:value={box}
		/>
		<Hst.Checkbox
			title="Split"
			bind:value={split}
		/>
		<Hst.Checkbox
			title="Center"
			bind:value={center}
		/>
		<Hst.Checkbox
			title="Reverse"
			bind:value={reverse}
		/>
		<Hst.Json
			title="Block"
			bind:value={block}
		/>
	</svelte:fragment>

	<BlockFeatures
		{box}
		{split}
		{center}
		{reverse}
		{block}
	/>
</Hst.Story>
