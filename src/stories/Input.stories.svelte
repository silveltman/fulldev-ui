<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Input from 'base/Input.svelte';
</script>

<Meta
	title="Textfield"
	tags={['autodocs']}
	component={Input}
/>

<Template let:args>
	<Input {...args} />
</Template>

<Story
	name="Base"
	args={{ label: 'Textfield Label', placeholder: 'Textfield Placeholder' }}
/>
