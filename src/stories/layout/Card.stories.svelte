<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Card from 'layout/Card.svelte';
</script>

<Meta
	title="Layout/Card"
	tags={['autodocs']}
	component={Card}
/>

<Template let:args>
	<Card
		{...args}
		class="!max-w-sm"
	>
		<div
			class="rounded-8px h-28 w-full bg-blue-400"
			slot="media"
		/>
		<div class="h-2 w-full rounded-[8px] bg-blue-200" />
		<div class="h-8 w-full rounded-[8px] bg-blue-200" />
		<div class="h-4 w-full rounded-[8px] bg-blue-200" />
		<svelte:fragment slot="footer">
			<div class="h-10 w-20 rounded-[8px] bg-blue-200" />
			<div class="h-10 w-20 rounded-[8px] bg-blue-200" />
		</svelte:fragment>
	</Card>
</Template>

<Story name="Default" />

<Story
	name="Box"
	args={{ box: true }}
/>

<Story
	name="Center"
	args={{ center: true }}
/>
