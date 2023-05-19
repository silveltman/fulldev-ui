<script lang="ts">
	import type { Hst } from '$lib/types';
	import Textfield from 'base/Textfield.svelte';
	import Textarea from 'base/Textarea.svelte';
	import Select from 'base/Select.svelte';
	export let Hst: Hst;

	let label: string = 'Label';
	let placeholder: string = 'Placeholder';
	let disabled: boolean = false;
	let required: boolean = true;
	let size: 'small' | 'medium' | 'large' = 'medium';
</script>

<Hst.Story layout={{ type: 'grid', width: 300 }}>
	<svelte:fragment slot="controls">
		<Hst.Text
			title="Label"
			bind:value={label}
		/>
		<Hst.Text
			title="Placeholder"
			bind:value={placeholder}
		/>
		<Hst.Checkbox
			title="Disabled"
			bind:value={disabled}
		/>
		<Hst.Checkbox
			title="Required"
			bind:value={required}
		/>
		<Hst.Select
			title="Size"
			bind:value={size}
			options={['small', 'medium', 'large']}
		/>
	</svelte:fragment>

	<Hst.Variant title="Textfield">
		<Textfield
			{label}
			{placeholder}
			{disabled}
			{required}
			class={size}
			id="textfield"
		/>
	</Hst.Variant>
	<Hst.Variant title="Select">
		<Select
			id="select"
			{label}
			{placeholder}
			{disabled}
			{required}
			options={['option 1', 'option 2', 'option 3']}
			class={size}
		/>
	</Hst.Variant>
	<Hst.Variant title="Textarea">
		<Textarea
			{label}
			{placeholder}
			{disabled}
			{required}
			class={size}
			id="textarea"
		/>
	</Hst.Variant>
</Hst.Story>
