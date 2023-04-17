<script lang="ts">
	import type { BlockCardsContent, Layout } from '$lib/types'
	import Section from 'layout/LayoutBlock.svelte'
	import SlotHighlight from 'slot/SlotHighlight.svelte'
	import SlotCards from 'slot/SlotCards.svelte'

	let className: string = ''
	export { className as class }
	export let layout: Layout = {}
	export let content: BlockCardsContent = {}
</script>

<Section
	{layout}
	class={className}
	{...$$restProps}
>
	<slot name="highlight">
		{#if content.highlight}
			<SlotHighlight content={content.highlight} />
		{/if}
	</slot>

	<slot name="cards">
		{#if content.cards}
			<SlotCards content={content.cards} />
		{/if}
	</slot>
</Section>
