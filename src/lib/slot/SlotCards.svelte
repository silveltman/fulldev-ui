<script lang="ts">
	import type { SlotCardsContent } from '$lib/types'
	import Card from 'base/Card.svelte'

	export let content: SlotCardsContent
	//
</script>

<div class="slot-accordion flex w-full max-w-md flex-col divide-y divide-neutral-200">
	{#each content as item}
		<Card content={item} />
	{/each}
</div>
