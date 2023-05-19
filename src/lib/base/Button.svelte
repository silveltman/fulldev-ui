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
	class="button inline-flex items-center justify-center rounded-button px-space-4 py-space-3 text-center text-2 font-button leading-[1.25] transition-all active:scale-95 disabled:pointer-events-none disabled:opacity-50
		{variant}
		{className}
	"
	{...$$restProps}
>
	{text}
</svelte:element>
