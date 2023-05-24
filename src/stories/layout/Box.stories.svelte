<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Box from 'layout/Box.svelte';
</script>

<Meta
	title="Layout/Box"
	tags={['autodocs']}
	component={Box}
/>

<Template let:args>
	<Box {...args}>
		<div class="h-20 rounded-[8px] bg-blue-400" />
	</Box>
</Template>

<Story name="Default" />
