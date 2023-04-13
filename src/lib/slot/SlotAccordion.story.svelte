<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import type { SlotAccordionContent } from '$lib/types'
	import SlotAccordion from 'slot/SlotAccordion.svelte'
	export let Hst: Hst

	let content: SlotAccordionContent = [
		{
			heading: 'Lorem ipsum dolor',
			textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		{
			heading: 'Lorem ipsum dolor',
			textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		{
			heading: 'Lorem ipsum dolor',
			textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		}
	]
</script>

<Hst.Story>
	<SlotAccordion {content} />
</Hst.Story>
