<script lang="ts">
	import type { Hst, RadioContent } from '$lib/types'
	import Radio from './Radio.svelte'
	export let Hst: Hst

	let options : RadioContent[] = [
		{
			heading: 'Option 1',
			text: 'This is option 1',
			value: 'option1',
			required: true
		},
		{
			heading: 'Option 2',
			text: 'This is option 2',
			value: 'option2',
			required: false
		}
	]

</script>

<Hst.Story>
	<Radio 
	{options}
	/>
</Hst.Story>
