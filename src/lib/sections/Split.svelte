<script lang="ts">
	import Image from '$lib/base/Image.svelte'

	let className = ''
	export { className as class }

	export let reverse: boolean = false

	export let content: any = {
		subheading: 'Lorem ipsum',
		heading: 'Quality animal feed from the Netherlands',
		image: {
			src: 'https://res.cloudinary.com/dsnnqav5j/image/upload/v1674074441/myimage.jpg',
			alt: 'My image'
		},
		html: '<ul><li>Lorem ipsum</li><li>Lorem ipsum</li><li>Lorem ipsummm</li></ul>'
	}
</script>

<section class="bg-neutral-0 py-2xl {className}">
	<div class="container items-center {reverse ? 'flex-split-reverse' : 'flex-split'}">
		<div>
			<div class="prose {reverse ? 'lg:pl-xl xl:pl-2xl' : 'lg:pr-xl xl:pr-2xl'}">
				<h2>{content.heading}</h2>
				{@html content.html}
			</div>
		</div>
		<div class="relative">
			<Image
				src={content.image.src}
				alt={content.image.alt}
			/>
		</div>
	</div>
</section>
