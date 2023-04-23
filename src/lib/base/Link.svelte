<script lang="ts">
	import type { LinkContent } from '$lib/types'

	let className = ''
	export {className as class}


	export let variant: 'primary' | 'secondary' = 'primary'
	export let rel: string | undefined = 'prefetch'
	export let content: LinkContent
	
</script>

<a
	href={content.href}
	rel = {content.href ? rel : undefined}
	class="text-neutral-1000 hover:underline
    {variant === 'primary' ? 
	'text-neutral-1000 text-md' : 
	'text-sm text-neutral-600'}
    
	{className}
	"
>
	{content.text}
</a>
