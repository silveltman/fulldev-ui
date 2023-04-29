<script lang="ts">
	import type { SlotChecklistContent } from '$lib/types';
	import { IconCircleCheck } from '@tabler/icons-svelte';
	import Button from 'base/Button.svelte';
	export let center: boolean = true;

	export let content: SlotChecklistContent;
</script>

<ul
	class="slot-checklist grid w-full grid-cols-[repeat(auto-fit,minmax(332px,1fr))] gap-x-2xl gap-y-2xl"
	class:justify-center={center}
>
	{#each content as item}
		<li class="relative max-w-lg pl-8 text-left">
			<IconCircleCheck class="text-accent-500 absolute top-0.5 left-0" />
			<h5 class="inline">{item.heading}</h5>
			<p class="inline">{item.textarea}</p>
			{#if item.button}
				<Button
					class="btn-link mt-md"
					content={item.button}
				/>
			{/if}
		</li>
	{/each}
</ul>
