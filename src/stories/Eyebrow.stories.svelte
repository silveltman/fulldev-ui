<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Eyebrow from 'base/Eyebrow.svelte';
</script>

<Meta
	title="Eyebrow"
	component={Eyebrow}
/>

<Template let:args>
	<Eyebrow {...args} />
</Template>

<Story
	name="Base"
	args={{ text: 'Im eyebrow' }}
/>
