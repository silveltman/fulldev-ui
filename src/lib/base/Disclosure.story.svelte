<script lang="ts">
	import type { DisclosureContent, Hst } from '$lib/types'
	import Disclosure from './Disclosure.svelte'
	export let Hst: Hst

	let content: DisclosureContent = {
		heading: 'Lorem ipsum dolor sit amet',
		textarea: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
	}
</script>

<Hst.Story>
	<svelte:fragment slot="controls">
		<Hst.Json
			bind:value={content}
			title="Content"
		/>
	</svelte:fragment>

	<Disclosure {content} />
</Hst.Story>
