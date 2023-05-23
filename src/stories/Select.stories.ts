import type { Meta, StoryObj } from '@storybook/svelte';
import Select from 'base/Select.svelte';

// // More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'Base/Select',
	component: Select,
	tags: ['autodocs']
} satisfies Meta<Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Required: Story = {
	args: {
		required: true,
		id: 'menu',
		options: ['Home', 'Blog', 'Contact']
	}
};

export const Disabled: Story = {
	args: {
		disabled: true,
		id: 'Lang',
		options: ['python', 'typescript', 'svelte', 'astro']
	}
};

export const Label: Story = {
	args: {
		id: 'Lang',
		label: 'Select Best Web Framwork',
		placeholder: 'think about ss',
		options: ['react', 'vue', 'svelte', 'astro']
	}
};
