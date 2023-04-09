<script lang="ts">
	export let center: boolean = false
	export let reverse: boolean = false
</script>

<div
	class="grid grid-cols-2 gap-x-2xl gap-y-3xl lg:grid-cols-2 
        {center && 'lg:items-center'}
		{reverse && '[&>*:first-child]:order-last'}
    "
>
	<slot />
</div>
