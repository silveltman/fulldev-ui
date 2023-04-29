<script lang="ts">
	import type { CheckboxContent } from '$lib/types';

	let className = '';
	export { className as Class };

	export let content: CheckboxContent;

	export let required: boolean = false;
	export let name: string;
</script>

<div
	class="flex items-start {className}"
	{...$$restProps}
>
	<input
		type="checkbox"
		class="mt-xs"
		id={name}
		{name}
		{required}
	/>
	<label
		for={name}
		class="flex cursor-pointer flex-col pl-md"
	>
		{#if content.heading}
			<h6>{content.heading}</h6>
		{/if}
		{#if content.text}
			<p>{content.text}</p>
		{/if}
	</label>
</div>
