<script lang="ts">
	import type { SlotCardContent } from '$lib/types';
	import Card from 'base/Card.svelte';
	import Split from 'layout/Split.svelte';

	export let content: SlotCardContent;

	export let size: 'sm' | 'md' | 'lg' = 'lg';

	export let cardProps: any = {};
</script>

<Split class="md:auto-cols-fr md:grid-flow-col ">
	{#each content as item}
		<Card
			{size}
			content={item}
			{...cardProps}
		/>
	{/each}
</Split>
