<script lang="ts">
	import type { SlotStatsContent } from '$lib/types';

	export let content: SlotStatsContent;
</script>

<dl class="grid w-full grid-cols-[repeat(auto-fit,minmax(128px,1fr))] gap-x-2xl gap-y-2xl">
	{#each content as item}
		<div class="items flex flex-col">
			<dt class="">{item.label}</dt>
			<dd class="order-first text-2xl font-semibold tracking-tight text-700">
				{item.value}
			</dd>
		</div>
	{/each}
</dl>
