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
	class="gap-x-mdspace-y-lg small:columns-2 large:columns-1 small:sm:columns-[220px] large:sm:columns-2 large:md:columns-[385px] w-full columns-2 sm:columns-[308px] [&>*]:break-inside-avoid-column {className}"
>
	<slot {imageSizes} />
</svelte:element>
