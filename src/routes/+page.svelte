<script>
	import ContentSplit from '$lib/BlockContentSplit.svelte'
	import ContentWide from '$lib/BlockContentWide.svelte'
	import CtaBox from '$lib/BlockCtaBox.svelte'
	import HeroSplit from '$lib/BlockHeroSplit.svelte'
	import TheFooter from '$lib/BlockFooterSimple.svelte'
	import TheHeader from '$lib/BlockHeaderSimple.svelte'
	import object from './index.yml'
</script>

<div class="font-heading" />
<TheHeader
	class="dark relative lg:absolute"
	block={object.header}
/>
<HeroSplit
	block={object.hero}
	class="dark"
/>

<ContentSplit
	block={object.feature}
	reverse
/>
<ContentSplit
	class="py-0"
	block={object.feature}
/>
<ContentSplit
	block={object.feature}
	reverse
/>
<CtaBox block={object.cta_box} />
<ContentWide block={object.about} />
<ContentSplit
	block={object.ontwikkeling}
	reverse
/>
<ContentSplit
	class="dark"
	block={object.cta_content}
/>
<TheFooter class="dark" />
