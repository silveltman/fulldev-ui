<script lang="ts">
	import type { Layout, FeaturesContent, Hst } from '$lib/types'
	import LayoutControls from '../../histoire/LayoutControls.svelte'
	import BlockFeatures from './BlockFeatures.svelte'

	export let Hst: Hst

	let layout: Layout = {}
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
	<LayoutControls
		slot="controls"
		bind:layout
	/>

	<BlockFeatures
		{layout}
		{content}
	/>
</Hst.Story>
