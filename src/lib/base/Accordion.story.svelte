<script lang="ts">
	import type { AccordionContent, Hst } from '$lib/types';
	import Accordion from 'base/Accordion.svelte';

	export let Hst: Hst;

	let content: AccordionContent = [
		{
			heading: 'Lorem ipsum dolor 1',
			textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		{
			heading: 'Lorem ipsum dolor 2',
			textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		{
			heading: 'Lorem ipsum dolor 3',
			textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		}
	];
</script>

<Hst.Story>
	<Accordion {content} />
</Hst.Story>
