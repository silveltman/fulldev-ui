<script lang="ts">
	import type { CardContent } from '$lib/types'
	import Image from 'base/Image.svelte'
	import Person from 'base/Person.svelte'

	let className = ''
	export { className as class }
	export let content: CardContent
	//
</script>

<div class="flex flex-col gap-xl {className}">
	<Image content={content.image} />
	<div class="flex flex-col gap-sm">
		<h4>{content.heading}</h4>
		<p>{content.textarea}</p>
	</div>
	{#if content.person}
		<Person content={content.person} />
	{/if}
</div>
