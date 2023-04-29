<script lang="ts">
	import Button from '$lib/base/Button.svelte';
	import SlotGallery from 'slot/SlotGallery.svelte';

	let content = [
		{
			src: 'https://picsum.photos/500/500',
			alt: 'Image 1'
		},
		{
			src: 'https://picsum.photos/600/600',
			alt: 'Image 2'
		},
		{
			src: 'https://picsum.photos/700/700',
			alt: 'Image 3'
		},
		{
			src: 'https://picsum.photos/800/800',
			alt: 'Image 1'
		}
	];
</script>

<SlotGallery {content} />
