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

	export let cms: Hero = {}
</script>

<section class="bg-neutral-0 {className}">
	<Container class="max-2xl:!px-0">
		<Split class="lg:items-center">
			{#if cms.image}
				<Image
					class="lg:order-2"
					sizes={{ base: '100vw', lg: '50vw', '2xl': '703px' }}
					ratio={16 / 9}
					src={cms.image.src}
					alt={cms.image.alt}
				/>
			{/if}
			<Container class="pb-2xl lg:mx-0 lg:py-3xl lg:pr-0 2xl:px-0">
				<Prose class="max-w-xl">
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
			</Container>
		</Split>
	</Container>
</section>
