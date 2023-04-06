<script>
	import object from './index.yml'
	import BlockFormStack from '$lib/BlockFormStack.svelte'
	import Textfield from '$lib/components/base/Textfield.svelte'
	import BlockHeroStack from '$lib/BlockHeroStack.svelte'
	import BlockFaqStack from '$lib/BlockFaqStack.svelte'
</script>

<BlockHeroStack block={object.hero} />

<BlockFormStack block={object.form} />

<BlockFaqStack block={object.faq} />
