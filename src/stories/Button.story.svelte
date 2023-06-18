<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	export let Hst: Hst;
</script>

<Hst.Story
	title="tailwind/Button"
	layout={{ type: 'grid', width: 200 }}
>
	<Hst.Variant title="Ghost">
		<button class="button button-ghost">Clicke me</button>
	</Hst.Variant>
	<Hst.Variant title="Soft">
		<button class="button button-soft">Clicke me</button>
	</Hst.Variant>
	<Hst.Variant title="Ringed">
		<button class="button button-ringed">Clicke me</button>
	</Hst.Variant>
	<Hst.Variant title="Solid">
		<button class="button button-solid">Clicke </button>
	</Hst.Variant>
</Hst.Story>
