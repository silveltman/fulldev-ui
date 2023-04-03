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

<section class="relative overflow-hidden bg-neutral-0 {className}">
	<Container>
		<Split class="lg:items-center">
			<div class="py-4xl max-w-xl">
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
			{#if block.image}
				<div class="h-full w-full overflow-visible">
					<div class="relative h-full w-[50vw] max-w-4xl bg-red-200">
						<Image
							class="absolute h-full w-full object-cover block"
							sizes={{ base: '100vw', lg: '50vw', '2xl': '703px' }}
							src={block.image.src}
							alt={block.image.alt}
						/>
					</div>
				</div>
			{/if}
		</Split>
	</Container>
</section>
