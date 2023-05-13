<script lang="ts">
	import type { ImageContent, ImageSizes } from '$lib/types';

	let className = '';
	export { className as class };
	export let content: ImageContent;

	export let sizes: ImageSizes = {
		base: '100vw'
	};

	const sizesString: any = `
		${sizes['2xl'] ? `(min-width: 1536px) ${sizes['2xl']},` : ''}
		${sizes.xl ? `(min-width: 1280px) ${sizes.xl},` : ''}
		${sizes.lg ? `(min-width: 1024px) ${sizes.lg},` : ''}
		${sizes.md ? `(min-width: 768px) ${sizes.md},` : ''}
		${sizes.sm ? `(min-width: 640px) ${sizes.sm},` : ''}
		${sizes.base}
	`;
</script>

<img
	sizes={sizesString}
	src={content.src}
	alt={content.alt}
	class={className}
/>
