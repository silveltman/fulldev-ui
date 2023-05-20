<script lang="ts">
	let className: string = '';
	export { className as class };
	export let as: string = 'div';
	export let center: boolean = false;
</script>

<svelte:element
	this={as}
	class="flex w-full flex-col gap-y-space-7
        {center ? 'items-center text-center' : 'items-start text-left'}
        {className}
    "
>
	<slot />
</svelte:element>
