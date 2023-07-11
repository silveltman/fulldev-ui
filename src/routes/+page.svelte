<script lang="ts">
</script>

<!-- <section class="large section stack container">
	<div class="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
		<p class="text-1 text hue-primary rounded-full border px-2 py-1">Lorem ipsum</p>
		<h1 class="heading">Lorem ipsum dolor sit</h1>
		<p class="text">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem at inventore modi suscipit
			repudiandae fugit aspernatur eum, reiciendis, cumque assumenda corporis, eius nisi commodi?
		</p>
		<div class="hue-primary flex gap-3 pt-3">
			<a
				href="/"
				class="button button-solid">Click me</a
			>
			<a
				href="/"
				class="button button-soft">Click me</a
			>
		</div>
	</div>
</section> -->

<section class="section stack container">
	<div class="panel large flex flex-col gap-3 p-5">
		<p class="text-1 text hue-primary">Lorem ipsum</p>
		<h1 class="heading">Lorem ipsum dolor sit</h1>
		<p class="text max-w-3xl">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem at inventore modi suscipit
			repudiandae fugit aspernatur eum, reiciendis, cumque assumenda corporis, eius nisi commodi?
		</p>
		<div class="hue-primary flex gap-3 pt-3">
			<a
				href="/"
				class="button button-solid">Click me</a
			>
			<a
				href="/"
				class="button button-soft">Click me</a
			>
		</div>
	</div>

	<div class="split medium">
		{#each { length: 3 } as item}
			<!-- content here -->
			<div class="secondary panel flex flex-col gap-3 p-5">
				<p class="text-1 text hue-primary">Lorem ipsum</p>
				<h1 class="heading">Lorem ipsum dolor sit</h1>
				<p class="text">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem at inventore modi
					suscipit repudiandae fugit aspernatur eum, reiciendis, cumque assumenda corporis, eius
					nisi commodi?
				</p>
				<div class="hue-primary flex gap-3 pt-3">
					<a
						href="/"
						class="button button-solid">Click me</a
					>
					<a
						href="/"
						class="button button-soft">Click me</a
					>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	/* :root {
		--compact-multiplier: 1;
		--compact-toggle: 99px;
	}
	.compact {
		--compact-multiplier: 0.5;
		--compact-toggle: 0px;
	}
	.l {
		--size-multiplier: 1.5;
		--text1: 60px;
		--text2: 20px;
		--text3: 18px;
	}
	.m {
		--size-multiplier: 1;
		--text1: 40px;
		--text2: 18px;
		--text3: 16px;
	}
	.s {
		--size-multiplier: 0.5;
		--text1: 26px;
		--text2: 16px;
		--text3: 14px;
	}

	.space1 {
		width: calc(16px * var(--size-multiplier) * var(--compact-multiplier));
	}
	.space2 {
		width: calc(32px * var(--size-multiplier) * var(--compact-multiplier));
	}
	.space3 {
		width: calc(64px * var(--size-multiplier) * var(--compact-multiplier));
	}
	.space4 {
		width: calc(128px * var(--size-multiplier) * var(--compact-multiplier));
	}
	.text1 {
		font-size: min(var(--text1), calc(var(--text2) + var(--compact-toggle)));
	}
	.text2 {
		font-size: min(var(--text2), calc(var(--text2) + var(--compact-toggle) - 2px));
	}
	.text3 {
		font-size: min(var(--text3), calc(var(--text2) + var(--compact-toggle) - 4px));
	} */
</style>
