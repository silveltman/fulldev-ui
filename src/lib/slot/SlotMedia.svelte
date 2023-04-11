<script lang="ts">
	import type { MediaContent } from '$lib/types'
	import Image from 'base/Image.svelte'

	export let content: MediaContent = {}
</script>

<Image
	sizes={{ base: '100vw', lg: '50vw', '2xl': '703px' }}
	{...content}
/>
