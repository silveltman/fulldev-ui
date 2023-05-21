<script lang="ts">
	let className = '';
	export { className as class };
	export let text: string;
</script>

<span
	class="inline-block text-sm font-eyebrow leading-[1] text-base-11 {className}"
	{...$$restProps}
>
	{text}
</span>
