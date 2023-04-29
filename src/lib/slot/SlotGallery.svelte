<script lang="ts">
	import type { SlotGalleryContent } from '$lib/types';
	import { IconChevronLeft, IconChevronRight } from '@tabler/icons-svelte';
	import Image from '$lib/base/Image.svelte';
	export let content: SlotGalleryContent;
</script>

<div class="relative flex flex-col gap-xs ">
	<div class="carousel scroll-auto">
		{#each content as item, i}
			<div
				class="group carousel-item relative w-full items-center"
				id="image{i}"
			>
				<a
					class="btn-outline btn-sm btn-square btn absolute left-0 hidden opacity-50 group-hover:opacity-100 sm:flex"
					href="#image{i - 1 < 0 ? content.length - 1 : i - 1}"
				>
					<IconChevronLeft />
				</a>
				<Image
					content={item}
					class="h-full w-full object-contain"
				/>
				<a
					class="btn-outline btn-sm btn-square btn absolute right-0 hidden opacity-50 group-hover:opacity-100 sm:flex"
					href="#image{i + 1 > content.length - 1 ? 0 : i + 1}"
				>
					<IconChevronRight />
				</a>
			</div>
		{/each}
	</div>
	<div
		class="scrollbar-block carousel relative flex items-center gap-4 pb-xs !scrollbar-thin scrollbar-thumb-neutral"
	>
		{#each content as item, i}
			<a
				class="carousel-item basis-24"
				href="#image{i}"
			>
				<Image content={item} />
			</a>
		{/each}
	</div>
</div>
<div class="text-[4rem]">Hello</div>

<style lang="postcss">
	:global(.scrollbar-block::-webkit-scrollbar) {
		display: block !important;
	}
</style>
