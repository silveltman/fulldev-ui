<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Link from 'base/Link.svelte';
</script>

<Meta
	title="Base/Link"
	component={Link}
	tags={['autodocs']}
/>

<Template let:args>
	<Link {...args} />
</Template>

<Story
	name="Default"
	args={{ text: 'Click me', href: '#' }}
/>
