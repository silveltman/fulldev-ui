<script lang="ts">
	import type { SlotAccordionContent, Hst } from '$lib/types'
	import SlotAccordion from 'slot/SlotAccordion.svelte'

	export let Hst: Hst

	let content: SlotAccordionContent = [
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
	]
</script>

<Hst.Story>
	<SlotAccordion {content} />
</Hst.Story>
