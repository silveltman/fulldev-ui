<script lang="ts">
	import type { Hero } from '$lib/types'
	import Image from '$lib/base/Image.svelte'
	import HeroSlotContent from './HeroSlotContent.svelte'

	let className = ''
	export { className as class }

	export let cms: Hero
</script>

<section class="bg-neutral-0 {className}">
	<div class="container flex-split-reverse items-start max-2xl:p-0 lg:items-center">
		<div>
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
		<div class="container py-2xl lg:m-0 lg:py-3xl lg:pr-xl 2xl:pl-0 2xl:pr-2xl">
			<slot name="content">
				<HeroSlotContent {cms} />
			</slot>
		</div>
	</div>
</section>
