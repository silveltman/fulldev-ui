<script lang="ts">
	import type { Hst } from '$lib/types';
	import Textarea from './Textarea.svelte';
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

	<Textarea
		{required}
		label="Label"
		id="textarea"
	/>
</Hst.Story>
