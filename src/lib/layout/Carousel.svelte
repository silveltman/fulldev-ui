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
	class="gap-x-mdoverflow-x-auto pb-mdmd:-mx-12 [&>*]:small:w-40 [&>*]:large:w-80 [&>*]:small:sm:w-[218px] [&>*]:large:sm:w-[448px] scrollbar -mx-4 flex snap-x snap-start items-start scroll-smooth  px-4 md:px-12 2xl:-mx-[calc(50vw-720px)] 2xl:px-[calc(50vw-720px)] [&>*]:w-60 [&>*]:shrink-0 [&>*]:snap-center [&>*]:sm:w-[320px] {className}"
>
	<slot {imageSizes} />
</svelte:element>
