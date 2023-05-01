<script lang="ts">
	import type { SlotCardContent } from '$lib/types';
	import Card from 'base/Card.svelte';
	import Grid from 'layout/Grid.svelte';

	export let content: SlotCardContent;

	export let size: 'sm' | 'md' | 'lg' = 'lg';
</script>

<Grid {size}>
	{#each content as item}
		<Card
			{size}
			content={item}
		/>
	{/each}
</Grid>
