<script lang="ts">
	// Style props
	export let color: boolean = false;
</script>

<span
	class="rounded-xl leading-none text-body-sm px-3 py-2
		{color ? 'bg-primary-100 text-primary-700' : 'bg-neutral-100 text-neutral-300'}
	"
>
	<slot />
</span>
