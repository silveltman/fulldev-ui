<script lang="ts">
	import type { ImageSizes } from '$lib/types';

	let className: string = '';
	export { className as class };
	export let as: string = 'div';
	export let masonry: boolean = false;

	const imageSizes: {
		sm: ImageSizes;
		md: ImageSizes;
		lg: ImageSizes;
	} = {
		sm: {
			base: '50vw',
			sm: '330px'
		},
		md: {
			base: '50vw',
			sm: '461px'
		},
		lg: {
			base: '100vw',
			sm: '50vw',
			md: '576px'
		}
	};
</script>

<svelte:element
	this={as}
	class="w-full gap-x-md gap-y-lg [&>*]:grow
    {masonry
		? 'columns-2 space-y-lg small:columns-2 large:columns-1 sm:columns-[308px] small:sm:columns-[220px] large:sm:columns-2 large:md:columns-[385px] [&>*]:break-inside-avoid-column'
		: 'grid grid-cols-2 small:grid-cols-2 large:grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(308px,1fr))] small:sm:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] large:sm:grid-cols-2 large:md:grid-cols-[repeat(auto-fill,minmax(385px,1fr))]'}
    {className}"
>
	<slot {imageSizes} />
</svelte:element>
