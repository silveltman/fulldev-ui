<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Split from 'layout/Split.svelte';
</script>

<Meta
	title="Layout/Split"
	tags={['autodocs']}
	component={Split}
/>

<Template let:args>
	<Split {...args}>
		<div class="h-20 rounded-[8px] bg-blue-400" />
		<div class="h-40 rounded-[8px] bg-blue-400" />
	</Split>
</Template>

<Story name="Default" />

<Story
	name="Center"
	args={{ center: true }}
/>
