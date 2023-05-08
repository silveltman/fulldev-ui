<script lang="ts">
	import type { CollapseContent, Hst } from '$lib/types';
	import Collapse from './Collapse.svelte';
	export let Hst: Hst;

	let content: CollapseContent = {
		heading: 'Lorem ipsum dolor sit amet',
		textarea: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
	};
</script>

<Hst.Story>
	<Collapse {content} />
</Hst.Story>
