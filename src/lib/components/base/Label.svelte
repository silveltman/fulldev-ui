<script lang="ts">
	export let name: string
</script>

<label
	for={name}
	class="text-sm font-medium text-neutral-700"
>
	<slot />
</label>
