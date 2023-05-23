import type { Meta, StoryObj } from '@storybook/svelte';
import Textarea from 'base/Textarea.svelte';

// // More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'Base/Textarea',
	component: Textarea,
	tags: ['autodocs']
} satisfies Meta<Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Simple: Story = {
	args: {
		rows: 3,
		id: 'menu'
	}
};

export const Required: Story = {
	args: {
		required: true,
		id: 'Lang',
		label: 'Add Text Here',
		placeholder: 'use simple one'
	}
};

export const Disabled: Story = {
	args: {
		disabled: true,
		id: 'Lang',
		label: 'Add Text Here',
		placeholder: 'you have blocked'
	}
};

export const LargeText: Story = {
	args: {
		rows: 30,
		id: 'Lang',
		label: 'Select Best Web Framwork',
		placeholder: 'think about ss'
	}
};
