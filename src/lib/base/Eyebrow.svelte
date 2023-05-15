<script lang="ts">
	let className = '';
	export { className as class };
	export let text: string;
</script>

<span
	class="inline-block text-base font-eyebrow text-base-11 size-sm:text-sm size-lg:text-lg {className}"
	{...$$restProps}
>
	{text}
</span>
