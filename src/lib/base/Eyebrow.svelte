<script lang="ts">
	let className = ''
	export { className as class }
	export let variant: 'primary' | 'secondary' = 'primary'
</script>

<div
	class="inline-block rounded-eyebrow text-body-md font-medium leading-none text-primary-700

	{variant === 'primary' && 'border border-primary-100 !bg-primary-50 py-2 px-3 text-primary-500'}
	
	{className}
	"
	{...$$restProps}
>
	<slot />
</div>
