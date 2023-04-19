<script lang="ts">
	import type { CtaContent, Layout } from '$lib/types'
	import Section from 'layout/LayoutBlock.svelte'
	import SlotHighlight from 'slot/SlotHighlight.svelte'
	import SlotMedia from 'slot/SlotMedia.svelte'

	let className: string = ''
	export { className as class }
	export let layout: Layout = {}
	export let content: CtaContent = {}

	export let size: 'sm' | 'md' | 'lg' = 'md'
	export let heading: 'h1' | 'h2' | 'h3' = 'h2'
</script>

<Section
	{layout}
	class="block-cta {className}"
	{...$$restProps}
>
	<slot />
	<slot name="highlight">
		{#if content.highlight}
			<SlotHighlight
				content={content.highlight}
				{size}
				{heading}
			/>
		{/if}
	</slot>

	<slot name="media">
		{#if content.media}
			<SlotMedia content={content.media} />
		{/if}
	</slot>
</Section>
