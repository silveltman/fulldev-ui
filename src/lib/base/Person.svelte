<script lang="ts">
	import type { PersonContent } from '$lib/types'
	import Image from 'base/Image.svelte'

	let className = ''
	export { className as class }
	export let content: PersonContent
	//
</script>

<div class="flex items-center gap-md {className}">
	<div class="h-14 w-14 overflow-hidden rounded-full">
		<Image
			ratio={1}
			content={content.image}
		/>
	</div>
	<div>
		<h6>{content.heading}</h6>
		<p class="text-sm">{content.text}</p>
	</div>
</div>
