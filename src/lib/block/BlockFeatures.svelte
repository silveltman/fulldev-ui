<script lang="ts">
	import type { FeaturesContent, Layout } from '$lib/types'
	import Section from 'layout/LayoutBlock.svelte'
	import SlotHighlight from 'slot/SlotHighlight.svelte'
	import SlotChecklist from 'slot/SlotChecklist.svelte'
	import SlotMedia from 'slot/SlotMedia.svelte'

	let className: string = ''
	export { className as class }
	export let layout: Layout = {}
	export let content: FeaturesContent = {}
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

	<slot name="checklist">
		{#if content.checklist}
			<SlotChecklist content={content.checklist} />
		{/if}
	</slot>

	<slot name="image">
		{#if content.media}
			<SlotMedia content={content.media} />
		{/if}
	</slot>
</Section>
