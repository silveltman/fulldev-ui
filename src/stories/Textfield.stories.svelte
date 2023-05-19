<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Textfield from 'base/Textfield.svelte';
</script>

<Meta
	title="Textfield"
	component={Textfield}
/>

<Template let:args>
	<Textfield {...args} />
</Template>

<Story
	name="Base"
	args={{ label: 'Textfield Label', placeholder: 'Textfield Placeholder' }}
/>
