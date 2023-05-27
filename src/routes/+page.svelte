<script lang="ts">
	import Container from 'layout/Container.svelte';

	import Highlight2 from 'layout/Highlight.svelte';
	import Card from 'layout/Card.svelte';

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
	import WrapBlock from 'layout/WrapBlock.svelte';

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

<WrapBlock>
	<div class="h-40 w-full bg-blue-500" />
</WrapBlock>
