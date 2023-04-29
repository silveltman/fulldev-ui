<script lang="ts">
	let className: string = '';
	export { className as class };

	export let center: boolean = false;
</script>

<div
	class="grid grid-cols-1 gap-x-3xl gap-y-3xl lg:grid-cols-2 
        {center ? 'lg:items-center' : 'lg:items-start'}
        {className}
    "
>
	<slot />
</div>
