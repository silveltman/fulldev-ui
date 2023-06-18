<script lang="ts">
	import type { Network as Name } from '@rodneylab/svelte-social-icons';
	import SocialIcons from '@rodneylab/svelte-social-icons';

	let className = '';
	export { className as class };

	export let name: Name;
	export let href: string | undefined = undefined;
	export let size: 32 | 40 | 48 = 40;
</script>

<a
	{href}
	target="_blank"
	class="button rounded-[9999px] p-0 {className}"
	style="width:{size}px;height:{size}px"
>
	<SocialIcons
		network={name}
		height={size}
		width={size}
		fgColor="currentColor"
		bgColor="transparent"
	/>
</a>
