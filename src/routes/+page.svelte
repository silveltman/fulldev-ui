<script lang="ts">
	import BlockContent from 'blocks/BlockContent.svelte'

	// const blocks: any = import.meta.glob('../lib/block/*.svelte', {
	// 	eager: true
	// })
	// console.log(blocks['../lib/block/HeroSplit.svelte'])

	// let selected: any = null
</script>

<!-- <svelte:component this={blocks['../lib/block/HeroSplit.svelte'].default} /> -->

<!-- <div class="flex w-full justify-center bg-black p-sm">
	<select bind:value={selected}>
		{#each Object.entries(blocks) as [key, value]}
			<option value={key}>{key}</option>
		{/each}
	</select>
</div>

{#if selected}
	<svelte:component this={blocks[selected].default} />
{/if} -->

<BlockContent
	size="lg"
	split
	center
	class="dark"
/>
<BlockContent
	split
	center
/>
<BlockContent
	split
	center
	reverse
/>
<BlockContent
	split
	center
/>

<BlockContent
	center
	box
	reverse
	class="dark"
/>
<BlockContent />
<BlockContent
	split
	reverse
/>
<BlockContent
	class="dark"
	split
	center
/>
