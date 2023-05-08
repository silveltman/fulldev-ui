<script lang="ts">
	import type { AccordionContent } from '$lib/types';
	import Collapse from 'base/Collapse.svelte';

	export let content: AccordionContent;
</script>

<div class="accordion-group">
	{#each content as item}
		<Collapse content={item} />
	{/each}
</div>
