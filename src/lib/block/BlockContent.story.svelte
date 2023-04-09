<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import type { Content } from '$lib/types'
	import BlockContent from './BlockContent.svelte'
	export let Hst: Hst

	// Section props
	let box: boolean = false
	let split: boolean = false
	let center: boolean = false
	let reverse: boolean = false

	// Component props
	let size: 'lg' | 'md' | 'sm' = 'md'
	let block: Content = {
		eyebrow: 'lorem ipsum',
		heading: 'Lorem ipsum dolor',
		html: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		button_primary: {
			text: 'Lorem ipsum',
			href: '#'
		},
		button_secondary: {
			text: 'Lorem ipsum',
			href: '#'
		},
		image: {
			src: '/placeholder.jpg',
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
		<Hst.Select
			title="size"
			bind:value={size}
			options={['lg', 'md', 'sm']}
		/>
		<Hst.Json
			title="Block"
			bind:value={block}
		/>
	</svelte:fragment>

	<BlockContent
		{box}
		{split}
		{center}
		{reverse}
		{size}
		{block}
	/>
</Hst.Story>
