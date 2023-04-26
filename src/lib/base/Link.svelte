<script lang="ts">
	import type { LinkContent } from '$lib/types'

	let className = ''
	export { className as class }

	export let variant: 'primary' | 'secondary' = 'primary'
	export let rel: string | undefined = 'prefetch'
	export let content: LinkContent

	export let size: 'sm' | 'md' | 'lg' = 'md'
</script>

<a
	href={content.href}
	rel={content.href ? rel : undefined}
	class="text-neutral-1000 hover:underline
    {variant === 'primary' ? 'text-neutral-1000 text-md' : 'text-sm text-neutral-600'}

	{size === 'sm' && 'py-3 px-4 text-sm'}
	{size === 'md' && 'py-4 px-6 text-md'}
	{size === 'lg' && 'py-5 px-8 text-lg'}
    
	{className}
	"
	{...$$restProps}
>
	{content.text}
</a>
