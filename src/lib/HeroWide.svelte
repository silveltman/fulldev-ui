<script lang="ts">
	import type { Hero } from '$lib/types'
	import HeroSlotContent from './HeroSlotContent.svelte'
	import Image from './base/Image.svelte'

	let className = ''
	export { className as class }

	export let cms: Hero
</script>

<section class="bg-neutral-0 {className} py-2xl">
	<div class="container flex flex-col gap-y-xl">
		<slot name="content">
			<HeroSlotContent
				{cms}
				align="center"
			/>
		</slot>
		<slot name="media">
			{#if cms.image}
				<Image
					ratio={16 / 9}
					src={cms.image.src}
					alt={cms.image.alt}
				/>
			{/if}
		</slot>
	</div>
</section>
