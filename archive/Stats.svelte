<script lang="ts">
	import type { StatsContent } from '$lib/types';

	export let content: StatsContent;
</script>

<dl class="grid w-full grid-cols-[repeat(auto-fit,minmax(128px,1fr))] gap-x-2xl gap-y-2xl">
	{#each content as item}
		<div class="items flex flex-col">
			<dt class="">{item.label}</dt>
			<dd class="text-front-100 text-mdxl order-first font-heading tracking-tight">
				{item.value}
			</dd>
		</div>
	{/each}
</dl>
