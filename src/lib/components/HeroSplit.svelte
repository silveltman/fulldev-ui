<script>
	import Image from '$lib/base/Image.svelte'
	import Container from './layout/Container.svelte'
	import Split from './layout/Split.svelte'
	import Button from '$lib/base/Button.svelte'
	import Eyebrow from './base/Eyebrow.svelte'
	import ButtonGroup from './layout/ButtonGroup.svelte'

	let className = ''
	export { className as class }

	export let block = {
		eyebrow: 'lorem ipsum',
		heading: ' Lorem ipsum dolor',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam massa, nec ultricies nisl nunc vel nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam massa, nec ultricies nisl nunc vel nisl.',
		button_primary: {
			text: 'Lorem ipsum',
			href: '#'
		},
		button_secondary: {
			text: 'Lorem ipsum',
			href: '#'
		},
		image: {
			src: 'https://images.unsplash.com/photo-1616480461419-8e1b2e1b2b1f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
			alt: 'Lorem ipsum'
		}
	}
</script>

<section class="relative overflow-hidden bg-neutral-0 py-4xl {className}">
	<Container>
		<Split class="lg:items-center">
			<slot name="content">
				<div class="max-w-xl">
					{#if block.eyebrow}
						<Eyebrow>{block.eyebrow}</Eyebrow>
					{/if}

					{#if block.heading}
						<h1>{block.heading}</h1>
					{/if}

					{#if block.text}
						<p class="text-lg">{block.text}</p>
					{/if}

					{#if block.button_primary || block.button_secondary}
						<ButtonGroup>
							{#if block.button_primary}
								<Button
									size="lg"
									href={block.button_primary.href}
									>{block.button_primary.text}
								</Button>
							{/if}
							{#if block.button_secondary}
								<Button
									size="lg"
									variant="secondary"
									href={block.button_secondary.href}
									>{block.button_secondary.text}
								</Button>
							{/if}
						</ButtonGroup>
					{/if}
				</div>
			</slot>

			<slot name="media">
				{#if block.image}
					<Image
						sizes={{ base: '100vw', lg: '50vw', '2xl': '703px' }}
						src={block.image.src}
						alt={block.image.alt}
					/>
				{/if}
			</slot>
		</Split>
	</Container>
</section>
