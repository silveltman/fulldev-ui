<script lang="ts">
	import type { Layout } from '$lib/types'
	export let layout: Layout = {}
</script>

<div class="grid grid-cols-2 gap-2 p-2">
	Box:<input
		type="checkbox"
		bind:checked={layout.box}
	/>
	Split:
	<input
		type="checkbox"
		bind:checked={layout.split}
	/>
	Center:
	<input
		type="checkbox"
		bind:checked={layout.center}
	/>
	Reverse:
	<input
		type="checkbox"
		bind:checked={layout.reverse}
	/>
</div>

<!-- <Hst.Checkbox
		title="Box"
		bind:value={layout.box}
	/>
	<Hst.Checkbox
		title="Split"
		bind:value={layout.split}
	/>
	<Hst.Checkbox
		title="Center"
		bind:value={layout.center}
	/>
	<Hst.Checkbox
		title="Reverse"
		bind:value={layout.reverse}
	/> -->
