<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import type { Layout } from '$lib/types'
	import type { FeaturesContent } from '$lib/types'
	import BlockFeatures from './BlockFeatures.svelte'
	export let Hst: Hst

	// Section props
	let layout: Layout = {}

	// Component props
	let content: FeaturesContent = {
		highlight: {
			eyebrow: 'lorem ipsum',
			heading: 'Lorem ipsum dolor',
			textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		checklist: [
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
		],
		media: {
			src: 'https://picsum.photos/1600/900',
			alt: 'Lorem ipsum'
		}
	}
</script>

<Hst.Story>
	<svelte:fragment slot="controls">
		<Hst.Checkbox
			title="Box"
			bind:value={layout.box}
		/>
		<Hst.Checkbox
			title="Split"
			bind:value={layout.split}
		/>
		<Hst.Checkbox
			title="Center"
			bind:value={layout.center}
		/>
		<Hst.Checkbox
			title="Reverse"
			bind:value={layout.reverse}
		/>
	</svelte:fragment>

	<BlockFeatures
		{layout}
		{content}
	/>
</Hst.Story>
