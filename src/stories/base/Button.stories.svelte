<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Button from 'base/Button.svelte';
</script>

<Meta
	title="Base/Button"
	component={Button}
	tags={['autodocs']}
	argTypes={{
		variant: {
			control: { type: 'select' },
			options: ['solid', 'ringed', 'soft', 'ghost']
		},
		href: {
			control: { type: 'select' },
			options: [undefined, '#']
		}
	}}
/>

<Template let:args>
	<Button {...args} />
</Template>

<Story
	name="Solid"
	args={{ variant: 'solid', text: 'Button' }}
/>

<Story
	name="Ringed"
	args={{ variant: 'ringed', text: 'Button' }}
/>

<Story
	name="Soft"
	args={{ variant: 'soft', text: 'Button' }}
/>

<Story
	name="Ghost"
	args={{ variant: 'ghost', text: 'Button' }}
/>

<Story
	name="Disabled"
	args={{ variant: 'solid', text: 'Button', disabled: true }}
/>
