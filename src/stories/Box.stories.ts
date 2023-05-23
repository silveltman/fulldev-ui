import type { Meta, StoryObj } from '@storybook/svelte';
import Box from 'layout/Box.svelte';

// // More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'Layout/Box',
	component: Box,
	tags: ['autodocs']
} satisfies Meta<Box>;

export default meta;
type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Regular: Story = {
	args: {
		as: 'div'
	}
};

export const Custom: Story = {
	args: {
		as: 'span',
		class: 'rounded-md p-2 border-b border-red-500'
	}
};
