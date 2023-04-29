<script lang="ts">
	import type { SlotGalleryContent, Hst } from '$lib/types';
	import SlotGallery from 'slot/SlotGallery.svelte';

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
	<SlotGallery {content} />
</Hst.Story>
