<script lang="ts">
	let className = ''
	export { className as class }
	export let size: 'sm' | 'md' | 'lg' = 'md'
	export let color: boolean = true
</script>

<div
	class="inline-block rounded-xl leading-none
	
	{size === 'sm' && 'py-1 px-2 text-body-sm'}
	{size === 'md' && 'py-2 px-3 text-body-md'}
	{size === 'lg' && 'py-3 px-4 text-body-lg'}

    {color ? 'bg-primary-100 text-primary-800' : 'bg-neutral-100 text-neutral-1000'}
	
	{className}
	"
	{...$$restProps}
>
	<slot />
</div>
