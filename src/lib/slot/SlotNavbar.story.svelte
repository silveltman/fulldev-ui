<script lang="ts">
	import type { AccordionContent, Hst } from '$lib/types';
	import SlotNavbar from 'slot/SlotNavbar.svelte';

	export let Hst: Hst;
</script>

<Hst.Story>
	<SlotNavbar />
</Hst.Story>
