<script lang="ts">
	let className = '';
	export { className as class };
	export let href: string;
	export let text: string;
	export let activePathname: string | undefined = '/';
</script>

<a
	{href}
	class="whitespace-nowrap text-base-11 hover:text-base-12
    {activePathname === href && 'text-base-12'}
    {className}
	"
	{...$$restProps}
>
	<slot>
		{text}
	</slot>
</a>
