<script lang="ts">
	import type { Hst, WhatsappContent } from '$lib/types'
	import Whatsapp from './Whatsapp.svelte'
	export let Hst: Hst

	export let content: WhatsappContent = { tel: '31683485163' }
</script>

<Hst.Story>
	<Whatsapp {content} />
</Hst.Story>
