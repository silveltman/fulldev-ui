<script lang="ts">
	import type { SlotCardsContent } from '$lib/types';
	import Card from 'base/Card.svelte';

	export let content: SlotCardsContent;

	export let size: 'sm' | 'md' | 'lg' = 'lg';
</script>

<div
	class="grid w-full gap-x-md gap-y-xl md:gap-y-2xl md:gap-x-lg
		{size === 'sm' && 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6'}
		{size === 'md' && 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-4'}
		{size === 'lg' && 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}
		"
>
	{#each content as item}
		<Card content={item} />
	{/each}
</div>
