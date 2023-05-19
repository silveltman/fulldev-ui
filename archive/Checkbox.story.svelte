<script lang="ts">
	import type { CheckboxContent, Hst } from '$lib/types';
	import Checkbox from '../base/Checkbox.svelte';

	export let Hst: Hst;

	let content: CheckboxContent = {
		heading: 'Option 1',
		text: 'This is option 1'
	};
</script>

<Hst.Story>
	<Checkbox
		{content}
		name="checkbox"
	/>
</Hst.Story>
