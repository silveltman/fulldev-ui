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
	class="flex flex-wrap items-center gap-x-md gap-y-xs cursor-pointer{className}"
	{...$$restProps}
>
	<input
		type="checkbox"
		class="checkbox checkbox-sm mr-sm"
		id={name}
		value={name}
		{name}
		{required}
	/>
	{#if content.heading}
		<h6 class="inline">{content.heading}</h6>
	{/if}
	{#if content.text}
		<p class="inline text-sm">{content.text}</p>
	{/if}
</label>
