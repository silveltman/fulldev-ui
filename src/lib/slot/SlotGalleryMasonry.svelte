<script lang="ts">
	import type { SlotGalleryContent } from '$lib/types';
	import Image from '$lib/base/Image.svelte';
	export let content: SlotGalleryContent;
</script>

<div
	class="bg-base-300 !scrollbar-thin scrollbar-track-base-300 scrollbar-thumb-content-300 md:carousel [&::-webkit-scrollbar]:block md:[&>*]:break-inside-avoid-column"
>
	{#each content as item, i}
		<Image
			class="carousel-item h-auto w-full object-contain"
			content={item}
		/>
	{/each}
</div>

<!-- <div class="carousel-vertical carousel h-[50vh] gap-sm">
	{#each content as item, i}
		<Image
			class="cursor-zoom-in rounded-[4px]"
			content={item}
		/>
	{/each}
</div> -->
