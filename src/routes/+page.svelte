<script lang="ts">
	import Navbar from '$lib/Navbar/Navbar.svelte';
	import Button from 'base/Button.svelte';
	import Link from 'base/Link.svelte';
	import Drawer from 'layout/Drawer.svelte';
	import DrawerToggle from 'layout/DrawerToggle.svelte';
	import { text } from 'svelte/internal';

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

<Navbar>
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
</Navbar>
