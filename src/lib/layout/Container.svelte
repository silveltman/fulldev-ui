<script lang="ts">
	let className: string = '';
	export { className as class };
</script>

<div class="mx-auto w-full max-w-screen-2xl px-4 md:px-2xl {className}">
	<slot />
</div>
