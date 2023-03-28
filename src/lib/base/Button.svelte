<script lang="ts">
	let className = ''
	export { className as class }
	export let variant: 'primary' | 'secondary' | 'tertiary' = 'primary'
	export let size: 'sm' | 'md' | 'lg' = 'md'
	export let color: boolean = false
	export let href: string | undefined = undefined
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	on:click
	{href}
	class="flex items-center justify-center rounded-button text-center leading-none disabled:cursor-not-allowed disabled:opacity-50
	
	{size === 'sm' && 'py-3 px-4 text-body-sm'}
	{size === 'md' && 'py-4 px-6 text-body-md'}
	{size === 'lg' && 'py-5 px-8 text-body-lg'}

    {variant === 'primary' &&
		(color
			? 'bg-primary-700 text-neutral-0 shadow-md hover:bg-primary-800'
			: 'bg-neutral-900 text-neutral-0 shadow-md hover:bg-neutral-800')}

    {variant === 'secondary' &&
		(color
			? 'text-primary-700 ring-1 ring-inset ring-primary-700 hover:ring-2'
			: 'text-neutral-900 ring-1 ring-inset ring-neutral-900 hover:ring-2')}

    {variant === 'tertiary' &&
		(color
			? 'inline !p-0 text-primary-700 decoration-1 hover:underline'
			: 'inline !p-0 text-neutral-900 decoration-1 hover:underline')}
	
	{className}
	"
	{...$$restProps}
>
	<slot />
</svelte:element>
