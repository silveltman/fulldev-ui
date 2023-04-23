<script lang="ts">
	import type { Hst, ToggleContent } from '$lib/types'
	import Toggle from './Toggle.svelte'
	export let Hst: Hst

	let content: ToggleContent = {
		heading: 'Annual',
		text: '-20%',
		id: 'option1'
	}
</script>

<Hst.Story>
	<Toggle {content} />
</Hst.Story>
