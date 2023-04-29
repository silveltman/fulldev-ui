<script lang="ts">
	import type { SlotCardContent } from '$lib/types';
	import Card from 'base/Card.svelte';

	export let content: SlotCardContent;

	export let size: 'sm' | 'md' | 'lg' = 'lg';
</script>

<div
	class="scrollbar-block carousel relative flex items-center gap-md pb-lg !scrollbar scrollbar-track-base-300 scrollbar-thumb-content-100"
>
	{#each content as item}
		<Card
			content={item}
			class="carousel-item
			{size === 'sm' && 'w-48'}
			{size === 'md' && 'w-64'}
			{size === 'lg' && 'w-80'}
			"
		/>
	{/each}
</div>

<style lang="postcss">
	.scrollbar-block::-webkit-scrollbar {
		display: block !important;
	}
</style>
