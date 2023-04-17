<script lang="ts">
	import type { Layout } from '$lib/types'

	export let layout: Layout = {}
</script>

<div
	class="grid grid-cols-1 gap-x-2xl gap-y-3xl lg:grid-cols-2
		lg:[&>*:nth-child(3)]:col-start-2 lg:[&>*:nth-child(3)]:row-span-2 lg:[&>*:nth-child(3)]:row-start-1

        {layout.center && 'lg:items-center'}
		{layout.reverse && '[&>*:first-child]:order-last'}
    "
>
	<slot />
</div>
