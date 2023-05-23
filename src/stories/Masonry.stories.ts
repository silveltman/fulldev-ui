import type { Meta, StoryObj } from '@storybook/svelte';
import Masonry from 'layout/Masonry.svelte';

// // More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'Layout/Masonry',
	component: Masonry,
	tags: ['autodocs']
} satisfies Meta<Masonry>;

export default meta;
type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Reguler: Story = {
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
