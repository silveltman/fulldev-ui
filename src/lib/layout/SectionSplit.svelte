<script lang="ts">
	export let center: boolean = false
	export let reverse: boolean = false
</script>

<div
	class="grid grid-cols-1 gap-x-2xl gap-y-3xl lg:grid-cols-2
		lg:[&>*:nth-child(3)]:col-start-2 lg:[&>*:nth-child(3)]:row-span-2 lg:[&>*:nth-child(3)]:row-start-1

        {center && 'lg:items-center'}
		{reverse && '[&>*:first-child]:order-last'}
    "
>
	<slot />
</div>
<!-- [&>*:nth-child(3)]:col-start-2 [&>*:nth-child(3)]:row-span-2 [&>*:nth-child(3)]:row-start-1 -->
