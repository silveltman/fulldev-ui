<script lang="ts">
	import { IconAsterisk } from '@tabler/icons-svelte';

	let className = '';
	export { className as class };
	export let rows: number = 5;
	export let required: boolean = false;
	export let disabled: boolean = false;
	export let id: string;
	export let label: string;
	export let placeholder: string;
</script>

<label
	for={id}
	class="relative flex flex-col gap-1 {className}"
	{...$$restProps}
>
	{#if label}
		<span class="relative text-1 text-base-11">
			{label}
		</span>
	{/if}
	<div class="relative">
		<textarea
			{id}
			name={id}
			{placeholder}
			{rows}
			{required}
			{disabled}
			class="peer w-full rounded-input !border-2 border-base-7 bg-transparent px-space-4 py-space-3 text-base leading-[1.25] placeholder:text-base-11 disabled:pointer-events-none disabled:opacity-50"
		/>
		{#if required}
			<IconAsterisk
				size={12}
				class="absolute right-space-2 top-space-2 text-base-11  peer-disabled:opacity-50"
			/>
		{/if}
	</div>
</label>
