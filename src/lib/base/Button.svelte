<script lang="ts">
	import { IconChevronRight } from '@tabler/icons-svelte'

	let className = ''
	export { className as class }
	export let variant: 'primary' | 'secondary' | 'tertiary' = 'primary'
	export let size: 'sm' | 'md' | 'lg' = 'md'
	export let color: boolean = false
	export let rel: string | undefined = 'prefetch'
	export let href: string | undefined = undefined
	export let text: string = 'Lorem ipsum'
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	on:click
	rel={href ? rel : undefined}
	{href}
	class="flex items-center justify-center rounded-button text-center leading-none disabled:cursor-not-allowed disabled:opacity-50
	
	{size === 'sm' && 'py-3 px-4 text-sm'}
	{size === 'md' && 'py-4 px-6 text-md'}
	{size === 'lg' && 'py-5 px-8 text-lg'}

    {variant === 'primary' &&
		(color
			? 'bg-primary-700 text-neutral-0 shadow-md hover:bg-primary-600'
			: 'bg-neutral-1000 text-neutral-0 shadow-md hover:bg-neutral-800')}

    {variant === 'secondary' &&
		(color
			? 'text-primary-700 ring-1 ring-inset ring-primary-700 hover:ring-2'
			: 'text-neutral-1000 ring-1 ring-inset ring-neutral-1000 hover:ring-2')}

    {variant === 'tertiary' &&
		(color
			? '!p-0 text-primary-700 decoration-1 hover:underline'
			: '!p-0 text-neutral-1000 decoration-1 hover:underline')}
	
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
