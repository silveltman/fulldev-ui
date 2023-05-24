<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Carousel from 'layout/Carousel.svelte';
</script>

<Meta
	title="Layout/Carousel"
	tags={['autodocs']}
	component={Carousel}
/>

<Template let:args>
	<Carousel {...args}>
		<div class="h-40 rounded-[8px] bg-blue-400" />
		<div class="h-40 rounded-[8px] bg-blue-400" />
		<div class="h-40 rounded-[8px] bg-blue-400" />
		<div class="h-40 rounded-[8px] bg-blue-400" />
		<div class="h-40 rounded-[8px] bg-blue-400" />
		<div class="h-40 rounded-[8px] bg-blue-400" />
	</Carousel>
</Template>

<Story name="Default" />
