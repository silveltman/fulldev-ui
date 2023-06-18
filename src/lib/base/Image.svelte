<script lang="ts">
	import type { ImageSizesValue } from '$lib/types';

	let className = '';
	export { className as class };
	export let src: string;
	export let alt: string;
	export let sizes: ImageSizesValue | undefined = undefined;
	// const sizesString: any = `
	// 	${sizes['2xl'] ? `(min-width: 1536px) ${sizes['2xl']},` : ''}
	// 	${sizes.xl ? `(min-width: 1280px) ${sizes.xl},` : ''}
	// 	${sizes.lg ? `(min-width: 1024px) ${sizes.lg},` : ''}
	// 	${sizes.md ? `(min-width: 768px) ${sizes.md},` : ''}
	// 	${sizes.sm ? `(min-width: 640px) ${sizes.sm},` : ''}
	// 	${sizes.base}
	// `;
</script>

<img
	{sizes}
	{src}
	{alt}
	{...$$restProps}
	class="block h-auto w-full min-w-0 rounded-image {className}"
/>
