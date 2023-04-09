<script lang="ts">
	export let href: string = '#'
	export let variant: 'primary' | 'secondary' = 'primary'
	export let rel: string | undefined = 'prefetch'
	export let text: string = 'Lorem ipsum'
</script>

<a
	{href}
	{rel}
	class="text-neutral-1000 hover:underline
    {variant === 'primary' ? 'text-md text-neutral-1000' : 'text-sm text-neutral-600'}
    "
>
	{text}
</a>
