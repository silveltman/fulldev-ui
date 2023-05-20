<script lang="ts">
	import type { SlotGalleryContent, Hst } from '$lib/types';
	import SlotGalleryMasonry from 'slot/SlotGalleryMasonry.svelte';

	export let Hst: Hst;

	let content: SlotGalleryContent = [
		{
			src: '/static/placeholder-portrait.jpeg',
			alt: 'My alt text'
		},
		{
			src: '/static/placeholder-landscape.jpeg',
			alt: 'My alt text'
		},
		{
			src: '/static/placeholder-portrait.jpeg',
			alt: 'My alt text'
		},
		{
			src: '/static/placeholder-landscape.jpeg',
			alt: 'My alt text'
		},
		{
			src: '/static/placeholder-portrait.jpeg',
			alt: 'My alt text'
		}
	];
</script>

<Hst.Story>
	<SlotGalleryMasonry {content} />
</Hst.Story>
