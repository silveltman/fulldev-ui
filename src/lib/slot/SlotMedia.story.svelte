<script lang="ts">
	import type { SlotMediaContent, Hst } from '$lib/types'
	import SlotMedia from 'slot/SlotMedia.svelte'

	export let Hst: Hst

	let content: SlotMediaContent = {
		src: 'https://picsum.photos/1600/900',
		alt: 'Lorem ipsum'
	}
</script>

<Hst.Story>
	<SlotMedia {content} />
</Hst.Story>
