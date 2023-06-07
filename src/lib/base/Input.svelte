<script lang="ts">
	let className = '';
	export { className as class };
	export let type: 'text' | 'email' | 'password' | 'tel' | 'url' | 'search' | 'number' = 'text';
	export let required: boolean = false;
	export let disabled: boolean = false;
	export let id: string;
	export let placeholder: string | null = null;
	export let value: string | null = null;
</script>

<input
	name={id}
	{id}
	{type}
	{placeholder}
	{required}
	{disabled}
	{value}
	class="rounded-input !border-0 bg-transparent px-md py-3 text-base-12 !ring-2 !ring-inset ring-base-7 placeholder:text-base-11 focus:ring-base-8 disabled:pointer-events-none disabled:opacity-50 small:py-2 large:py-4
	{className}
	"
	{...$$restProps}
/>
