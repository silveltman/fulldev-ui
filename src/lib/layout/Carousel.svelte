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
	class="scrollbar -mx-4 flex snap-x snap-start items-start gap-x-md overflow-x-scroll scroll-smooth px-4 pb-md md:-mx-2xl md:px-2xl 2xl:-mx-[calc(50vw-720px)] 2xl:px-[calc(50vw-720px)]  [&>*]:w-60 [&>*]:shrink-0 [&>*]:snap-center [&>*]:size-sm:w-40 [&>*]:size-lg:w-80 [&>*]:sm:w-[320px] [&>*]:size-sm:sm:w-[218px] [&>*]:size-lg:sm:w-[448px] {className}"
>
	<slot {imageSizes} />
</svelte:element>
