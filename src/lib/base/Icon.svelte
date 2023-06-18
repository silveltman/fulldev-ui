<script lang="ts">
	let className = '';
	export { className as class };

	export let name: string | null = null;
	export let fill: boolean = false;
	export let size: 20 | 24 | 40 | 48 = 24;
</script>

<i
	style="font-size:{size}px;font-variation-settings:'FILL'{fill ? 1 : 0},'opsz'{size};"
	class="material-symbols-rounded material-symbols-outlined material-symbols-sharp {className}"
	{...$$restProps}
>
	<slot>
		{name}
	</slot>
</i>
