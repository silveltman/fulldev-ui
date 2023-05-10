<script lang="ts">
	import type { WhatsappContent } from '$lib/types';
	import { IconBrandWhatsapp } from '@tabler/icons-svelte';

	let className = '';
	export { className as class };

	export let content: WhatsappContent;
</script>

<a
	target="_blank"
	href="https://wa.me/{content.tel}"
	class="fixed right-md bottom-md rounded-[12px] bg-[#02CB20] p-1 hover:bg-[#00BE1C]
		{className}
	"
	{...$$restProps}
>
	<IconBrandWhatsapp
		class="text-white"
		size={48}
		stroke={1.6}
	/>
</a>
