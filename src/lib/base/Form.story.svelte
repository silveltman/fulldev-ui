<script lang="ts">
	import type { Hst } from '$lib/types';
	import Form from './Form.svelte';
	export let Hst: Hst;
</script>

<Hst.Story layout={{ type: 'grid', width: 400 }}>
	<Form />
</Hst.Story>
