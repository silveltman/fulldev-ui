<script lang="ts">
	import type { SlotGalleryContent } from '$lib/types';
	import Image from '$lib/base/Image.svelte';

	let className = '';
	export { className as class };
	export let content: SlotGalleryContent;
</script>

<div
	class="max-lg:scrollbar-thumb-front-300 max-lg:daisy-carousel max-lg:bg-base-300 max-lg:scrollbar-thin max-lg:scrollbar-track-base-300 lg:columns-2 lg:gap-sm lg:space-y-sm max-lg:[&::-webkit-scrollbar]:block
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
