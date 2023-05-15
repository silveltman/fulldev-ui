<script lang="ts">
	import type { Hst } from '$lib/types';
	import Link from './Link.svelte';
	export let Hst: Hst;

	let text: string = 'Click me';
	let href: string = '#';
</script>

<Hst.Story>
	<Link
		{text}
		{href}
	/>
</Hst.Story>
