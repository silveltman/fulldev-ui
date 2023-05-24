<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Meta title="Design system/Spacing" />

<Template>
	<div class="flex flex-col gap-2">
		<div class="my-[10px] h-10 w-xs bg-base-9" />
		<div class="my-[10px] h-10 w-sm bg-base-9" />
		<div class="my-[10px] h-10 w-md bg-base-9" />
		<div class="my-[10px] h-10 w-lg bg-base-9" />
		<div class="my-[10px] h-10 w-xl bg-base-9" />
		<div class="my-[10px] h-10 w-2xl bg-base-9" />
	</div>
</Template>

<Story name="Default" />
