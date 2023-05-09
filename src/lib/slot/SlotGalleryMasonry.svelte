<script lang="ts">
	import type { SlotGalleryContent } from '$lib/types';
	import Image from '$lib/base/Image.svelte';

	let className = '';
	export { className as class };
	export let content: SlotGalleryContent;
</script>

<div
	class="scrollbar-track-base-3 scrollbar-thumb-base-7 max-lg:daisy-carousel hover:scrollbar-thumb-base-8 max-lg:bg-base-2 max-lg:scrollbar-thin lg:columns-2 lg:gap-sm lg:space-y-sm max-lg:[&::-webkit-scrollbar]:block
	{className}
	"
>
	{#each content as item}
		<Image
			class="h-auto w-full object-contain max-lg:daisy-carousel-item"
			content={item}
		/>
	{/each}
</div>
