<script lang="ts">
	import type { ImageContent, Hst } from '$lib/types';
	import Image from 'base/Image.svelte';

	export let Hst: Hst;

	let content: ImageContent = {
		src: 'https://picsum.photos/1600/900',
		alt: 'Lorem ipsum'
	};
</script>

<Hst.Story>
	<Image {content} />
</Hst.Story>
