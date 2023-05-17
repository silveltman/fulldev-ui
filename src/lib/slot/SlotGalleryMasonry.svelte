<script lang="ts">
	import type { SlotGalleryContent } from '$lib/types';
	import Image from '$lib/base/Image.svelte';
	import { IconArrowNarrowDown } from '@tabler/icons-svelte';

	let className = '';
	export { className as class };
	export let content: SlotGalleryContent;
</script>

<div
	class="relative snap-x scroll-smooth max-lg:flex max-lg:overflow-x-scroll max-lg:bg-base-2 lg:columns-2 lg:gap-sm lg:space-y-sm {className}"
>
	{#each content as item}
		<Image
			class="h-auto w-full shrink-0 snap-start object-contain max-lg:rounded-[0px]"
			{...item}
		/>
	{/each}

	<div class="absolute right-xl bottom-xl z-10 -rotate-90 lg:hidden">
		<div class="animate-bounce rounded-[999px] bg-base-9/75 p-sm text-white">
			<IconArrowNarrowDown />
		</div>
	</div>
</div>
