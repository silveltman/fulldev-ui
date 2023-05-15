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
	class="grid w-full grid-cols-2 gap-x-lg gap-y-xl size-sm:grid-cols-2 size-sm:gap-x-md size-sm:gap-y-lg size-lg:grid-cols-1 size-lg:gap-x-xl size-lg:gap-y-2xl sm:grid-cols-[repeat(auto-fill,minmax(308px,1fr))] size-sm:sm:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] size-lg:sm:grid-cols-2 size-lg:md:grid-cols-[repeat(auto-fill,minmax(385px,1fr))] {className}"
>
	<slot {imageSizes} />
</svelte:element>
