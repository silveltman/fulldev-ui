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
	class="scrollbar -mx-4 flex snap-x snap-start items-start gap-x-md overflow-x-auto scroll-smooth px-4 pb-md md:-mx-12 md:px-12 2xl:-mx-[calc(50vw-720px)] 2xl:px-[calc(50vw-720px)] [&>*]:w-60 [&>*]:shrink-0 [&>*]:snap-center [&>*]:small:w-40 [&>*]:large:w-80 [&>*]:sm:w-[320px] [&>*]:small:sm:w-[218px] [&>*]:large:sm:w-[448px] {className}"
	{...$$restProps}
>
	<slot {imageSizes} />
</svelte:element>
