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
	class="w-full columns-2 gap-x-lg space-y-2xl size-sm:columns-2 size-sm:gap-x-md size-sm:space-y-xl size-lg:columns-1 size-lg:gap-x-xl size-lg:space-y-3xl sm:columns-[308px] size-sm:sm:columns-[220px] size-lg:sm:columns-2 size-lg:md:columns-[385px] [&>*]:break-inside-avoid-column {className}"
>
	<slot {imageSizes} />
</svelte:element>
