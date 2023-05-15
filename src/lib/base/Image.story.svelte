<script lang="ts">
	import type { Hst } from '$lib/types';
	import Image from 'base/Image.svelte';

	export let Hst: Hst;
</script>

<Hst.Story>
	<Image
		src="https://picsum.photos/1600/900"
		alt="Lorem ipsum"
	/>
</Hst.Story>
