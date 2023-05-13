<script lang="ts">
	import type { Hst } from '$lib/types';
	import Select from './Select.svelte';
	export let Hst: Hst;
</script>

<Hst.Story>
	<Select
		label="Label"
		id="select"
		options={['Option 1', 'Option 2', 'Option 3']}
	/>
</Hst.Story>
