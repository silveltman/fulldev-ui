<script lang="ts">
	let className = '';
	export { className as class };
	export let href: string;
	export let text: string | null = null;
	export let active: boolean = false;
</script>

<a
	{href}
	class="whitespace-nowrap text-md text-base-11 hover:text-base-12 disabled:pointer-events-none disabled:opacity-50
    {active && 'text-base-12'}
    {className}
	"
	{...$$restProps}
>
	<slot>
		{text}
	</slot>
</a>
