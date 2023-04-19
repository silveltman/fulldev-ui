<script lang="ts">
	import type { Hst } from '$lib/types'
	import Whatsapp from './Whatsapp.svelte'
	export let Hst: Hst

	export let content = '31683485163'
</script>

<Hst.Story>
	<Whatsapp {content} />
</Hst.Story>
