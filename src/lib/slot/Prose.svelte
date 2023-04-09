<script lang="ts">
	import ButtonGroup from 'layout/ButtonGroup.svelte'
	import Button from 'base/Button.svelte'
	import Eyebrow from 'base/Eyebrow.svelte'

	interface Prose {
		eyebrow?: string
		heading?: string
		text?: string
		html?: string
		button_primary?: any
		button_secondary?: any
	}

	export const block: Prose = {
		eyebrow: 'lorem ipsum',
		heading: 'Lorem ipsum dolor',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		html: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>',
		button_primary: {
			text: 'Lorem ipsum',
			href: '#'
		},
		button_secondary: {
			text: 'Lorem ipsum',
			href: '#'
		}
	}

	let className = ''
	export { className as class }
	export let center: boolean = false
	export let size: 'lg' | 'md' | 'sm' = 'md'
</script>

<div
	class="c-prose {className}"
	class:mx-auto={center}
	class:text-center={center}
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
