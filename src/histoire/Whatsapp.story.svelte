<script lang="ts">
	import type { Hst } from '$lib/types';
	import Whatsapp from 'base/Whatsapp.svelte';
	export let Hst: Hst;

	let tel: string = '31683485163';
</script>

<Hst.Story>
	<svelte:fragment slot="controls">
		<Hst.Text
			title="Tel"
			bind:value={tel}
		/>
	</svelte:fragment>
	<Whatsapp tel="31683485163" />
</Hst.Story>
