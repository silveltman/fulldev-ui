<script lang="ts">
	import type { ImageSizes } from '$lib/types';

	let className = '';
	export { className as class };
	export let src: string;
	export let alt: string;
	export let orientation: 'landscape' | 'portrait' | 'square' | undefined = undefined;
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

{#if orientation}
	<div
		class="h-auto w-full {className}
		{orientation === 'landscape' && 'aspect-w-4 aspect-h-3'}
		{orientation === 'portrait' && 'aspect-w-5 aspect-h-7'}
		{orientation === 'square' && 'aspect-w-1 aspect-h-1'}
	"
	>
		<img
			sizes={sizesString}
			{src}
			{alt}
			class="h-full w-full object-cover"
		/>
	</div>
{:else}
	<img
		sizes={sizesString}
		{src}
		{alt}
		class="h-auto w-full object-cover {className}"
	/>
{/if}
