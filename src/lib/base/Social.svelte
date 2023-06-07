<script lang="ts">
	import type { Network as Name } from '@rodneylab/svelte-social-icons';
	import SocialIcons from '@rodneylab/svelte-social-icons';
	import Button from 'base/Button.svelte';

	let className = '';
	export { className as class };

	export let name: Name;
	export let href: string | undefined = undefined;
	export let size: 32 | 40 | 48 = 40;
</script>

<Button
	{href}
	target="_blank"
	class="rounded-[9999px] !p-0 {className}"
	style="width:{size}px;height:{size}px"
>
	<SocialIcons
		network={name}
		height={size}
		width={size}
		fgColor="currentColor"
		bgColor="transparent"
	/>
</Button>
