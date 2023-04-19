<script lang="ts">
	import type { Hst } from '$lib/types'
	import Checkbox from './Checkbox.svelte'
	export let Hst: Hst

	let content = {
		// heading: 'Option 1',
		text: 'This is option 1',
		id: 'option1'
	}
</script>

<Hst.Story>
	<Checkbox {content} />
</Hst.Story>
