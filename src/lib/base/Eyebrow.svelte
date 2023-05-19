<script lang="ts">
	let className = '';
	export { className as class };
	export let text: string;
</script>

<span
	class="inline-block font-eyebrow text-base-11 text-1 {className}"
	{...$$restProps}
>
	{text}
</span>
