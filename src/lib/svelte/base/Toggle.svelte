<script lang="ts">
	let className = '';
	export { className as class };
	export let id: string;
	export let left: string = 'Left';
	export let right: string = 'Right';
</script>

<input
	{id}
	name={id}
	type="checkbox"
	class="peer invisible hidden opacity-0"
/>
<label
	for={id}
	class="relative inline-grid cursor-pointer grid-cols-2 overflow-hidden rounded-button bg-base-3 transition hover:bg-base-4 peer-checked:[&>.bg]:translate-x-full peer-checked:[&>.off]:text-base-11 peer-checked:[&>.on]:!text-white
	{className}
	"
>
	<div class="bg absolute bottom-0 left-0 top-0 h-full w-1/2 bg-base-9 transition" />
	<span class="off relative px-md py-sm text-center text-md font-button text-white transition"
		>{left}</span
	>
	<span class="on relative px-md py-sm text-center text-md font-button !text-base-11 transition"
		>{right}</span
	>
</label>
