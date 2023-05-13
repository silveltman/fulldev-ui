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
	class="size-lg w-full columns-2 gap-x-0 size-sm:columns-2 size-lg:columns-1 sm:columns-[308px] size-sm:sm:columns-[220px] size-lg:sm:columns-2 size-lg:md:columns-[385px] [&>*]:break-inside-avoid-column {className}"
>
	<slot {imageSizes} />
</svelte:element>
