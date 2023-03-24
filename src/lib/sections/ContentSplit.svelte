<script lang="ts">
	import Image from '$lib/base/Image.svelte'

	let className = ''
	export { className as class }

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

<section class="bg-neutral-0 {className}">
	<div class="container flex-split-reverse">
		<div>
			<div class="prose-lg lg:pl-xl xl:pl-2xl">
				<h2 class="">{content.heading}</h2>
				<p>{content.text}</p>
				<ul>
					{#each content.checklist as item}
						<li>{item}</li>
					{/each}
				</ul>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quasi voluptates molestias
					vel perferendis architecto reiciendis eligendi modi vitae fugiat vero eveniet, nostrum
					amet sapiente harum obcaecati aliquam, provident aspernatur. Dignissimos sapiente,
					perferendis similique necessitatibus soluta fugit, tempore quam porro modi voluptatum
					laboriosam debitis beatae excepturi quaerat voluptatem vero voluptates?
				</p>
			</div>
		</div>
		<div>
			<Image ratio={2 / 3} />
		</div>
	</div>
</section>
