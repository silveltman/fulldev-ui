<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Grid from 'layout/Grid.svelte';
</script>

<Meta
	title="Layout/Grid"
	tags={['autodocs']}
	component={Grid}
/>

<Template let:args>
	<Grid {...args}>
		<div class="h-40 rounded-[8px] bg-blue-400" />
		<div class="h-40 rounded-[8px] bg-blue-400" />
		<div class="h-40 rounded-[8px] bg-blue-400" />
		<div class="h-40 rounded-[8px] bg-blue-400" />
		<div class="h-40 rounded-[8px] bg-blue-400" />
		<div class="h-40 rounded-[8px] bg-blue-400" />
	</Grid>
</Template>

<Story name="Default" />
