<script lang="ts">
	import Image from '$lib/base/Image.svelte'

	let className = ''
	export { className as class }

	export let reverse: boolean = false

	export let content: any = {
		heading: 'Quality animal feed from the Netherlands',
		text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas ea quibusdam exercitationem?',
		checklist: [
			'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
		],
		image: {
			src: 'https://res.cloudinary.com/dsnnqav5j/image/upload/v1674074441/myimage.jpg',
			alt: 'My image'
		}
	}
</script>

<section class="bg-neutral-0 py-2xl {className}">
	<div class="container items-center {reverse ? 'flex-split-reverse' : 'flex-split'}">
		<div>
			<div class="prose {reverse ? 'lg:pl-xl xl:pl-2xl' : 'lg:pr-xl xl:pr-2xl'}">
				<h2>{content.heading}</h2>
				<ul class="flex flex-col gap-sm">
					{#each content.checklist as item}
						<li>{item}</li>
					{/each}
				</ul>
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
