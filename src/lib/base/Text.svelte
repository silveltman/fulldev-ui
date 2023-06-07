<script lang="ts">
	let className = '';
	export { className as class };

	export let as: string = 'p';
	export let text: string | null = null;
	export let secondary: boolean = false;
</script>

<svelte:element
	this={as}
	class="text-base-12 {className}
	{secondary ? 'text-sm' : 'text-md'}
	"
	{...$$restProps}
>
	<slot>
		{text}
	</slot>
</svelte:element>
