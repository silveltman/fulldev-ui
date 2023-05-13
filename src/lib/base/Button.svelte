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
	class="button h-12 rounded-button px-5 text-base font-button leading-[1] transition-none disabled:pointer-events-none disabled:opacity-50 size-sm:h-10 size-sm:px-4 size-sm:text-sm size-lg:h-14 size-lg:px-6 size-lg:text-lg
		{variant}
		{className}
	"
	{...$$restProps}
>
	{text}
</svelte:element>
