<script lang="ts">
	import { IconBrandWhatsapp } from '@tabler/icons-svelte'

	export let content: string
	//
</script>

<a
	target="_blank"
	href="https://wa.me/{content}"
	class="absolute right-2 bottom-2 rounded-[12px] bg-[#24D466] p-1 hover:bg-[#1DB954]"
>
	<IconBrandWhatsapp
		class="text-white"
		size={44}
		stroke={1.6}
	/>
</a>
