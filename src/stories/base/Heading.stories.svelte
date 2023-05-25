<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Heading from 'base/Heading.svelte';
</script>

<Meta
	title="Base/Heading"
	component={Heading}
	tags={['autodocs']}
/>

<Template let:args>
	<Heading {...args} />
</Template>

<Story
	name="Heading"
	args={{ text: 'Lorem ipsum' }}
/>

<Story
	name="Subheading"
	args={{ text: 'Lorem ipsum', as: 'h4' }}
/>
