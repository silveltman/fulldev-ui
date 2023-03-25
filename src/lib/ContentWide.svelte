<script lang="ts">
	import type { Content } from '$lib/types'
	import Image from '$lib/base/Image.svelte'

	let className = ''
	export { className as class }

	export let cms: Content
</script>

<section class="bg-neutral-0 py-2xl {className}">
	<div class="container">
		<div class="prose-lg pb-lg">
			{#if cms.heading}
				<h2>{cms.heading}</h2>
			{/if}
			{#if cms.html}
				<div class="lg:columns-2 lg:gap-xl">
					{@html cms.html}
				</div>
			{/if}
		</div>
		<Image ratio={16 / 9} />
	</div>
</section>
