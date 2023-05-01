<script lang="ts">
	let className: string = '';
	export { className as class };
	export let as: string = 'div';
	export let size: 'sm' | 'md' | 'lg' = 'md';
</script>

<svelte:element
	this={as}
	class="w-full gap-x-md space-y-xl md:gap-x-lg md:space-y-2xl [&>*]:break-inside-avoid-column
		{size === 'sm' && 'columns-2 sm:columns-3 lg:columns-6'}
		{size === 'md' && 'columns-2 sm:columns-2 lg:columns-4'}
		{size === 'lg' && 'columns-1 sm:columns-2 lg:columns-3'}
        {className}
    "
>
	<slot />
</svelte:element>
