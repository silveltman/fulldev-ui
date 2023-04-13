<script lang="ts">
	import type { CtaContent, Layout } from '$lib/types'
	import Section from 'layout/Section.svelte'
	import SlotHighlight from 'slot/SlotHighlight.svelte'
	import SlotMedia from 'slot/SlotMedia.svelte'

	let className: string = ''
	export { className as class }
	export let layout: Layout = {}
	export let content: CtaContent = {}
</script>

<Section
	{layout}
	class="block-cta {className}"
	{...$$restProps}
>
	<slot name="highlight">
		{#if content.highlight}
			<SlotHighlight content={content.highlight} />
		{/if}
	</slot>

	<slot name="media">
		{#if content.media}
			<SlotMedia content={content.media} />
		{/if}
	</slot>
</Section>
