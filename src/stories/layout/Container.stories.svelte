<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Container from 'layout/Container.svelte';
</script>

<Meta
	title="Layout/Container"
	tags={['autodocs']}
	component={Container}
/>

<Template let:args>
	<Container
		{...args}
		class="bg-blue-100"
	>
		<div class="h-20 rounded-[8px] bg-blue-400" />
	</Container>
</Template>

<Story name="Default" />
