<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import type { Accordion } from '$lib/types'
	import SlotAccordion from 'slot/SlotAccordion.svelte'
	export let Hst: Hst

	// Styling props

	// Content props
	let block: Accordion = {
		accordion: [
			{
				heading: 'Lorem ipsum dolor',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
			},
			{
				heading: 'Lorem ipsum dolor',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
			},
			{
				heading: 'Lorem ipsum dolor',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
			}
		]
	}
</script>

<Hst.Story>
	<SlotAccordion {block} />
</Hst.Story>
