<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Split from 'layout/Split.svelte';
</script>

<Meta
	title="Split"
	tags={['autodocs']}
	component={Split}
/>

<Template let:args>
	<Split {...args}>
		<div class="h-40 w-full rounded-card bg-blue-400" />
		<div class="h-40 w-full rounded-card bg-blue-400" />
	</Split>
</Template>

<Story
	name="Base"
	args={{ label: 'Textfield Label', placeholder: 'Textfield Placeholder' }}
/>
