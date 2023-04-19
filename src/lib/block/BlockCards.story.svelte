<script lang="ts">
	import type { Layout, BlockCardsContent, Hst } from '$lib/types'
	import BlockCards from './BlockCards.svelte'
	import LayoutControls from '../../histoire/LayoutControls.svelte'

	export let Hst: Hst

	let layout: Layout = {}
	let content: BlockCardsContent = {
		highlight: {
			eyebrow: 'lorem ipsum',
			heading: 'Lorem ipsum dolor',
			textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		cards: [
			{
				heading: 'Lorem ipsum dolor sit amet',
				textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				href: '#',
				image: {
					src: 'https://via.placeholder.com/150',
					alt: 'Alt text'
				}
			},
			{
				heading: 'Lorem ipsum dolor sit amet',
				textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				href: '#',
				image: {
					src: 'https://via.placeholder.com/150',
					alt: 'Alt text'
				}
			}
			// {
			// 	heading: 'Lorem ipsum dolor sit amet',
			// 	textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			// 	image: {
			// 		src: 'https://via.placeholder.com/150',
			// 		alt: 'Alt text'
			// 	}
			// },
			// {
			// 	heading: 'Lorem ipsum dolor sit amet',
			// 	textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			// 	image: {
			// 		src: 'https://via.placeholder.com/150',
			// 		alt: 'Alt text'
			// 	}
			// },
			// {
			// 	heading: 'Lorem ipsum dolor sit amet',
			// 	textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			// 	image: {
			// 		src: 'https://via.placeholder.com/150',
			// 		alt: 'Alt text'
			// 	}
			// },
			// {
			// 	heading: 'Lorem ipsum dolor sit amet',
			// 	textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			// 	image: {
			// 		src: 'https://via.placeholder.com/150',
			// 		alt: 'Alt text'
			// 	}
			// }
		]
	}
</script>

<Hst.Story>
	<LayoutControls
		slot="controls"
		bind:layout
	/>

	<BlockCards
		{layout}
		{content}
	/>
</Hst.Story>
