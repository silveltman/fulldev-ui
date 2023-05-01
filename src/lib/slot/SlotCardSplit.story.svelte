<script lang="ts">
	import type { SlotCardContent, Hst } from '$lib/types';
	import SlotCardSplit from 'slot/SlotCardSplit.svelte';

	export let Hst: Hst;

	let content: SlotCardContent = [
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
	];
</script>

<Hst.Story>
	<SlotCardSplit {content} />
</Hst.Story>
