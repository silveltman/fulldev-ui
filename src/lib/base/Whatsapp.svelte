<script lang="ts">
	import { IconBrandWhatsapp } from '@tabler/icons-svelte'

	let className = ''
	export { className as class }

	export let size: 'sm' | 'md' | 'lg' = 'md'

	export let content: string
	
</script>

<a
	target="_blank"
	href="https://wa.me/{content}"
	class="absolute right-1 bottom-1 rounded-[12px] bg-[#24D466] p-1 hover:bg-[#1DB954]"
>
	<IconBrandWhatsapp
		class="text-white
		{size === 'sm' && 'h-10 w-10'}
		{size === 'md' && 'h-12 w-12'}
		{size === 'lg' && 'h-14 w-14'}


	
		{className}
		"
		{...$$restProps}

		stroke={1.6}
	/>
</a>


