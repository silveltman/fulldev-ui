<script lang="ts">
	import Button from '$lib/base/Button.svelte'

	// Base props
	let className = ''
	export { className as class }
	export let color: boolean = true

	export let content: any = {
		heading: 'Quality animal feed from the Netherlands',
		text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
		buttonPrimary: {
			text: 'Order now',
			href: '#'
		},
		buttonSecondary: {
			text: 'Contact us',
			href: '#'
		}
	}
</script>

<section class={className}>
	<div class="container">
		<div class="rounded-3xl bg-neutral-0 p-xl">
			<div class="mx-auto flex max-w-3xl flex-col items-center text-center">
				<h2>{content.heading}</h2>
				<p class="mb-lg text-body-lg">{content.text}</p>
				<div class="flex w-full flex-col gap-md sm:flex-row sm:justify-center">
					<Button
						{color}
						href={content.buttonPrimary.href}>{content.buttonPrimary.text}</Button
					>
					<Button
						type="secondary"
						{color}
						href={content.buttonSecondary.href}>{content.buttonSecondary.text}</Button
					>
				</div>
			</div>
		</div>
	</div>
</section>
