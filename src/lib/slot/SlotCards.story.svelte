<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import type { SlotCardsContent } from '$lib/types'
	import SlotCards from 'slot/SlotCards.svelte'
	export let Hst: Hst

	let content: SlotCardsContent = [
		{
			heading: 'Heading',
			textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			image: {
				src: 'https://via.placeholder.com/150',
				alt: 'Alt text'
			}
		},
		{
			heading: 'Heading',
			textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			image: {
				src: 'https://via.placeholder.com/150',
				alt: 'Alt text'
			}
		},
		{
			heading: 'Heading',
			textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			image: {
				src: 'https://via.placeholder.com/150',
				alt: 'Alt text'
			}
		}
	]
</script>

<Hst.Story>
	<SlotCards {content} />
</Hst.Story>
