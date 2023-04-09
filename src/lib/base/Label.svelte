<script lang="ts">
	export let name: string
	export let text: string = 'Lorem ipsum'
</script>

<label
	for={name}
	class="text-sm font-medium text-neutral-700"
>
	{text}
</label>
