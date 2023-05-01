<script lang="ts">
	import type { ImageContent } from '$lib/types';

	let className = '';
	export { className as class };
	export let content: ImageContent;

	export let widths: number[] = [320, 640, 1024, 1280, 1920];
	export let loading: 'eager' | 'lazy' = 'lazy';
	export let decoding: 'async' | 'auto' | 'sync' = 'async';
	export let ratio: number | undefined = undefined;

	export let sizes: {
		base?: string;
		sm?: string;
		md?: string;
		lg?: string;
		xl?: string;
		'2xl'?: string;
	} = {
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

	// functions
	function getTransformedSrc(src: string, width: number = 1920) {
		if (!src || !width) return;
		const baseUrl = '/image/upload/';
		const params =
			[`f_auto`, `g_auto`, `q_auto`, `w_${width}`, ratio ? `ar_${ratio},c_crop` : ''].join('/') +
			'/';
		const url = src.replace(baseUrl, baseUrl + params);
		return url;
	}

	// computed
	const srcset = widths
		.map((width) => `${getTransformedSrc(content.src, width)} ${width}w`)
		.join(', ');
</script>

{#if content.src}
	<img
		sizes={content.src.includes('cloudinary') ? sizesString : undefined}
		srcset={content.src.includes('cloudinary') ? srcset : undefined}
		src={getTransformedSrc(content.src)}
		alt={content.alt}
		{loading}
		{decoding}
		class="rounded-image h-auto w-full {className}"
	/>
{/if}
