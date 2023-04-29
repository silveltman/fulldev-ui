<script lang="ts">
	import type { Hst, ToggleContent } from '$lib/types';
	import Toggle from './Toggle.svelte';
	export let Hst: Hst;

	// let content: ToggleContent = {
	// 	heading: 'Annual',
	// 	text: '-10%',
	// 	id: 'option1',
	// 	required : false
	// }
</script>

<Hst.Story>
	<Toggle />
</Hst.Story>
