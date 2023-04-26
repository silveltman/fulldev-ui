<script lang="ts">
	import type { RadioContent } from '$lib/types'

	export let options: RadioContent[] = []

	let className = ''
	export { className as class }
	// let content: RadioContent
</script>

<fieldset
	class="flex flex-col gap-y-md {className}"
	{...$$restProps}
>
	{#each options as option}
		<div class="flex items-start">
			<input
				type="radio"
				class="mt-xs"
				id={option.value}
				name={option.name}
				required={option.required}
			/>
			<label
				for={option.value}
				class="flex cursor-pointer flex-col pl-md"
			>
				{#if option.heading}
					<h6>{option.heading}</h6>
				{/if}
				{#if option.text}
					<p>{option.text}</p>
				{/if}
			</label>
		</div>
	{/each}
</fieldset>
