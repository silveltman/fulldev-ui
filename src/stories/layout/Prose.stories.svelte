<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Prose from 'layout/Prose.svelte';
</script>

<Meta
	title="Layout/Prose"
	tags={['autodocs']}
	component={Prose}
/>

<Template let:args>
	<Prose {...args}>
		<h1>Lorem ipsum dolor sit amet.</h1>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, accusamus provident?
			Iure maxime doloribus earum placeat! Consectetur non quia obcaecati.
		</p>
		<h2>Lorem ipsum dolor sit.</h2>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aspernatur eaque qui.</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam amet nam aliquid consectetur vel
			deleniti voluptatibus expedita, hic illum totam!
		</p>
		<ul>
			<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</li>
			<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</li>
			<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</li>
		</ul>
		<h2>Lorem ipsum dolor sit amet consectetur.</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque quasi in ipsam
			consequatur reprehenderit repudiandae, debitis aliquam?
		</p>
		<h3>Lorem ipsum dolor sit.</h3>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nulla minus dolores sequi
			dolore!
		</p>
	</Prose>
</Template>

<Story name="Default" />
