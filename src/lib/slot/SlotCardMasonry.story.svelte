<script lang="ts">
	import type { SlotCardsContent, Hst } from '$lib/types'
	import SlotCardMasonry from 'slot/SlotCardMasonry.svelte'

	export let Hst: Hst

	let content: SlotCardsContent = [
		{
			heading: 'Heading',
			textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			image: {
				src: 'https://via.placeholder.com/150x50',
				alt: 'Alt text'
			}
		},
		{
			heading: 'Heading',
			textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			image: {
				src: 'https://via.placeholder.com/150x100',
				alt: 'Alt text'
			}
		},
		{
			heading: 'Heading',
			textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			image: {
				src: 'https://via.placeholder.com/150x200',
				alt: 'Alt text'
			}
		}
	]
</script>

<Hst.Story>
	<SlotCardMasonry {content} />
</Hst.Story>
