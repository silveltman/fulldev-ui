<script lang="ts">
	// Content props
	export let name: string;
	export let text: string;
</script>

<label for={name} class="text-body-sm font-medium text-neutral-700">{text}</label>
