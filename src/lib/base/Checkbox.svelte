<script lang="ts">
	export let required: boolean = false

	export let content: any = {
		heading: 'Heading',
		text: 'Text',
		id: 'id'
	}

	// no content prop
</script>

<div class="flex items-start">
	<input
		type="checkbox"
		class="mt-xs"
		id={content.id}
		name={content.id}
		{required}
	/>
	<label
		for={content.id}
		class="flex cursor-pointer flex-col pl-md"
	>
		{#if content.heading}
			<h6>{content.heading}</h6>
		{/if}
		{#if content.text}
			<p>{content.text}</p>
		{/if}
	</label>
</div>
