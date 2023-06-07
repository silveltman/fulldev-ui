<script lang="ts">
	import Container from 'wrap/Container.svelte';
	let className = '';
	export { className as class };
	export let box: boolean = false;
	export let position: 'relative' | 'fixed' | 'absolute' | 'sticky' = 'relative';
</script>

<header
	class="left-0 right-0 top-0 z-50 w-full py-sm {position}
	{box ? 'bg-transparent' : `border-b border-base-6 bg-base-2 ${className}`}
"
>
	<Container>
		<nav
			class="flex items-center gap-md
				{box ? `rounded-box border border-base-6 bg-base-2 p-sm ${className}` : 'bg-transparent p-0'}
			"
		>
			<slot />
		</nav>
	</Container>
</header>
