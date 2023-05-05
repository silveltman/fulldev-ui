<script lang="ts">
	import type { CheckboxContent } from '$lib/types';

	let className = '';
	export { className as Class };

	export let content: CheckboxContent;

	export let required: boolean = false;
	export let name: string;
</script>

<label
	for={name}
	class="flex cursor-pointer flex-wrap items-center gap-x-md gap-y-xs text-sm {className}"
	{...$$restProps}
>
	<input
		type="checkbox"
		class="checkbox"
		id={name}
		value={name}
		{name}
		{required}
	/>
	{#if content.heading}
		<span class="font-subheading">{content.heading}</span>
	{/if}
	{#if content.text}
		<span>{content.text}</span>
	{/if}
</label>
