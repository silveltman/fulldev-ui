<script lang="ts">
	import type { ImageSizes } from '$lib/types';

	let className: string = '';
	export { className as class };
	export let as: string = 'div';

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
	class="grid w-full grid-cols-2 gap-x-md gap-y-lg small:grid-cols-2 large:grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(308px,1fr))] small:sm:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] large:sm:grid-cols-2 large:md:grid-cols-[repeat(auto-fill,minmax(385px,1fr))] {className}"
>
	<slot {imageSizes} />
</svelte:element>
