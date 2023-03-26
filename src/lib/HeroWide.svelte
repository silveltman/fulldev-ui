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

	export let cms: Hero
</script>

<section class="bg-neutral-0 {className} py-2xl">
	<Container class="flex flex-col gap-y-xl">
		<Prose class="mx-auto max-w-3xl items-center text-center">
			{#if cms.eyebrow}
				<Eyebrow>lorem opsu</Eyebrow>
			{/if}

			{#if cms.heading}
				<h1>{cms.heading}</h1>
			{/if}

			{#if cms.text}
				<p class="text-body-lg">{cms.text}</p>
			{/if}

			{#if cms.button_primary || cms.button_secondary}
				<ButtonGroup class="pt-md">
					{#if cms.button_primary}
						<Button
							size="lg"
							href={cms.button_primary.href}
							>{cms.button_primary.text}
						</Button>
					{/if}
					{#if cms.button_secondary}
						<Button
							size="lg"
							variant="secondary"
							href={cms.button_secondary.href}
							>{cms.button_secondary.text}
						</Button>
					{/if}
				</ButtonGroup>
			{/if}
		</Prose>
		{#if cms.image}
			<Image
				ratio={16 / 9}
				src={cms.image.src}
				alt={cms.image.alt}
			/>
		{/if}
	</Container>
</section>
