<script lang="ts">
	import SocialIcons from '@rodneylab/svelte-social-icons';
	import Button from 'base/Button.svelte';

	let className = '';
	export { className as class };
	export let tel: string;
</script>

<Button
	target="_blank"
	href="https://wa.me/{tel}"
	class="fixed bottom-md right-md z-10 !bg-[#46A758] !p-0 !text-white medium hover:!bg-[#3D9B50] {className}"
>
	<SocialIcons
		height={64}
		width={64}
		network="whatsapp"
		fgColor="currentColor"
		bgColor="transparent"
	/>
</Button>
