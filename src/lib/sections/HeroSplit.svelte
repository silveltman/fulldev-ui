<script lang="ts">
	import Button from '$lib/base/Button.svelte'
	import Image from '$lib/base/Image.svelte'

	let className = ''
	export { className as class }

	export let content: any = {
		heading: 'Quality animal feed from the Netherlands',
		text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas ea quibusdam exercitationem?',
		buttonPrimary: {
			text: 'Order now',
			href: '#'
		},
		buttonSecondary: {
			text: 'Contact us',
			href: '#'
		},
		image: {
			src: 'https://res.cloudinary.com/dsnnqav5j/image/upload/v1674074441/myimage.jpg',
			alt: 'My image'
		}
	}

	export let color: boolean = false
</script>

<section class="bg-neutral-0 {className}">
	<div class="container flex-split-reverse items-start max-2xl:p-0 lg:items-center">
		<!-- image -->
		<div class="relative">
			<Image
				src={content.image.src}
				alt={content.image.alt}
			/>
		</div>

		<!-- content -->
		<div class="container py-3xl lg:m-0 lg:pr-xl 2xl:px-0">
			<div class="prose max-w-xl">
				<h1>{content.heading}</h1>
				<p class="text-body-lg">{content.text}</p>
				<div class="button-group">
					<Button
						{color}
						size="lg"
						test="0"
						href={content.buttonPrimary.href}
						>{content.buttonPrimary.text}
					</Button>
					<Button
						{color}
						size="lg"
						type="secondary"
						href={content.buttonSecondary.href}
						>{content.buttonSecondary.text}
					</Button>
				</div>
			</div>
		</div>
	</div>
</section>
