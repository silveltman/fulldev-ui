<script lang="ts">
	import type { Hero } from '$lib/types'
	import Container from 'layout/Container.svelte'
	import Eyebrow from 'base/Eyebrow.svelte'
	import Stack from 'layout/Stack.svelte'
	import Form from 'base/Form.svelte'
	import Textfield from 'base/Textfield.svelte'
	import Textarea from 'base/Textarea.svelte'
	import Button from 'base/Button.svelte'

	let className = ''
	export { className as class }

	export let block: Hero = {}
</script>

<section class="bg-neutral-0 py-4xl {className}">
	<Container>
		<Stack class="flex flex-col items-center">
			<div class="mx-auto inline-block max-w-2xl text-center">
				{#if block.eyebrow}
					<Eyebrow>lorem opsu</Eyebrow>
				{/if}

				{#if block.heading}
					<h2>{block.heading}</h2>
				{/if}

				{#if block.text}
					<p class="text-lg">{block.text}</p>
				{/if}
			</div>

			<slot>
				<Form action="/bericht-verstuurd">
					<Textfield
						name="naam"
						label="Naam"
					/>
					<Textfield
						name="tel"
						label="Email"
						type="email"
						required
					/>
					<Textarea
						name="probleem en type"
						label="Probleem en type"
					/>
					<Button color>Verstuur</Button>
				</Form>
			</slot>
		</Stack>
	</Container>
</section>
