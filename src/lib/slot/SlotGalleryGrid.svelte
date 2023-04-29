<script lang="ts">
	import type { SlotGalleryContent } from '$lib/types';
	import Image from '$lib/base/Image.svelte';
	export let content: SlotGalleryContent;
</script>

<div class="grid grid-flow-col grid-cols-1 overflow-scroll">
	{#each content as item}
		<div>
			<Image
				content={item}
				class="w-full"
			/>
		</div>
	{/each}
</div>
