<script lang="ts">
	let className = ''
	export { className as class }
	export let variant: 'primary' | 'secondary' = 'primary'
	export let color: boolean = true
</script>

<div
	class="hello bg-test bg-hello text-md inline-block rounded-eyebrow font-medium leading-none text-primary-700

	{variant === 'primary' && color
		? 'border-primary-500/20 !bg-primary-500/5 border py-2 px-3 text-primary-500'
		: 'border-neutral-500/20 !bg-neutral-500/5 border py-2 px-3 text-neutral-500'}
	{className}
	"
	{...$$restProps}
>
	<slot />
</div>
