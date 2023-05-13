<script lang="ts">
	import Navbar from 'layout/Navbar.svelte';
	import Button from 'base/Button.svelte';
	import Link from 'base/Link.svelte';
	import Drawer from 'layout/Drawer.svelte';
	import Footer from 'layout/Footer.svelte';
	import Block from 'layout/Block.svelte';
	import Box from 'layout/Box.svelte';
	import Grid from 'layout/Grid.svelte';
	import Carousel from 'layout/Carousel.svelte';
	import Container from 'layout/Container.svelte';
	import Textfield from 'base/Textfield.svelte';
	import Textarea from 'base/Textarea.svelte';
	import Select from 'base/Select.svelte';

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

<div class="flex flex-col gap-md">
	<Textfield
		label="naam"
		id="naam"
	/>
	<div class="flex gap-md">
		<Textfield
			label="postcode"
			id="postcode"
		/>
		<Textfield
			label="huisnummer"
			id="huisnummer"
		/>
	</div>
	<Select
		required
		options={['hello', 'world']}
		id="select"
		label="Label"
	/>
	<Textarea
		label="bericht"
		id="bericht"
	/>
</div>
<Button
	text="Click me"
	class="size-sm"
/>
<Button
	text="Click me"
	class="size-md"
/>
<Button
	text="Click me"
	class="size-lg"
/>
