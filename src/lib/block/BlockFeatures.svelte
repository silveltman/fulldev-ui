<script lang="ts">
	import type { Features } from '$lib/types'
	import Section from 'layout/Section.svelte'
	import Image from 'base/Image.svelte'
	import SlotProse from '$lib/slot/SlotProse.svelte'
	import SlotChecklist from 'slot/SlotChecklist.svelte'

	// Section props
	let className: string = ''
	export { className as class }
	export let box: boolean = false
	export let split: boolean = false
	export let center: boolean = false
	export let reverse: boolean = false

	// Component props
	export let block: Features
	//
</script>

<Section
	{box}
	{split}
	{center}
	{reverse}
	class={className}
	{...$$restProps}
>
	<!-- <div class="flex w-full flex-col gap-2xl"> -->
	<slot name="prose">
		<SlotProse
			size="md"
			{block}
		/>
	</slot>
	<slot name="checklist">
		<SlotChecklist {block} />
	</slot>
	<!-- </div> -->

	<slot name="image">
		{#if block.image}
			<Image
				sizes={{ base: '100vw', lg: '50vw', '2xl': '703px' }}
				{...block.image}
			/>
		{/if}
	</slot>
</Section>
