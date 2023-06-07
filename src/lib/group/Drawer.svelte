<script lang="ts">
	let className: string = '';
	export { className as class };
	import Container from 'wrap/Container.svelte';
	import Button from 'base/Button.svelte';
	import Icon from 'base/Icon.svelte';

	export let position: 'left' | 'right' | 'top' | 'bottom';
</script>

<!-- Toggle  -->
<input
	type="checkbox"
	id="drawer-{position}"
	class="peer absolute h-0 w-0 appearance-none opacity-0"
/>
<!-- <label
	for="drawer-{position}"
	class={className}
>
	<slot name="toggle">
		<Button
			class="pointer-events-none small"
			variant="ghost"
		>
			<Icon
				size={24}
				name="menu"
			/>
		</Button>
	</slot>
</label> -->

<Button
	label="drawer-{position}"
	class="small"
	variant="ghost"
>
	<slot name="toggle">
		<Icon
			size={24}
			name="menu"
		/>
	</slot>
</Button>

<!-- Overlay -->
<label
	class="invisible fixed inset-0 z-40 bg-black/30 opacity-0 transition-all peer-checked:visible peer-checked:opacity-100 {className}"
	for="drawer-{position}"
/>

<!-- Body  -->
<div
	class="fixed inset-0 z-50 border-base-6 bg-base-2 transition-all peer-checked:!translate-x-0 peer-checked:translate-y-0

		{position === 'left' && 'drawer-left right-auto w-full max-w-md -translate-x-full border-r'}
		{position === 'right' && 'drawer-right left-auto w-full max-w-md translate-x-full border-l'}
		{position === 'top' && 'drawer-top bottom-auto w-full -translate-y-full border-b'}
		{position === 'bottom' && 'drawer-bottom top-auto w-full translate-y-full border-t'}

		{className}"
>
	<header class="flex justify-between border-b border-base-6 py-sm">
		<Container
			class="flex items-center justify-between lg:px-md {position === 'left' || position === 'right'
				? '!pr-sm'
				: ''}"
		>
			<slot name="header" />

			<Button
				label="drawer-{position}"
				class="ml-auto small"
				variant="ghost"
			>
				<Icon
					size={24}
					name="close"
				/>
			</Button>
		</Container>
	</header>
	<Container class={position === 'left' || position === 'right' ? 'py-md lg:px-md' : 'py-md'}>
		<slot />
	</Container>
</div>
