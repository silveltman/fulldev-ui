<script lang="ts">
	import type { ButtonContent } from '$lib/types'
	import { IconChevronRight } from '@tabler/icons-svelte'

	let className = ''
	export { className as class }
	export let content: ButtonContent

	export let variant: 'primary' | 'secondary' | 'tertiary' = 'primary'
	export let size: 'sm' | 'md' | 'lg' = 'md'
	export let rel: string = 'prefetch'
</script>

<svelte:element this={content.href ? 'a' : 'button'}
	on:click
	rel={content.href ? rel : undefined}
	href={content.href}
	class="inline-flex items-center justify-center rounded-button text-center font-medium leading-none disabled:cursor-not-allowed disabled:opacity-50
	
			{size === 'sm' && 'py-3 px-4 text-sm'}
			{size === 'md' && 'py-4 px-6 text-md'}
			{size === 'lg' && 'py-5 px-8 text-lg'}

			{variant === 'primary' && 'shadow-button bg-button-primary text-button-primary'}
			{variant === 'secondary' && 'text-button-secondary ring-1 ring-inset ring-button-secondary hover:ring-2'}
			{variant === 'tertiary' && '!p-0 text-button-tertiary decoration-1 hover:underline'}
			
			{className}
			"
	{...$$restProps}
>
	{content.text}
	{#if variant == 'tertiary'}
		<IconChevronRight
			class="ml-0.5 -translate-y-px"
			stroke={1.3}
			size={20}
		/>
	{/if}
</svelte:element>
