<script lang="ts">
	import type { Hst, TextFieldContent } from '$lib/types';
	import Textfield from './Textfield.svelte';
	export let Hst: Hst;

	let content: TextFieldContent = {
		label: 'Label',
		placeholder: 'Placeholder'
	};
</script>

<Hst.Story>
	<svelte:fragment slot="controls">
		<Hst.Json
			title="Content"
			bind:value={content}
		/>
	</svelte:fragment>

	<Textfield
		{content}
		name="textfield"
	/>
</Hst.Story>
