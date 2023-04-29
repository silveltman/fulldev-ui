<script lang="ts">
	import type { SlotCardContent, Hst } from '$lib/types';
	import SlotCardCarousel from 'slot/SlotCardCarousel.svelte';

	export let Hst: Hst;

	let content: SlotCardContent = [
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
		},
		{
			heading: 'Heading',
			textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			image: {
				src: 'https://via.placeholder.com/150',
				alt: 'Alt text'
			}
		}
	];
</script>

<Hst.Story>
	<SlotCardCarousel {content} />
</Hst.Story>
