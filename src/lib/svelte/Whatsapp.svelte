<script lang="ts">
	let className = '';
	export { className as class };
	export let tel: string;
</script>

<a
	target="_blank"
	title="Whatsapp"
	href="https://wa.me/{tel}"
	class="button bottom-md right-md medium fixed z-20 !bg-[#46A758] !text-white hover:!bg-[#3D9B50] {className}"
>
	<i class="i-tabler:brand-whatsapp text-lg text-white" />
</a>
