<script lang="ts">
	let className = ''
	export { className as class }
	export let widths: number[] = [320, 640, 1024, 1280, 1920]
	export let loading: 'eager' | 'lazy' = 'lazy'
	export let decoding: 'async' | 'auto' | 'sync' = 'async'
	export let ratio: number | undefined = undefined
	export let alt: string
	export let src: string =
		'https://res.cloudinary.com/dsnnqav5j/image/upload/v1674074441/myimage.jpg'

	export let sizes: {
		'2xl'?: string
		xl?: string
		lg?: string
		md?: string
		sm?: string
		base?: string
	} = {
		base: '100vw'
	}

	const sizesString: any = `
		${sizes['2xl'] ? `(min-width: 1536px) ${sizes['2xl']},` : ''}
		${sizes.xl ? `(min-width: 1280px) ${sizes.xl},` : ''}
		${sizes.lg ? `(min-width: 1024px) ${sizes.lg},` : ''}
		${sizes.md ? `(min-width: 768px) ${sizes.md},` : ''}
		${sizes.sm ? `(min-width: 640px) ${sizes.sm},` : ''}
		${sizes.base}
	`

	// functions
	function getTransformedSrc(src: string, width: number = 1920) {
		const baseUrl = 'https://res.cloudinary.com/dsnnqav5j/image/upload/'
		const params =
			[`f_auto`, `g_auto`, `q_auto`, `w_${width}`, ratio ? `ar_${ratio},c_crop` : ''].join('/') +
			'/'
		const url = src.replace(baseUrl, baseUrl + params)
		return url
	}

	// computed
	const srcset = widths.map((width) => `${getTransformedSrc(src, width)} ${width}w`).join(', ')
</script>

{#if src.includes('cloudinary')}
	<img
		sizes={sizesString}
		{srcset}
		{alt}
		{loading}
		{decoding}
		class="h-auto w-full rounded-image {className}"
		src={getTransformedSrc(src)}
	/>
{:else}
	<img
		{alt}
		{loading}
		{decoding}
		class="h-auto w-full rounded-image {className}"
		{src}
	/>
{/if}
