<script lang="ts">
	let className = ''
	export { className as class }
	export let sizes: string = '100vw'
	export let widths: number[] = [320, 640, 1024, 1280, 1920]
	export let loading: 'eager' | 'lazy' = 'lazy'
	export let decoding: 'async' | 'auto' | 'sync' = 'async'
	export let ratio: number | undefined = undefined
	export let alt: string | undefined = undefined
	export let src: string =
		'https://res.cloudinary.com/dsnnqav5j/image/upload/v1674074441/myimage.jpg'

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

<img
	{sizes}
	{srcset}
	{alt}
	{loading}
	{decoding}
	class={className}
	src={getTransformedSrc(src)}
/>
