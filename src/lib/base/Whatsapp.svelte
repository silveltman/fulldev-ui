<script lang="ts">
	import { IconBrandWhatsapp } from '@tabler/icons-svelte';

	let className = '';
	export { className as class };
	export let tel: string;
</script>

<a
	target="_blank"
	href="https://wa.me/{tel}"
	class="fixed right-md bottom-md rounded-[12px] bg-[#46A758] p-xs hover:bg-[#3D9B50]
		{className}
	"
	{...$$restProps}
>
	<IconBrandWhatsapp
		class="-translate-y-px translate-x-px text-[#FBFEFC]"
		size={48}
		stroke={1.6}
	/>
</a>
