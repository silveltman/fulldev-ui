<script lang="ts">
	import type { Hst } from '$lib/types'
	import Radio from './Radio.svelte'
	export let Hst: Hst

	let options = [
		{
			heading: 'Option 1',
			text: 'This is option 1',
			value: 'option1'
		},
		{
			heading: 'Option 2',
			text: 'This is option 2',
			value: 'option2'
		}
	]
</script>

<Hst.Story>
	<Radio {options} />
</Hst.Story>
