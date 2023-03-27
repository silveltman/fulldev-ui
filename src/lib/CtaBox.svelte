<script lang="ts">
	import type { Cta } from '$lib/types'
	import Button from '$lib/base/Button.svelte'
	import Container from './layout/Container.svelte'
	import Prose from './layout/Prose.svelte'
	import ButtonGroup from './layout/ButtonGroup.svelte'
	import Box from './layout/Box.svelte'

	// Base props
	let className = ''
	export { className as class }

	export let cms: Cta
</script>

<section class="bg-neutral-0 py-2xl {className}">
	<Container>
		<Box class="dark bg-neutral-0">
			<Prose class="prose mx-auto flex max-w-3xl flex-col items-center text-center">
				{#if cms.heading}
					<h2>{cms.heading}</h2>
				{/if}
				{#if cms.text}
					<p class="text-body-lg">{cms.text}</p>
				{/if}
				{#if cms.button_primary || cms.button_secondary}
					<ButtonGroup class="justify-center pt-md">
						{#if cms.button_primary}
							<Button href={cms.button_primary.href}>{cms.button_primary.text}</Button>
						{/if}
						{#if cms.button_secondary}
							<Button
								variant="secondary"
								href={cms.button_secondary.href}>{cms.button_secondary.text}</Button
							>
						{/if}
					</ButtonGroup>
				{/if}
			</Prose>
		</Box>
	</Container>
</section>
