<script lang="ts">
	import type { TextAreaContent } from '$lib/types';

	let className = '';
	export { className as class };
	export let content: TextAreaContent;

	export let required: boolean = false;
	export let name: string;
	export let rows: number = 5;
</script>

<div
	class="form-control {className}"
	{...$$restProps}
>
	{#if content.label}
		<label
			for={name}
			class="label text-sm"
		>
			{content.label}
			{#if required}
				*
			{/if}
		</label>
	{/if}
	<textarea
		id={name}
		{rows}
		{name}
		placeholder={content.placeholder}
		{required}
		class="textarea-bordered textarea border-middle-200 text-sm"
	/>
</div>
