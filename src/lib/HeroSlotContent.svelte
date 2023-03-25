<script lang="ts">
	import type { Hero } from '$lib/types'
	import Button from '$lib/base/Button.svelte'
	import Eyebrow from './base/Eyebrow.svelte'

	let className = ''
	export { className as class }

	export let align: 'start' | 'center' = 'start'

	export let cms: Hero
</script>

<div
	class="prose flex max-w-3xl flex-col {className}"
	class:items-center={align === 'center'}
	class:text-center={align === 'center'}
	class:mx-auto={align === 'center'}
	class:items-start={align === 'start'}
	{...$$restProps}
>
	{#if cms.eyebrow}
		<Eyebrow>lorem opsu</Eyebrow>
	{/if}
	<h1>{cms.heading}</h1>
	{#if cms.text}
		<p class="text-body-lg">{cms.text}</p>
	{/if}
	{#if cms.button_primary || cms.button_secondary}
		<div class="button-group">
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
		</div>
	{/if}
</div>
