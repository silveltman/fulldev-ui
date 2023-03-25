<script lang="ts">
	import type { Cta } from '$lib/types'
	import Button from '$lib/base/Button.svelte'

	// Base props
	let className = ''
	export { className as class }

	export let cms: Cta
</script>

<section class="bg-neutral-0 py-2xl {className}">
	<div class="container">
		<div class="dark rounded-3xl bg-neutral-0 p-2xl">
			<div class="prose mx-auto flex max-w-3xl flex-col items-center text-center">
				{#if cms.heading}
					<h2>{cms.heading}</h2>
				{/if}
				{#if cms.text}
					<p class="text-body-lg">{cms.text}</p>
				{/if}
				{#if cms.button_primary || cms.button_secondary}
					<div class="button-group justify-center pt-md">
						{#if cms.button_primary}
							<Button href={cms.button_primary.href}>{cms.button_primary.text}</Button>
						{/if}
						{#if cms.button_secondary}
							<Button
								variant="secondary"
								href={cms.button_secondary.href}>{cms.button_secondary.text}</Button
							>
						{/if}
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>
