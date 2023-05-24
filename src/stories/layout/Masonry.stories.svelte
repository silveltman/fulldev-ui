<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Masonry from 'layout/Masonry.svelte';
</script>

<Meta
	title="Layout/Masonry"
	tags={['autodocs']}
	component={Masonry}
/>

<Template let:args>
	<Masonry {...args}>
		<div class="h-40 rounded-[8px] bg-blue-400" />
		<div class="h-20 rounded-[8px] bg-blue-400" />
		<div class="h-40 rounded-[8px] bg-blue-400" />
		<div class="h-40 rounded-[8px] bg-blue-400" />
		<div class="h-20 rounded-[8px] bg-blue-400" />
		<div class="h-40 rounded-[8px] bg-blue-400" />
	</Masonry>
</Template>

<Story name="Default" />
