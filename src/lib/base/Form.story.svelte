<script lang="ts">
	import type { Hst, FormContent } from '$lib/types'
	import Form from './Form.svelte'
	export let Hst: Hst

	let content: FormContent = {
		action: '#'
	}
</script>

<Hst.Story layout={{ type: 'grid', width: 400 }}>
	<Form {content} />
</Hst.Story>
