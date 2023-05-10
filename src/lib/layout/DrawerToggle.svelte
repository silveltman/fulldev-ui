<script lang="ts">
	let className: string = '';
	export { className as class };

	export let position: 'left' | 'right' | 'top' | 'bottom' = 'right';
</script>

<input
	type="checkbox"
	id="drawer-{position}"
	class="drawer-toggle"
/>

<label
	for="drawer-{position}"
	class={className}
>
	<slot />
</label>
