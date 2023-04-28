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
	class="absolute right-1 bottom-1 rounded-[12px] bg-[#24D466] p-1 hover:bg-[#1DB954]
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
