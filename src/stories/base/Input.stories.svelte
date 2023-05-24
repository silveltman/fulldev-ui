<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Input from 'base/Input.svelte';
</script>

<Meta
	title="Base/Input"
	component={Input}
	tags={['autodocs']}
/>

<Template let:args>
	<Input {...args} />
</Template>

<Story
	name="Default"
	args={{ label: 'Label', placeholder: 'placeholder' }}
/>

<Story
	name="Required"
	args={{ label: 'Label', placeholder: 'placeholder', required: true }}
/>

<Story
	name="Disabled"
	args={{ label: 'Label', placeholder: 'placeholder', disabled: true }}
/>
