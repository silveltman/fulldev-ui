<script lang="ts">
	import type { ImageSizes } from '$lib/types';

	let className: string = '';
	export { className as class };
	export let as: string = 'div';
	export let size: 'sm' | 'md' | 'lg' = 'md';

	const imageSizes: {
		sm: ImageSizes;
		md: ImageSizes;
		lg: ImageSizes;
	} = {
		sm: {
			base: '50vw',
			sm: '33vw',
			lg: '16vw',
			'2xl': '256px'
		},
		md: {
			base: '50vw',
			lg: '25vw',
			'2xl': '384px'
		},
		lg: {
			base: '100vw',
			md: '50vw',
			lg: '33vw',
			'2xl': '512px'
		}
	};
</script>

<svelte:element
	this={as}
	class="w-full gap-x-md space-y-xl md:gap-x-lg md:space-y-2xl [&>*]:break-inside-avoid-column
		{size === 'sm' && 'columns-2 sm:columns-3 lg:columns-6'}
		{size === 'md' && 'columns-2 lg:columns-4'}
		{size === 'lg' && 'columns-1 md:columns-2 lg:columns-3'}
        {className}
    "
>
	<slot {imageSizes} />
</svelte:element>
