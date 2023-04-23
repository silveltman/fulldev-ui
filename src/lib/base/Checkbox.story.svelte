<script lang="ts">
	import type { CheckboxContent, Hst } from '$lib/types'
	import Checkbox from './Checkbox.svelte'
	export let Hst: Hst

	let content: CheckboxContent = {
		heading: 'Option 1',
		text: 'This is option 1',
		id: 'option1',
		required: false
	}
</script>

<Hst.Story>
	
	<Checkbox 
	{content}
	 />
</Hst.Story>
