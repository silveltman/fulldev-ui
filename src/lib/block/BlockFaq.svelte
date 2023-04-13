<script lang="ts">
	import type { FaqContent, Layout } from '$lib/types'
	import Section from 'layout/Section.svelte'
	import SlotHighlight from 'slot/SlotHighlight.svelte'
	import SlotAccordion from 'slot/SlotAccordion.svelte'

	let className: string = ''
	export { className as class }
	export let layout: Layout = {}
	export let content: FaqContent = {}
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

	<slot name="accordion">
		{#if content.accordion}
			<SlotAccordion content={content.accordion} />
		{/if}
	</slot>
</Section>
