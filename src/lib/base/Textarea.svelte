<script lang="ts">
	import { IconAsterisk } from '@tabler/icons-svelte';

	let className = '';
	export { className as class };
	export let rows: number = 5;
	export let required: boolean = false;
	export let disabled: boolean = false;
	export let id: string;
	export let label: string | null = null;
	export let placeholder: string | null = null;
</script>

<label
	for={id}
	class="relative flex flex-col gap-xs {className}"
	{...$$restProps}
>
	{#if label}
		<span class="relative text-sm text-base-11">
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
			class="peer block w-full rounded-input !border-none bg-transparent p-md text-md leading-[1] text-base-12 !ring-2 !ring-inset ring-base-7 placeholder:text-base-11 focus:ring-base-8 disabled:pointer-events-none disabled:opacity-50"
		/>
		{#if required}
			<IconAsterisk
				size={12}
				class="absolute right-sm top-sm text-base-11  peer-disabled:opacity-50"
			/>
		{/if}
	</div>
</label>
