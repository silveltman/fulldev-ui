<script lang="ts">
	import type { Cta } from '$lib/types'
	import Button from 'base/Button.svelte'
	import Container from 'layout/Container.svelte'
	import Prose from 'layout/Prose.svelte'
	import ButtonGroup from 'layout/ButtonGroup.svelte'
	import Box from 'layout/Box.svelte'

	// Base props
	let className = ''
	export { className as class }

	export let block: Cta = {}
</script>

<section>
	<Container>
		<Box class="dark my-2xl bg-neutral-0 {className}">
			<Prose
				class="max-w-3xl"
				center
			>
				{#if block.heading}
					<h2>{block.heading}</h2>
				{/if}
				{#if block.text}
					<p class="text-lg">{block.text}</p>
				{/if}
				{#if block.button_primary || block.button_secondary}
					<ButtonGroup class="justify-center pt-md">
						{#if block.button_primary}
							<Button href={block.button_primary.href}>{block.button_primary.text}</Button>
						{/if}
						{#if block.button_secondary}
							<Button
								variant="secondary"
								href={block.button_secondary.href}>{block.button_secondary.text}</Button
							>
						{/if}
					</ButtonGroup>
				{/if}
			</Prose>
		</Box>
	</Container>
</section>
