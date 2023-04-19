<script lang="ts">
	export let type: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number' = 'text'
	export let required: boolean = false
	export let name: string = type

	export let options: any = []

	// no content prop
</script>

<fieldset class="flex flex-col gap-y-md">
	{#each options as option}
		<div class="flex items-start">
			<input
				type="radio"
				class="mt-xs"
				id={option.value}
				{name}
				{required}
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
