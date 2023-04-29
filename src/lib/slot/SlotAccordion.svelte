<script lang="ts">
	import type { SlotAccordionContent } from '$lib/types';
	import Disclosure from 'base/Disclosure.svelte';

	export let content: SlotAccordionContent;
</script>

<div class="c-accordion flex w-full max-w-md flex-col divide-y divide-300">
	{#each content as item}
		<Disclosure content={item} />
	{/each}
</div>
