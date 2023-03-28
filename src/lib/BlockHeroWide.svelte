<script lang="ts">
	import type { Hero } from '$lib/types'
	import Container from './layout/Container.svelte'
	import Prose from './layout/Prose.svelte'
	import ButtonGroup from './layout/ButtonGroup.svelte'
	import Button from '$lib/base/Button.svelte'
	import Image from './base/Image.svelte'
	import Eyebrow from './base/Eyebrow.svelte'

	let className = ''
	export { className as class }

	export let block: Hero
</script>

<section class="bg-neutral-0 {className} py-2xl">
	<Container class="flex flex-col gap-y-xl">
		<Prose class="mx-auto max-w-3xl items-center text-center">
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
		</Prose>
		{#if block.image}
			<Image
				ratio={16 / 9}
				src={block.image.src}
				alt={block.image.alt}
			/>
		{/if}
	</Container>
</section>
