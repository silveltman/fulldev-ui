<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Select from 'base/Select.svelte';
</script>

<Meta
	title="Base/Select"
	component={Select}
	tags={['autodocs']}
/>

<Template let:args>
	<Select {...args} />
</Template>

<Story
	name="Default"
	args={{ label: 'Label', options: ['Option 1', 'Option 2', 'Option 3'] }}
/>

<Story
	name="With placeholder"
	args={{
		label: 'Label',
		placeholder: 'placeholder',
		options: ['Option 1', 'Option 2', 'Option 3']
	}}
/>
