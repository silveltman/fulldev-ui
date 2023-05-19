<script lang="ts">
	import { IconAsterisk } from '@tabler/icons-svelte';

	let className = '';
	export { className as class };
	export let type: 'text' | 'email' | 'password' | 'tel' | 'url' | 'search' = 'text';
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
		<input
			{type}
			{id}
			name={id}
			{placeholder}
			{required}
			{disabled}
			class="peer w-full rounded-input !border-none py-space-3 px-space-4 text-2 leading-[1.25] !ring-2 !ring-inset ring-base-7 placeholder:text-base-11 focus:ring-base-8 disabled:pointer-events-none disabled:opacity-50"
		/>
		{#if required}
			<IconAsterisk
				size={12}
				class="absolute right-space-2 top-space-2 text-base-11 peer-disabled:opacity-50"
			/>
		{/if}
	</div>
</label>
