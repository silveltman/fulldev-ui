<script lang="ts">
	import { IconAsterisk } from '@tabler/icons-svelte';

	let className = '';
	export { className as class };
	export let required: boolean = false;
	export let rows: number = 5;
	export let id: string;
	export let label: string;
</script>

<label
	for={id}
	class="relative flex {className}"
	{...$$restProps}
>
	<textarea
		{id}
		name={id}
		placeholder={label}
		{rows}
		{required}
		class="peer w-full rounded-input !border-2 border-base-7 bg-transparent px-2.5 pt-7 pb-3 text-base placeholder:text-base-11 placeholder-shown:py-3"
	/>
	<span class="absolute top-2 px-3 text-xs text-base-11 peer-placeholder-shown:hidden">
		{label}
	</span>
	{#if required}
		<IconAsterisk
			size={12}
			class="absolute right-2 top-1 hidden text-base-11 peer-placeholder-shown:block"
		/>
	{/if}
</label>
