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
			base: '160px',
			sm: '218px'
		},
		md: {
			base: '240px',
			sm: '320px'
		},
		lg: {
			base: '320px',
			sm: '448px'
		}
	};
</script>

<svelte:element
	this={as}
	class="scrollbar flex snap-x snap-start items-start gap-x-md overflow-x-scroll scroll-smooth pb-md max-sm:-mx-4  max-sm:px-4 [&>*]:w-60 [&>*]:shrink-0 [&>*]:snap-center [&>*]:size-sm:w-40 [&>*]:size-lg:w-80 [&>*]:sm:w-[320px] [&>*]:size-sm:sm:w-[218px] [&>*]:size-lg:sm:w-[448px] {className}"
>
	<slot {imageSizes} />
</svelte:element>
