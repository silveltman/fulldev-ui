<script lang="ts">
	import type { Accordion } from '$lib/types'
	import Disclosure from 'base/Disclosure.svelte'
	export let block: Accordion
	//
</script>

<div class="slot-accordion flex w-full max-w-md flex-col divide-y divide-neutral-200">
	{#each block.accordion as item}
		<Disclosure {...item} />
	{/each}
</div>
