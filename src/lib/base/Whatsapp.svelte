<script lang="ts">
	import type { WhatsappContent } from '$lib/types'
	import { IconBrandWhatsapp } from '@tabler/icons-svelte'

	let className = ''
	export { className as class }

	export let size: 'sm' | 'md' | 'lg' = 'md'

	export let content: WhatsappContent
	
</script>

<a
	target="_blank"
	href="https://wa.me/{content.contactNo}"
	class="absolute right-1 bottom-1 rounded-[12px] bg-[#24D466] p-1 hover:bg-[#1DB954]
		{className}
	"
>
	<IconBrandWhatsapp
		class="text-white
		{size === 'sm' && 'h-10 w-10'}
		{size === 'md' && 'h-12 w-12'}
		{size === 'lg' && 'h-14 w-14'}
		"
		stroke={1.6}
	/>
</a>


