<script lang="ts">
	import type { SlotCardsContent } from '$lib/types'
	import Card from 'base/Card.svelte'

	export let content: SlotCardsContent

	export let size: 'sm' | 'md' | 'lg' = 'sm'

	let itemCount = content.length

	function getSize() {
		if (itemCount <= 3) {
			return 'lg'
		} else if (itemCount === 4) {
			return 'md'
		} else {
			return size
		}
	}
</script>

<!-- <div class="slot-accordion grid w-full grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-2xl"> -->
<div
	class=" grid w-full gap-2xl 

{getSize() === 'sm' && 'lg:grid-cols-5'}
{getSize() === 'md' && 'lg:grid-cols-4'}
{getSize() === 'lg' && 'sm:grid-cols-2 lg:grid-cols-3'}
"
>
	{#each content as item}
		<Card content={item} />
	{/each}
</div>
