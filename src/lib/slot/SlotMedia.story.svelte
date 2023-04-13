<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import type { SlotMediaContent } from '$lib/types'
	import SlotMedia from 'slot/SlotMedia.svelte'
	export let Hst: Hst

	// Content props
	let content: SlotMediaContent = {
		src: 'https://picsum.photos/1600/900',
		alt: 'Lorem ipsum'
	}
</script>

<Hst.Story>
	<SlotMedia {content} />
</Hst.Story>
