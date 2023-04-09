<script lang="ts">
	import type { Prose } from '$lib/types'
	import ButtonGroup from 'layout/ButtonGroup.svelte'
	import Button from 'base/Button.svelte'
	import Eyebrow from 'base/Eyebrow.svelte'

	// Styling props
	let className = ''
	export { className as class }
	export let size: 'lg' | 'md' | 'sm' = 'md'

	// Content props
	export let block: Prose
	//
</script>

<div
	class="slot-prose {className}"
	class:max-w-3xl={size === 'lg'}
	class:max-w-2xl={size === 'md'}
	class:max-w-lg={size === 'sm'}
>
	{#if block.eyebrow}
		<Eyebrow
			class="
				{size === 'lg' && 'mb-xl'}
				{size === 'md' && 'mb-lg'}
				{size === 'sm' && 'mb-md'}
			"
			{size}
			text={block.eyebrow}
		/>
	{/if}

	{#if block.heading}
		{#if size === 'lg'}
			<h1>{block.heading}</h1>
		{:else if (size = 'md')}
			<h2>{block.heading}</h2>
		{:else if (size = 'sm')}
			<h3>{block.heading}</h3>
		{/if}
	{/if}

	{#if block.text}
		<p
			class="pt-lg"
			class:text-lg={size === 'lg'}
		>
			{block.text}
		</p>
	{:else if block.html}
		<div class="c-html pt-lg">
			{@html block.html}
		</div>
	{/if}

	{#if block.button_primary || block.button_secondary}
		<ButtonGroup class="mt-2xl">
			{#if block.button_primary}
				<Button
					{size}
					{...block.button_primary}
				/>
			{/if}
			{#if block.button_secondary}
				<Button
					{size}
					variant="secondary"
					{...block.button_secondary}
				/>
			{/if}
		</ButtonGroup>
	{/if}
</div>

<style lang="postcss">
	.prose {
		:global(p:not(:first-child)),
		:global(ul:not(:first-child)),
		:global(ol:not(:first-child)),
		:global(blockquote:not(:first-child)) {
			@apply mt-lg;
		}
	}
</style>
