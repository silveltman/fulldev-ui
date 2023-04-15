<script lang="ts">
	import type { CardContent, Hst } from '$lib/types'
	import Card from './Card.svelte'
	export let Hst: Hst

	let content: CardContent = {
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
	}
</script>

<Hst.Story>
	<svelte:fragment slot="controls">
		<Hst.Json
			bind:value={content}
			title="Heading"
		/>
	</svelte:fragment>

	<Card {content} />
</Hst.Story>
