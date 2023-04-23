<script lang="ts">
	import type { Hst } from '$lib/types'
	import Whatsapp from './Whatsapp.svelte'
	export let Hst: Hst

	export let content = '31683485163'
</script>

<Hst.Story layout= {{type: 'grid', width:400,}}>
	<svelte:fragment slot="controls">
		<Hst.Text
			title="Content"
			bind:value={content}
		/>
	</svelte:fragment>

	
	<Hst.Variant title="Small">
		<Whatsapp {content} size="sm" />
	</Hst.Variant>
	<Hst.Variant title="Medium">
		<Whatsapp {content} size="md" />
	</Hst.Variant>
	<Hst.Variant title="Large">
		<Whatsapp {content} size="lg" />
	</Hst.Variant>
</Hst.Story>
