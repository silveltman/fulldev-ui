<script lang="ts">
	import type { LinkContent } from '$lib/types'

	export let variant: 'primary' | 'secondary' = 'primary'
	export let rel: string | undefined = 'prefetch'
	export let content: LinkContent
	//
</script>

<a
	href={content.href}
	{rel}
	class="text-neutral-1000 hover:underline
    {variant === 'primary' ? 'text-neutral-1000 text-md' : 'text-sm text-neutral-600'}
    "
>
	{content.text}
</a>
