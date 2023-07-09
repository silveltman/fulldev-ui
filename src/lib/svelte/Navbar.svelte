<script lang="ts">
	let className = '';
	export { className as class };
	export let box: boolean = false;
	export let position: 'relative' | 'fixed' | 'absolute' | 'sticky' = 'relative';
</script>

<header
	class="py-sm left-0 right-0 top-0 z-50 w-full {position}
	{box ? 'bg-transparent' : `border-hue6 bg-hue2 border-b ${className}`}
"
>
	<div class="container">
		<nav
			class="gap-md flex items-center
				{box ? `rounded-box border-hue6 bg-hue2 p-sm border ${className}` : 'bg-transparent p-0'}
			"
		>
			<slot />
		</nav>
	</div>
</header>
