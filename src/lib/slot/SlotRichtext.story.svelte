<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import type { RichtextContent } from '$lib/types'
	import SlotRichtext from 'slot/SlotRichtext.svelte'
	export let Hst: Hst

	// Content props
	let content: RichtextContent = {
		html: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, maxime facere. In magni nobis fugiat facere a enim tempore sapiente.</p><h2>Lorem ipsum dolor sit.</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, ab.</p><ul><li>Lorem ipsum dolor sit amet.</li><li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li><li>Lorem ipsum dolor sit.</li></ul><h3>Lorem ipsum dolor sit.</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sapiente praesentium sit?</p>'
	}
</script>

<Hst.Story>
	<svelte:fragment slot="controls">
		<Hst.Json
			title="Slot"
			bind:value={content}
		/>
	</svelte:fragment>

	<SlotRichtext {content} />
</Hst.Story>

<!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, maxime facere. In magni nobis fugiat facere a enim tempore sapiente.</p><h2>Lorem ipsum dolor sit.</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, ab.</p><ul><li>Lorem ipsum dolor sit amet.</li><li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li><li>Lorem ipsum dolor sit.</li></ul><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sapiente praesentium sit?</p> -->
