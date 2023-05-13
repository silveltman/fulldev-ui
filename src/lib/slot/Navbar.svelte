<script lang="ts">
	import Container from 'layout/Container.svelte';

	let className = '';
	export { className as class };

	export let box: boolean = false;
	export let position: 'relative' | 'fixed' | 'absolute' | 'sticky' = 'relative';
</script>

<header
	class="top-0 left-0 right-0 z-50 w-full py-sm {position}
	{box ? 'bg-transparent' : `border-b border-base-6 bg-base-2 ${className}`}
"
>
	<Container>
		<nav
			class="navbar shadow-none
				{box ? `rounded-box border border-base-6 bg-base-2 p-sm ${className}` : 'bg-transparent p-0'}
			"
		>
			{#if $$slots.start}
				<div class="navbar-start gap-x-sm">
					<slot name="start" />
				</div>
			{/if}
			{#if $$slots.center}
				<div class="navbar-center gap-x-sm">
					<slot name="center" />
				</div>
			{/if}
			{#if $$slots.end}
				<div class="navbar-end gap-x-sm">
					<slot name="end" />
				</div>
			{/if}
		</nav>
	</Container>
</header>
