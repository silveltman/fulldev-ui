<script lang="ts">
	import type { RichtextContent, Layout } from '$lib/types';
	import Section from 'layout/LayoutBlock.svelte';
	import SlotHighlight from 'slot/SlotHighlight.svelte';
	import SlotMedia from 'slot/SlotMedia.svelte';
	import SlotRichtext from 'slot/SlotRichtext.svelte';

	let className: string = '';
	export { className as class };
	export let layout: Layout = {};
	export let content: RichtextContent = {};

	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let heading: 'h1' | 'h2' | 'h3' = 'h2';
</script>

<Section
	{layout}
	class="block-richtext {className}"
	{...$$restProps}
>
	<slot name="highlight">
		{#if content.highlight}
			<SlotHighlight
				content={content.highlight}
				{size}
				{heading}
			/>
		{/if}
	</slot>

	<slot name="richtext">
		{#if content.richtext}
			<SlotRichtext content={content.richtext} />
		{/if}
	</slot>

	<slot name="media">
		{#if content.media}
			<SlotMedia content={content.media} />
		{/if}
	</slot>
</Section>
