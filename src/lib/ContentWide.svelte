<script lang="ts">
	import type { Content } from '$lib/types'
	import Image from '$lib/base/Image.svelte'
	import Container from './layout/Container.svelte'
	import Prose from './layout/Prose.svelte'

	let className = ''
	export { className as class }

	export let cms: Content
</script>

<section class="bg-neutral-0 py-2xl {className}">
	<Container class="container">
		<Prose
			size="lg"
			class="pb-xl"
		>
			{#if cms.heading}
				<h2>{cms.heading}</h2>
			{/if}
			{#if cms.html}
				<div class="lg:columns-2 lg:gap-xl">
					{@html cms.html}
				</div>
			{/if}
		</Prose>
		<Image
			sizes={{ base: '100vw', '2xl': '1472px' }}
			ratio={16 / 9}
		/>
	</Container>
</section>
