<script lang="ts">
	import { IconAsterisk } from '@tabler/icons-svelte';

	let className = '';
	export { className as class };
	export let type: 'text' | 'email' | 'password' | 'tel' | 'url' | 'search' = 'text';
	export let required: boolean = false;
	export let id: string;
	export let label: string;
</script>

<label
	for={id}
	class="relative flex items-center {className}"
	{...$$restProps}
>
	<input
		{type}
		{id}
		name={id}
		placeholder={label}
		{required}
		class="peer h-12 w-full rounded-input !border-2 border-base-7 px-2.5 pt-6 text-base leading-[1.5] !ring-0 placeholder:text-base-11 placeholder-shown:py-3 "
	/>
	<span class="absolute top-0.5 px-3 text-xs text-base-11 peer-placeholder-shown:hidden">
		{label}
	</span>
	{#if required}
		<IconAsterisk
			size={12}
			class="absolute top-2 right-2 hidden text-base-11 peer-placeholder-shown:block"
		/>
	{/if}
</label>
