<script lang="ts">
	import type { SlotGalleryContent, Hst } from '$lib/types';
	import SlotGalleryMasonry from 'slot/SlotGalleryMasonry.svelte';

	export let Hst: Hst;

	let content: SlotGalleryContent = [
		{
			src: 'https://picsum.photos/500/500',
			alt: 'Image 1'
		},
		{
			src: 'https://picsum.photos/600/800',
			alt: 'Image 2'
		},
		{
			src: 'https://picsum.photos/700/400',
			alt: 'Image 3'
		},
		{
			src: 'https://picsum.photos/800/800',
			alt: 'Image 1'
		},
		{
			src: 'https://picsum.photos/500/500',
			alt: 'Image 1'
		},
		{
			src: 'https://picsum.photos/600/800',
			alt: 'Image 2'
		},
		{
			src: 'https://picsum.photos/700/400',
			alt: 'Image 3'
		},
		{
			src: 'https://picsum.photos/800/800',
			alt: 'Image 1'
		},
		{
			src: 'https://picsum.photos/500/500',
			alt: 'Image 1'
		},
		{
			src: 'https://picsum.photos/600/800',
			alt: 'Image 2'
		},
		{
			src: 'https://picsum.photos/700/400',
			alt: 'Image 3'
		},
		{
			src: 'https://picsum.photos/800/800',
			alt: 'Image 1'
		}
	];
</script>

<Hst.Story>
	<SlotGalleryMasonry {content} />
</Hst.Story>
