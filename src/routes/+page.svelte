<script lang="ts">
	import Navbar from 'layout/Navbar.svelte';
	import Button from 'base/Button.svelte';
	import Link from 'base/Link.svelte';
	import Drawer from 'layout/Drawer.svelte';
	import Footer from 'layout/Footer.svelte';
	import Block from 'layout/Section.svelte';
	import Box from 'layout/Box.svelte';
	import Grid from 'layout/Grid.svelte';
	import Carousel from 'layout/Carousel.svelte';
	import Container from 'layout/Container.svelte';
	import Textfield from 'base/Textfield.svelte';
	import Textarea from 'base/Textarea.svelte';
	import Select from 'base/Select.svelte';
	import Radio from 'base/Radio.svelte';
	import Card from 'base/Card.svelte';
	import Masonry from 'layout/Masonry.svelte';

	const images = [
		{
			src: 'https://picsum.photos/seed/picsum/512/512',
			alt: 'Lorem Picsum'
		},
		{
			src: 'https://picsum.photos/seed/picsum/512/512',
			alt: 'Lorem Picsum'
		}
		// {
		// 	src: 'https://picsum.photos/seed/picsum/512/512',
		// 	alt: 'Lorem Picsum'
		// },
		// {
		// 	src: 'https://picsum.photos/seed/picsum/512/512',
		// 	alt: 'Lorem Picsum'
		// },
		// {
		// 	src: 'https://picsum.photos/seed/picsum/512/512',
		// 	alt: 'Lorem Picsum'
		// }
	];
</script>

<Masonry>
	{#each images as image}
		<img
		class="sm:bg-black"
			src={image.src}
			alt={image.alt}
		/>
	{/each}
</Masonry>

<Grid>
	{#each images as image}
		<img
			src={image.src}
			alt={image.alt}
		/>
	{/each}
</Grid>
