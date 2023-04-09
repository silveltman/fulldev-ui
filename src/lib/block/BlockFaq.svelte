<script lang="ts">
	import type { Faq } from '$lib/types'
	import Section from 'layout/Section.svelte'
	import Prose from '$lib/slot/SlotProse.svelte'
	import Accordion from 'slot/SlotAccordion.svelte'

	// Section props
	let className: string = ''
	export { className as class }
	export let box: boolean = false
	export let split: boolean = false
	export let center: boolean = false
	export let reverse: boolean = false

	// Component props
	export let block: Faq
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
	<slot name="prose">
		<Prose {block} />
	</slot>

	<slot name="image">
		{#if block.accordion}
			<Accordion {block} />
		{/if}
	</slot>
</Section>
