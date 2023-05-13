<script lang="ts">
	import type { Hst } from '$lib/types';
	import Textfield from './Textfield.svelte';
	export let Hst: Hst;

	let required: boolean = false;
</script>

<Hst.Story>
	<svelte:fragment slot="controls">
		<Hst.Checkbox
			title="Required"
			bind:value={required}
		/>
	</svelte:fragment>

	<Textfield
		label="Label"
		id="textfield"
	/>
</Hst.Story>
