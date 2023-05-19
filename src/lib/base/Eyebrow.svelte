<script lang="ts">
	let className = '';
	export { className as class };
	export let text: string;
</script>

<span
	class="large inline-block text-1 font-eyebrow text-base-11 {className}"
	{...$$restProps}
>
	{text}
</span>
