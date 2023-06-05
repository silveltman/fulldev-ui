<script lang="ts">
	export let className = '';
	export { className as class };
	export let as: string = 'div';
	export let ratio: number = 1;
</script>

<svelte:element
	this={as}
	style="padding-bottom:{(1 / ratio) * 100}%"
	class="relative w-full overflow-hidden [&>*]:absolute [&>*]:inset-0 [&>*]:h-full [&>*]:w-full {className}"
	{...$$restProps}
>
	<slot />
</svelte:element>
