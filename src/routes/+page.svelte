<script>
	import Button from '$lib/base/Button.svelte'
	import Textarea from '$lib/base/Textarea.svelte'
	import Textfield from '$lib/base/Textfield.svelte'
	import ContentSplit from '$lib/sections/ContentSplit.svelte'
	import ContentWide from '$lib/sections/ContentWide.svelte'
	import CtaBox from '$lib/sections/CtaBox.svelte'
	import FeatureSplit from '$lib/sections/FeatureSplit.svelte'
	import HeroSplit from '$lib/sections/HeroSplit.svelte'
	import Prose from '$lib/sections/Prose.svelte'
	import Split from '$lib/sections/Split.svelte'
</script>

<HeroSplit class="bg-primary-neutral-800 dark" />
<Split />
<div class="flex flex-col gap-y-2xl py-2xl">
	<FeatureSplit reverse />
	<FeatureSplit />
	<FeatureSplit reverse />
</div>
<CtaBox class="dark py-2xl" />
<ContentWide class="py-2xl" />
<ContentSplit class="py-2xl" />

<FeatureSplit class="dark " />

<Button
	type="primary"
	size="sm">Hello world</Button
>
<Button
	type="primary"
	size="md">Hello world</Button
>
<Button
	type="primary"
	size="lg">Hello world</Button
>
<Button
	type="primary"
	size="sm"
	color>Hello world</Button
>
<Button
	type="primary"
	size="md"
	color>Hello world</Button
>
<Button
	type="primary"
	size="lg"
	color>Hello world</Button
>
<br />
<Button
	type="secondary"
	size="sm">Hello world</Button
>
<Button
	type="secondary"
	size="md">Hello world</Button
>
<Button
	type="secondary"
	size="lg">Hello world</Button
>
<Button
	type="secondary"
	size="sm"
	color>Hello world</Button
>
<Button
	type="secondary"
	size="md"
	color>Hello world</Button
>
<Button
	type="secondary"
	size="lg"
	color>Hello world</Button
>
<br />
<Button
	type="tertiary"
	size="sm">Hello world</Button
>
<Button
	type="tertiary"
	size="md">Hello world</Button
>
<Button
	type="tertiary"
	size="lg">Hello world</Button
>
<Button
	type="tertiary"
	size="sm"
	color>Hello world</Button
>
<Button
	type="tertiary"
	size="md"
	color>Hello world</Button
>
<Button
	type="tertiary"
	size="lg"
	color>Hello world</Button
>
<br />

<Textfield
	type="text"
	label="Label">Hello world</Textfield
>
<Textfield
	type="email"
	label="Label">Hello world</Textfield
>
<Textfield
	type="password"
	label="Label">Hello world</Textfield
>
<Textfield
	type="tel"
	label="Label">Hello world</Textfield
>
<Textfield
	type="url"
	label="Label">Hello world</Textfield
>
<Textfield
	type="search"
	label="Label">Hello world</Textfield
>
<Textfield
	type="number"
	label="Label">Hello world</Textfield
>

<Textarea label="Label" />

<br />
<Button
	type="secondary"
	size="sm">Hello world</Button
>
<Button
	type="secondary"
	size="md">Hello world</Button
>
<Button
	type="secondary"
	size="lg">Hello world</Button
>
<Button
	type="secondary"
	size="sm"
	color>Hello world</Button
>
<Button
	type="secondary"
	size="md"
	color>Hello world</Button
>
<Button
	type="secondary"
	size="lg"
	color>Hello world</Button
>
<br />
<Button
	type="tertiary"
	size="sm">Hello world</Button
>
<Button
	type="tertiary"
	size="md">Hello world</Button
>
<Button
	type="tertiary"
	size="lg">Hello world</Button
>
<Button
	type="tertiary"
	size="sm"
	color>Hello world</Button
>
<Button
	type="tertiary"
	size="md"
	color>Hello world</Button
>
<Button
	type="tertiary"
	size="lg"
	color>Hello world</Button
>
