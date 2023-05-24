<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Image from 'base/Image.svelte';
</script>

<Meta
	title="Base/Image"
	component={Image}
	tags={['autodocs']}
/>

<Template let:args>
	<Image {...args} />
</Template>

<Story
	name="Default"
	args={{ src: 'https://picsum.photos/1200/800', alt: 'My alt tag' }}
/>
