<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Textarea from 'base/Textarea.svelte';
</script>

<Meta
	title="Base/Textarea"
	component={Textarea}
	tags={['autodocs']}
/>

<Template let:args>
	<Textarea {...args} />
</Template>

<Story
	name="Default"
	args={{ label: 'Label', placeholder: 'placeholder' }}
/>

<Story
	name="Required"
	args={{ label: 'Label', placeholder: 'placeholder', required: true }}
/>
