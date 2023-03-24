<script lang="ts">
	// Base props
	let className = '';
	export { className as class };

	// Content props
	export let href: string | undefined = undefined;

	// Style props
	export let type: 'primary' | 'secondary' | 'tertiary' = 'primary';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let color: boolean = false;
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	on:click
	{href}
	class="flex items-center justify-center rounded-xl text-center leading-none disabled:opacity-50 disabled:cursor-not-allowed
	
	{size === 'sm' && 'py-3 px-4 text-body-sm'}
	{size === 'md' && 'py-4 px-6 text-body-md'}
	{size === 'lg' && 'py-5 px-8 text-body-lg'}

    {type === 'primary' &&
		(color
			? 'bg-primary-700 hover:bg-primary-800 text-neutral-0 shadow-md'
			: 'bg-neutral-900 hover:bg-neutral-800 text-neutral-0 shadow-md')}

    {type === 'secondary' &&
		(color
			? 'ring-inset ring-1 hover:ring-2 ring-primary-700 text-primary-700'
			: 'ring-inset ring-1 hover:ring-2 ring-neutral-900 text-neutral-900')}

    {type === 'tertiary' &&
		(color
			? 'inline text-primary-700 hover:underline decoration-1 !p-0'
			: 'inline text-neutral-900 hover:underline decoration-1 !p-0')}
	
	{className}
	"
	{...$$restProps}
>
	<slot />
</svelte:element>
