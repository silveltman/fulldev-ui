<script lang="ts">
	import type { SlotCardsContent } from '$lib/types';
	import Card from 'base/Card.svelte';

	export let content: SlotCardsContent;

	export let size: 'sm' | 'md' | 'lg' = 'lg';
</script>

<div
	class="w-full gap-x-md space-y-xl md:gap-x-lg md:space-y-2xl
		{size === 'sm' && 'columns-2 sm:columns-3 lg:columns-6'}
		{size === 'md' && 'columns-2 sm:columns-2 lg:columns-4'}
		{size === 'lg' && 'columns-1 sm:columns-2 lg:columns-3'}
		"
>
	{#each content as item}
		<Card
			class="break-inside-avoid-column"
			content={item}
		/>
	{/each}
</div>
