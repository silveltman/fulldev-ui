<script lang="ts">
	import type { Hst } from '$lib/types';
	import Logo from './Logo.svelte';
	export let Hst: Hst;

	export let src: string = 'https://via.placeholder.com/150';
	export let alt: string = 'Alt text';
</script>

<Hst.Story>
	<Logo
		{src}
		{alt}
	/>
</Hst.Story>
