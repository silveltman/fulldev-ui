<script lang="ts">
	import type { SlotCardsContent } from '$lib/types';
	import Grid from 'layout/Grid.svelte';
	import Card from 'base/Card.svelte';

	export let content: SlotCardsContent;

	export let size: 'sm' | 'md' | 'lg' = 'lg';
</script>

<Grid {size}>
	{#each content as item}
		<Card content={item} />
	{/each}
</Grid>
