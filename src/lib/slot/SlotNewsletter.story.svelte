<script lang="ts">
	import type { Hst, SlotNewsletterContent } from '$lib/types'
	import SlotNewsletter from 'slot/SlotNewsletter.svelte'

	export let Hst: Hst

	let content: SlotNewsletterContent = {
		placeholder: 'Your email',
		button: {
			text: 'Subscribe'
		}
	}
</script>

<Hst.Story>
	<SlotNewsletter {content} />
</Hst.Story>
