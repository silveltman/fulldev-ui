<script lang="ts">
	import type { Content } from '$lib/types'
	import Image from '$lib/base/Image.svelte'
	import Container from './layout/Container.svelte'
	import Prose from './layout/Prose.svelte'

	let className = ''
	export { className as class }

	export let block: Content = {}
</script>

<section class="bg-neutral-0 py-2xl {className}">
	<Container class="container">
		<Prose
			size="lg"
			class="pb-xl"
		>
			{#if block.heading}
				<h2>{block.heading}</h2>
			{/if}
			{#if block.html}
				<div class="lg:columns-2 lg:gap-xl">
					{@html block.html}
				</div>
			{/if}
		</Prose>
		{#if block.image}
			<Image
				src={block.image.src}
				alt={block.image.alt}
				sizes={{ base: '100vw', '2xl': '1472px' }}
				ratio={16 / 9}
			/>
		{/if}
	</Container>
</section>
