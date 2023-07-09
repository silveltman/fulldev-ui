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
	class="rounded-button bg-hue3 hover:bg-hue4 peer-checked:[&>.off]:text-hue11 relative inline-grid cursor-pointer grid-cols-2 overflow-hidden transition peer-checked:[&>.bg]:translate-x-full peer-checked:[&>.on]:!text-white
	{className}
	"
>
	<div class="bg bg-hue9 absolute bottom-0 left-0 top-0 h-full w-1/2 transition" />
	<span class="off px-md py-sm text-md font-button relative text-center text-white transition"
		>{left}</span
	>
	<span class="on px-md py-sm text-md font-button !text-hue11 relative text-center transition"
		>{right}</span
	>
</label>
