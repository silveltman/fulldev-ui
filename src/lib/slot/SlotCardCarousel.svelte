<script lang="ts">
	import type { SlotCardContent } from '$lib/types';
	import Card from 'base/Card.svelte';
	import Carousel from 'layout/Carousel.svelte';

	export let content: SlotCardContent;

	export let size: 'sm' | 'md' | 'lg' = 'lg';
</script>

<Carousel>
	{#each content as item}
		<Card
			{size}
			content={item}
			class="carousel-item"
		/>
	{/each}
</Carousel>
