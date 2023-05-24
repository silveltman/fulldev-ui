<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Stack from 'layout/Stack.svelte';
</script>

<Meta
	title="Layout/Stack"
	tags={['autodocs']}
	component={Stack}
/>

<Template let:args>
	<Stack {...args}>
		<div class="h-20 w-1/3 rounded-[8px] bg-blue-400" />
		<div class="h-40 w-1/2 rounded-[8px] bg-blue-400" />
	</Stack>
</Template>

<Story name="Default" />

<Story
	name="Center"
	args={{ center: true }}
/>
