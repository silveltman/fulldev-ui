<script lang="ts">
	export let center: boolean = false
	export let reverse: boolean = false
</script>

<div
	class="flex gap-y-3xl
        {center ? 'items-center text-center' : 'items-start text-left'}
		{reverse ? ' flex-col-reverse' : ' flex-col'}
    "
>
	<slot />
</div>
