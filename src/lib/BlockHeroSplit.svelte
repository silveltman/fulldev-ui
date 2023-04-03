<script lang="ts">
	import type { Hero } from '$lib/types'
	import Image from '$lib/base/Image.svelte'
	import Container from './layout/Container.svelte'
	import Split from './layout/Split.svelte'
	import Button from '$lib/base/Button.svelte'
	import Eyebrow from './base/Eyebrow.svelte'
	import ButtonGroup from './layout/ButtonGroup.svelte'
	import Prose from './layout/Prose.svelte'

	let className = ''
	export { className as class }

	export let block: Hero = {}
</script>

<section class="relative bg-neutral-0 {className}">
	<Container class="max-2xl:!px-0">
		<Split class="lg:items-center">
			<Container class="pt-2xl lg:mx-0 lg:py-3xl lg:pr-0 2xl:px-0">
				<div class="max-w-xl">
					{#if block.eyebrow}
						<Eyebrow>{block.eyebrow}</Eyebrow>
					{/if}

					{#if block.heading}
						<h1>{block.heading}</h1>
					{/if}

					{#if block.text}
						<p class="text-body-lg">{block.text}</p>
					{/if}

					{#if block.button_primary || block.button_secondary}
						<ButtonGroup>
							{#if block.button_primary}
								<Button
									size="lg"
									href={block.button_primary.href}
									>{block.button_primary.text}
								</Button>
							{/if}
							{#if block.button_secondary}
								<Button
									size="lg"
									variant="secondary"
									href={block.button_secondary.href}
									>{block.button_secondary.text}
								</Button>
							{/if}
						</ButtonGroup>
					{/if}
				</div>
			</Container>
			{#if block.image}
				<Image
					class="rounded-none lg:order-2 lg:rounded-l-image 2xl:rounded-r-image"
					sizes={{ base: '100vw', lg: '50vw', '2xl': '703px' }}
					ratio={16 / 9}
					src={block.image.src}
					alt={block.image.alt}
				/>
			{/if}
		</Split>
	</Container>
</section>
