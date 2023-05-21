<script lang="ts">
	import Container from 'layout/Container.svelte';

	import Highlight2 from 'layout/Highlight.svelte';
	import Card from 'layout/Card.svelte';

	import Eyebrow from 'base/Eyebrow.svelte';
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

<Container class="py-20 small">
	<!-- <Box>Hello</Box> -->
	<!-- <Carousel>
		{#each { length: count } as item}
			<div class="h-40 bg-blue-200" />
		{/each}
	</Carousel> -->
</Container>
<div class="large">
	<div class="my-[10px] h-10 w-xs bg-blue-100" />
	<div class="my-[10px] h-10 w-sm bg-blue-100" />
	<div class="my-[10px] h-10 w-md bg-blue-100" />
	<div class="my-[10px] h-10 w-lg bg-blue-100" />
	<div class="my-[10px] h-10 w-xl bg-blue-100" />
	<div class="my-[10px] h-10 w-2xl bg-blue-100" />
</div>
