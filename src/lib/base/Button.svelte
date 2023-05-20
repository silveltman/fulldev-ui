<script lang="ts">
	let className = '';
	export { className as class };

	export let text: string;
	export let href: string | undefined = undefined;
	export let variant: 'solid' | 'ringed' | 'soft' | 'ghost' = 'soft';
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	on:click
	type={href ? undefined : 'button'}
	{href}
	class="button p-mdtext-md inline-flex items-center justify-center rounded-button text-center font-button leading-[1] transition-all active:scale-95 disabled:pointer-events-none disabled:opacity-50
		{variant}
		{className}
	"
	{...$$restProps}
>
	<slot>
		{text}
	</slot>
</svelte:element>
