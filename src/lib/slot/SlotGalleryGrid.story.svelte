<script lang="ts">
	import type { SlotGalleryContent, Hst } from '$lib/types';
	import SlotGalleryGrid from 'slot/SlotGalleryGrid.svelte';

	export let Hst: Hst;

	let content: SlotGalleryContent = [
		{
			src: 'https://via.placeholder.com/500',
			alt: 'Alt text'
		},
		{
			src: 'https://via.placeholder.com/500',
			alt: 'Alt text'
		},
		{
			src: 'https://via.placeholder.com/500',
			alt: 'Alt text'
		}
	];
</script>

<Hst.Story>
	<SlotGalleryGrid {content} />
</Hst.Story>
