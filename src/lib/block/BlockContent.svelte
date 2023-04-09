<script lang="ts">
	import type { BlockType } from './BlockContent'
	import { blockDefaults } from './BlockContent'
	import Section from 'layout/Section.svelte'
	import Image from 'base/Image.svelte'
	import Prose from '$lib/slot/Prose.svelte'

	// Section props
	let className: string = ''
	export { className as class }
	export let box: boolean = false
	export let split: boolean = false
	export let center: boolean = false
	export let reverse: boolean = false

	// Component props
	export let block: BlockType = blockDefaults
	export let size: 'lg' | 'md' | 'sm' = 'md'
</script>

<Section
	{box}
	{split}
	{center}
	{reverse}
	class={className}
	{...$$restProps}
>
	<slot name="prose">
		<Prose
			{size}
			{block}
		/>
	</slot>

	<slot name="image">
		{#if block.image}
			<Image
				sizes={{ base: '100vw', lg: '50vw', '2xl': '703px' }}
				{...block.image}
			/>
		{/if}
	</slot>
</Section>
