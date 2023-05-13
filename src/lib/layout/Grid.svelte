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

	// const imageSizes = {
	// 	sm: '(max-width: 640px) 50vw, 330px',
	// 	md: '(max-width: 640px) 50vw, 461px',
	// 	lg: '(max-width: 640px) 100vw, (max-width: 768px) 50vw, 576px'
	// };
</script>

<svelte:element
	this={as}
	class="size-lg grid w-full grid-cols-2 size-sm:grid-cols-2 size-lg:grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(308px,1fr))] size-sm:sm:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] size-lg:sm:grid-cols-2 size-lg:md:grid-cols-[repeat(auto-fit,minmax(385px,1fr))] {className}"
>
	<slot {imageSizes} />
</svelte:element>

<svelte:element
	this={as}
	class="size-lg w-full columns-2 gap-x-0 size-sm:columns-2 size-lg:columns-1 sm:columns-[308px] size-sm:sm:columns-[220px] size-lg:sm:columns-2 size-lg:md:columns-[385px] {className}"
>
	<slot {imageSizes} />
</svelte:element>
