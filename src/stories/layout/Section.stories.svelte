<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Section from 'layout/Section.svelte';
</script>

<Meta
	title="Layout/Section"
	tags={['autodocs']}
	component={Section}
/>

<Template let:args>
	<Section
		{...args}
		class="bg-blue-100"
	>
		<div class="h-40 rounded-[8px] bg-blue-400" />
	</Section>
</Template>

<Story name="Default" />
