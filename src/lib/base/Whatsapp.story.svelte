<script lang="ts">
	import type { Hst } from '$lib/types';
	import Whatsapp from './Whatsapp.svelte';
	export let Hst: Hst;

	let tel: string = '31683485163';
</script>

<Hst.Story>
	<Whatsapp {tel} />
</Hst.Story>
