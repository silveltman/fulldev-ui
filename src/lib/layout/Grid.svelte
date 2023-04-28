<script lang="ts">
	let className: string = '';
	export { className as class };
	export let as: string = 'div';

	export let size: 'sm' | 'md' | 'lg' = 'lg';
</script>

<svelte:element
	this={as}
	class="grid w-full gap-x-md gap-y-xl md:gap-y-2xl md:gap-x-lg
		{size === 'sm' && 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6'}
		{size === 'md' && 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-4'}
		{size === 'lg' && 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}
        {className}
		"
>
	<slot />
</svelte:element>
