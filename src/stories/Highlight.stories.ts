import type { Meta, StoryObj } from '@storybook/svelte';
import Highlight from 'layout/Highlight.svelte';

// // More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'Layout/Highlight',
	component: Highlight,
	tags: ['autodocs']
} satisfies Meta<Highlight>;

export default meta;
type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Reguler: Story = {};

export const Center: Story = {
	args: {
		center: true,
		as: 'span',
		class: 'bg-green-300'
	}
};
