<script lang="ts">
	let className = '';
	export { className as class };
	export let rows: number = 5;
	export let required: boolean = false;
	export let disabled: boolean = false;
	export let id: string;
	export let placeholder: string | null = null;
</script>

<textarea
	{id}
	name={id}
	{placeholder}
	{rows}
	{required}
	{disabled}
	class="rounded-input !border-none bg-transparent p-md text-md leading-[1] text-base-12 !ring-2 !ring-inset ring-base-7 placeholder:text-base-11 focus:ring-base-8 disabled:pointer-events-none disabled:opacity-50
	{className}
	"
	{...$$restProps}
/>
