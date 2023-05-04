<script lang="ts">
	import type { SlotGalleryContent } from '$lib/types';
	import { IconChevronLeft, IconChevronRight } from '@tabler/icons-svelte';
	import Image from '$lib/base/Image.svelte';

	let className: string = '';
	export { className as class };
	export let content: SlotGalleryContent;
</script>

<div class="grid w-full auto-cols-fr grid-flow-col items-start gap-xs {className}">
	<div
		class="carousel-vertical relative hidden max-h-[70vw] gap-md overflow-x-hidden pr-xs !scrollbar-thin scrollbar-track-base-300 scrollbar-thumb-front-300 sm:carousel [&::-webkit-scrollbar]:block"
	>
		{#each content as item, i}
			<a
				class="carousel-item h-auto w-full"
				href="#image{i}"
			>
				<Image
					class="h-auto w-full"
					content={item}
				/>
			</a>
		{/each}
	</div>

	<div
		class="carousel col-span-7 gap-px scroll-auto bg-base-300 !scrollbar-thin scrollbar-track-base-300 scrollbar-thumb-front-300 [&::-webkit-scrollbar]:block"
	>
		{#each content as item, i}
			<div
				class="group carousel-item relative h-auto w-full items-center"
				id="image{i}"
			>
				<!-- <a
					class="btn-outline btn-square btn-sm btn absolute left-sm hidden opacity-50 group-hover:opacity-100 sm:flex"
					href="#image{i - 1 < 0 ? content.length - 1 : i - 1}"
				>
					<IconChevronLeft />
				</a> -->
				<Image content={item} />
				<!-- <a
					class="btn-outline btn-square btn-sm btn absolute right-sm hidden opacity-50 group-hover:opacity-100 sm:flex"
					href="#image{i + 1 > content.length - 1 ? 0 : i + 1}"
				>
					<IconChevronRight />
				</a> -->
			</div>
		{/each}
	</div>
</div>
