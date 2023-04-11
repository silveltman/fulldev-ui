<script lang="ts">
	import type { Layout } from '$lib/types'

	export let layout: Layout = {}
</script>

<div
	class="flex flex-col gap-y-3xl
        {layout.center ? 'items-center text-center' : 'items-start text-left'}
    "
>
	<slot />
</div>
