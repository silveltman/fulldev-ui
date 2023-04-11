<script lang="ts">
	import type { AccordionContent } from '$lib/types'
	import Disclosure from 'base/Disclosure.svelte'

	export let content: AccordionContent = []
</script>

<div class="slot-accordion flex w-full max-w-md flex-col divide-y divide-neutral-200">
	{#each content as item}
		<Disclosure {...item} />
	{/each}
</div>
