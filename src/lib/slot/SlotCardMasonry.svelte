<script lang="ts">
	import type { SlotCardContent } from '$lib/types';
	import Card from 'base/Card.svelte';
	import Masonry from 'layout/Masonry.svelte';

	export let content: SlotCardContent;

	export let size: 'sm' | 'md' | 'lg' = 'lg';

	export let cardProps: any;
</script>

<Masonry {size}>
	{#each content as item}
		<Card
			{size}
			content={item}
			{...cardProps}
		/>
	{/each}
</Masonry>
