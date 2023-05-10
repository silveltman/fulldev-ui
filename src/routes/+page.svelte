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

	const drawerPosition: 'left' | 'right' = 'left';
</script>

<Navbar>
	<span
		slot="start"
		class="text-xl font-heading"
	>
		LogoIpsum
	</span>

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
		<Button content={{ text: 'Sign up' }} />
	</svelte:fragment>
</Navbar>

<<button class="btn">hello</button>
<button class="btn-outline-primary btn">hello</button>>

<DrawerToggle position="top">Click me</DrawerToggle>
<Drawer position="top" />
<!-- <label
	class="overlay"
	for="drawer-{drawerPosition}"
/>
<div class="drawer-right drawer">
	<div class="drawer-content flex h-full flex-col pt-10">
		<label
			for="drawer-right"
			class="btn-sm btn-circle btn-ghost btn absolute right-2 top-2">✕</label
		>
		<div>
			<h2 class="font-medium text-xl">Create your account</h2>
			<input
				class="input my-3 py-1.5"
				placeholder="Type here..."
			/>
		</div>
		<div class="flex h-full flex-row items-end justify-end gap-2">
			<button class="btn-ghost btn">Cancel</button>
			<button class="btn-primary btn">Create</button>
		</div>
	</div>
</div> -->
