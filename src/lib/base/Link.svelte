<script lang="ts">
	export let href: string = '#'
	export let variant: 'primary' | 'secondary' = 'primary'
	export let rel: string | undefined = 'prefetch'
</script>

<a
	{href}
	{rel}
	class="text-neutral-1000 hover:underline
    {variant === 'primary' ? 'text-body-md text-neutral-1000' : 'text-body-sm text-neutral-600'}
    "
>
	<slot />
</a>
