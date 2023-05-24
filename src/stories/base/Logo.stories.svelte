<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Logo from 'base/Logo.svelte';
</script>

<Meta
	title="Base/Logo"
	component={Logo}
	tags={['autodocs']}
/>

<Template let:args>
	<Logo {...args} />
</Template>

<Story
	name="Default"
	args={{ src: 'https://picsum.photos/100/50', alt: 'My Company' }}
/>
