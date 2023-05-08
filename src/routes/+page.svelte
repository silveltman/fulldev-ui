<script lang="ts">
	import Masonry from 'layout/Masonry.svelte';
	import Image from 'base/Image.svelte';
	import Card from 'layout/Card.svelte';
	import Eyebrow from 'base/Eyebrow.svelte';

	const images = [
		{
			src: 'https://picsum.photos/seed/picsum/512/512',
			alt: 'Lorem Picsum'
		},
		{
			src: 'https://picsum.photos/seed/picsum/512/512',
			alt: 'Lorem Picsum'
		},
		{
			src: 'https://picsum.photos/seed/picsum/512/512',
			alt: 'Lorem Picsum'
		},
		{
			src: 'https://picsum.photos/seed/picsum/512/512',
			alt: 'Lorem Picsum'
		},
		{
			src: 'https://picsum.photos/seed/picsum/512/512',
			alt: 'Lorem Picsum'
		}
	];
</script>

<Masonry
	let:imageSizes
	class="lg"
>
	{#each images as content}
		<Card>
			<Image
				sizes={imageSizes}
				{content}
			/>
			<h5>Hello world</h5>
		</Card>
	{/each}
</Masonry>
