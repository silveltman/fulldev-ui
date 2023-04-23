<script lang="ts">
	import type { Hst, WhatsappContent } from '$lib/types'
	import Whatsapp from './Whatsapp.svelte'
	export let Hst: Hst

	export let content : WhatsappContent = { contactNo:'31683485163'}
</script>

<Hst.Story>
	<Hst.Variant title="whatsapp">
		<Whatsapp {content} />
	</Hst.Variant>
</Hst.Story>
