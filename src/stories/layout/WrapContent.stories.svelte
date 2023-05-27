<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import WrapContent from 'layout/WrapContent.svelte';
</script>

<Meta
	title="Layout/WrapContent"
	tags={['autodocs']}
	component={WrapContent}
/>

<Template let:args>
	<WrapContent {...args}>
		<div class="h-20 rounded-[8px] bg-blue-400" />
		<div class="h-40 rounded-[8px] bg-blue-400" />
	</WrapContent>
</Template>

<Story name="Default" />

<Story
	name="Center"
	args={{ center: false }}
/>
