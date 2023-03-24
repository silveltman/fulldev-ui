<script lang="ts">
	// base props
	let className = ''
	export { className as class }

	// image props
	export let src: string =
			'https://res.cloudinary.com/dsnnqav5j/image/upload/v1674074441/myimage.jpg',
		alt: string | undefined = undefined,
		sizes: string = '100vw',
		widths: number[] = [320, 640, 1024, 1280, 1920],
		loading: 'eager' | 'lazy' = 'lazy',
		decoding: 'async' | 'auto' | 'sync' = 'async',
		ratio: number | undefined = undefined

	function getTransformedSrc(src: string, width: number = 1920) {
		const baseUrl = 'https://res.cloudinary.com/dsnnqav5j/image/upload/'
		const params =
			[`f_auto`, `g_auto`, `q_auto`, `w_${width}`, ratio ? `ar_${ratio},c_crop` : ''].join('/') +
			'/'
		const url = src.replace(baseUrl, baseUrl + params)
		return url
	}

	const srcset = widths.map((width) => `${getTransformedSrc(src, width)} ${width}w`).join(', ')
</script>

<img
	{sizes}
	{srcset}
	{alt}
	{loading}
	{decoding}
	class={className}
	src={getTransformedSrc(src)}
/>
