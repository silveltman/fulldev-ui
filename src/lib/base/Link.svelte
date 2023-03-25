<script lang="ts">
	export let href: string = '#'
	export let variant: 'primary' | 'secondary' = 'primary'
</script>

<a
	{href}
	class="text-neutral-1000 hover:underline
    {variant === 'primary' ? 'text-body-md text-neutral-1000' : 'text-body-sm text-neutral-600'}
    "
>
	<slot />
</a>
