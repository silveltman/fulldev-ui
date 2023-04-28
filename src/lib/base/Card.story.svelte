<script lang="ts">
	import type { CardContent, Hst } from '$lib/types';
	import Card from './Card.svelte';
	import Select from './Select.svelte';
	export let Hst: Hst;

	let content: CardContent = {
		eyebrow: 'Lorem ipsum',
		heading: 'Heading',
		textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		image: {
			src: 'https://via.placeholder.com/150',
			alt: 'Alt text'
		},
		person: {
			heading: 'John Doe',
			text: 'Engineer',
			image: {
				src: 'https://via.placeholder.com/150',
				alt: 'Engineer'
			}
		}
	};

	let size: 'sm' | 'md' | 'lg' = 'md';
	let box: boolean = false;
	let split: boolean = false;
	let center: boolean = false;
</script>

<Hst.Story>
	<svelte:fragment slot="controls">
		<Hst.Select
			title="size"
			bind:value={size}
			options={['sm', 'md', 'lg']}
		/>
		<Hst.Checkbox
			title="Box"
			bind:value={box}
		/>
		<Hst.Checkbox
			title="Split"
			bind:value={split}
		/>
		<Hst.Checkbox
			title="Center"
			bind:value={center}
		/>
	</svelte:fragment>

	<Card
		{content}
		{box}
		{split}
		{center}
	/>
</Hst.Story>
