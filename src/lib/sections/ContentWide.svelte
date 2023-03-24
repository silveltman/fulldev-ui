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
	<div class="container prose-lg">
		<h2>{content.heading}</h2>
		<p class="lg:columns-2">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit cumque saepe quae possimus
			soluta? Dolores quam voluptatum et natus quod nesciunt ut rem at impedit placeat nostrum
			blanditiis, molestias itaque ipsa. Voluptatum eaque nesciunt laborum molestiae libero eius!
			Amet error in aut, quasi accusamus sint perferendis, numquam harum tenetur ratione deleniti
			libero veritatis nemo maxime cumque possimus consequuntur sapiente consectetur incidunt!
			Aspernatur earum exercitationem minus commodi doloribus accusantium perferendis facere
			nesciunt dolorem sint asperiores sed.
		</p>
		<Image ratio={16 / 7} />
	</div>
</section>
