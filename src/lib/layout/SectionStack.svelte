<script lang="ts">
	let className: string = '';
	export { className as class };

	export let center: boolean = false;
</script>

<div
	class="flex flex-col gap-y-3xl
        {center ? 'items-center text-center' : 'items-start text-left'}
        {className}
    "
>
	<slot />
</div>
