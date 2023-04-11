<script lang="ts">
	import { IconChevronRight } from '@tabler/icons-svelte'

	let className = ''
	export { className as class }
	export let variant: 'primary' | 'secondary' | 'tertiary' = 'primary'
	export let size: 'sm' | 'md' | 'lg' = 'md'
	export let rel: string = 'prefetch'
	export let href: string | undefined = undefined
	export let text: string = ''
</script>

{#if text}
	<svelte:element
		this={href ? 'a' : 'button'}
		on:click
		rel={href ? rel : undefined}
		{href}
		class="flex items-center justify-center rounded-button text-center font-medium leading-none disabled:cursor-not-allowed disabled:opacity-50
	
	{size === 'sm' && 'py-3 px-4 text-sm'}
	{size === 'md' && 'py-4 px-6 text-md'}
	{size === 'lg' && 'py-5 px-8 text-lg'}

	{variant === 'primary' && 'shadow-button bg-button-primary text-button-primary'}
	{variant === 'secondary' &&
			'text-button-secondary ring-button-secondary ring-1 ring-inset hover:ring-2'}
	{variant === 'tertiary' && 'text-button-tertiary !p-0 decoration-1 hover:underline'}
	
	{className}
	"
		{...$$restProps}
	>
		{text}

		{#if variant == 'tertiary'}
			<IconChevronRight
				class="ml-0.5 -translate-y-px"
				stroke={1.3}
				size={20}
			/>
		{/if}
	</svelte:element>
{/if}
