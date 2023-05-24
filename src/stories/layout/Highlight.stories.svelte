<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Highlight from 'layout/Highlight.svelte';
</script>

<Meta
	title="Layout/Highlight"
	tags={['autodocs']}
	component={Highlight}
/>

<Template let:args>
	<Highlight {...args}>
		<div class="h-2 w-full rounded-[8px] bg-blue-400" />
		<div class="h-8 w-full rounded-[8px] bg-blue-400" />
		<div class="h-4 w-full rounded-[8px] bg-blue-400" />
		<svelte:fragment slot="footer">
			<div class="h-12 w-28 rounded-[8px] bg-blue-400" />
			<div class="h-12 w-28 rounded-[8px] bg-blue-400" />
		</svelte:fragment>
	</Highlight>
</Template>

<Story name="Default" />

<Story
	name="Center"
	args={{ center: true }}
/>
