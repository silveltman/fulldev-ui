<script lang="ts">
	import type { SlotGalleryContent, Hst } from '$lib/types';
	import SlotGallery from 'slot/SlotGallery.svelte';

	export let Hst: Hst;

	let content: SlotGalleryContent = [
		{
			src: 'static/placeholder-portrait.jpg',
			alt: 'My alt text'
		},
		{
			src: 'static/placeholder-landscape.jpg',
			alt: 'My alt text'
		},
		{
			src: 'static/placeholder-portrait.jpg',
			alt: 'My alt text'
		},
		{
			src: 'static/placeholder-landscape.jpg',
			alt: 'My alt text'
		},
		{
			src: 'static/placeholder-portrait.jpg',
			alt: 'My alt text'
		}
	];
</script>

<Hst.Story>
	<SlotGallery {content} />
</Hst.Story>
