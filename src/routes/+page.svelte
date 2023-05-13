<script lang="ts">
	import Navbar from 'slot/Navbar.svelte';
	import Button from 'base/Button.svelte';
	import Link from 'base/Link.svelte';
	import Drawer from 'layout/Drawer.svelte';
	import Footer from 'slot/Footer.svelte';
	import Block from 'layout/Block.svelte';
	import Box from 'layout/Box.svelte';
	import Grid from 'layout/Grid.svelte';
	import Carousel from 'layout/Carousel.svelte';
	import Container from 'layout/Container.svelte';

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

<!-- <Navbar floating>
	<svelte:fragment slot="start">
		<Drawer position="top">
			<Link
				href="/"
				text="Home"
			/>
			<Link
				href="#"
				text="Contact"
			/>
			<Link
				href="#"
				text="About us"
			/>
		</Drawer>
		<span class="text-xl font-heading"> LogoIpsum </span>
	</svelte:fragment>
	<svelte:fragment slot="center">
		<Link
			href="/"
			text="Home"
		/>
		<Link
			href="#"
			text="Contact"
		/>
		<Link
			href="#"
			text="About us"
		/>
	</svelte:fragment>

	<svelte:fragment slot="end">
		<Button
			variant="ringed"
			content={{ text: 'Login' }}
		/>
		<Button
			variant="solid"
			content={{ text: 'Sign up' }}
		/>
	</svelte:fragment>
</Navbar> -->

<Container>
	<Carousel class="size-sm">
		{#each { length: 12 } as i}
			<div class="h-20 w-full bg-red-100 ring-1 ring-inset ring-black" />
		{/each}
	</Carousel>
	<Carousel>
		{#each { length: 12 } as i}
			<div class="h-20 w-full bg-red-100 ring-1 ring-inset ring-black" />
		{/each}
	</Carousel>
	<Carousel class="size-lg">
		{#each { length: 12 } as i}
			<div class="h-20 w-full bg-red-100 ring-1 ring-inset ring-black" />
		{/each}
	</Carousel>
</Container>

<div class="h-[2000px]" />
