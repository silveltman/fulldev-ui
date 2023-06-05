<script lang="ts">
	let className = '';
	export { className as class };
	export let name: string = 'circle';
	export let fill: boolean = false;
	export let size: 20 | 24 | 32 | 48 = 24;
</script>

<i
	style="font-size:{size}px;font-variation-settings:'FILL'{fill ? 1 : 0},'opsz'{size};"
	class="material-symbols-rounded material-symbols-outlined material-symbols-sharp {className}"
	{...$$restProps}
>
	{name}
</i>
