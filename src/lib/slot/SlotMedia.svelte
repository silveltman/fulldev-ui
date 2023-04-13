<script lang="ts">
	import type { SlotMediaContent } from '$lib/types'
	import Image from 'base/Image.svelte'

	export let content: SlotMediaContent = {}
</script>

<Image
	sizes={{ base: '100vw', lg: '50vw', '2xl': '703px' }}
	{...content}
/>
