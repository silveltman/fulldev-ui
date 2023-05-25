<script lang="ts">
	import Container from 'layout/Container.svelte';

	import Highlight2 from 'layout/Highlight.svelte';
	import Card from 'layout/Card.svelte';

	import Eyebrow from '../../archive/Eyebrow.svelte';
	import Button from 'base/Button.svelte';
	import Image from 'base/Image.svelte';
	import Panel from 'layout/Card.svelte';
	import Textfield from 'base/Input.svelte';
	import Textarea from 'base/Textarea.svelte';
	import Select from 'base/Select.svelte';
	import Form from 'layout/Form.svelte';
	import Buttons from '../histoire/Buttons.story.svelte';
	import { text } from 'svelte/internal';
	import Grid from 'layout/Grid.svelte';
	import Split from 'layout/Split.svelte';
	import Masonry from 'layout/Masonry.svelte';
	import Carousel from 'layout/Carousel.svelte';
	import Box from 'layout/Box.svelte';
	import Heading from 'base/Heading.svelte';

	const count = 20;

	const content = {
		eyebrow: 'Eyebrow',
		heading: 'Heading',
		textarea: 'Textarea',
		button_primary: {
			text: 'Button',
			href: '#'
		},
		button_secondary: {
			text: 'Button',
			href: '#'
		}
	};
</script>

<Container class="py-20 medium">
	<div class="flex flex-col gap-2">
		<div class="my-[10px] h-10 w-xs bg-base-9" />
		<div class="my-[10px] h-10 w-sm bg-base-9" />
		<div class="my-[10px] h-10 w-md bg-base-9" />
		<div class="my-[10px] h-10 w-lg bg-base-9" />
		<div class="my-[10px] h-10 w-xl bg-base-9" />
		<div class="my-[10px] h-10 w-2xl bg-base-9" />
	</div>
	<div class="my-20 flex border-4">
		<div class="h-10 w-full bg-base-1" />
		<div class="h-10 w-full bg-base-2" />
		<div class="h-10 w-full bg-base-3" />
		<div class="h-10 w-full bg-base-4" />
		<div class="h-10 w-full bg-base-5" />
		<div class="h-10 w-full bg-base-6" />
		<div class="h-10 w-full bg-base-7" />
		<div class="h-10 w-full bg-base-8" />
		<div class="h-10 w-full bg-base-9" />
		<div class="h-10 w-full bg-base-10" />
		<div class="h-10 w-full bg-base-11" />
		<div class="h-10 w-full bg-base-12" />
	</div>

	<Button
		variant="solid"
		text="Button"
	/>
	<Button
		variant="ghost"
		text="Button"
	/>
	<Button
		variant="ringed"
		text="Button"
	/>
	<Button
		variant="soft"
		text="Button"
	/>

	<Heading
		as="h2"
		text="Hello"
	/>
</Container>
