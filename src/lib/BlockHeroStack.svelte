<script lang="ts">
	import type { Hero } from '$lib/types'
	import Container from './layout/Container.svelte'
	import ButtonGroup from './layout/ButtonGroup.svelte'
	import Button from '$lib/base/Button.svelte'
	import Image from './base/Image.svelte'
	import Eyebrow from './base/Eyebrow.svelte'
	import Stack from './layout/Stack.svelte'

	let className = ''
	export { className as class }

	export let block: Hero = {}

	export let align: 'left' | 'center' = 'left'
</script>

<section class="bg-neutral-0 py-4xl {className}">
	<Container>
		<Stack>
			<div class="mx-auto inline-block max-w-2xl text-center">
				{#if block.eyebrow}
					<Eyebrow>lorem opsu</Eyebrow>
				{/if}

				{#if block.heading}
					<h1>{block.heading}</h1>
				{/if}

				{#if block.text}
					<p class="text-body-lg">{block.text}</p>
				{/if}

				{#if block.button_primary || block.button_secondary}
					<ButtonGroup class="pt-md">
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
				<Image
					src={block.image.src}
					alt={block.image.alt}
				/>
			{/if}
		</Stack>
	</Container>
</section>
