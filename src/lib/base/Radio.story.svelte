<script lang="ts">
	import type { Hst, RadioContent } from '$lib/types';
	import Radio from './Radio.svelte';
	export let Hst: Hst;

	let options: RadioContent = [
		{
			heading: 'Option 1',
			text: 'This is option 1'
		},
		{
			heading: 'Option 2',
			text: 'This is option 2'
		}
	];
</script>

<Hst.Story>
	<Radio
		{options}
		name="radio"
	/>
</Hst.Story>
