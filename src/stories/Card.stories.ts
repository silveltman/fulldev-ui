import type { Meta, StoryObj } from '@storybook/svelte';
import Card from 'layout/Card.svelte';

// // More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'Layout/Card',
	component: Card,
	tags: ['autodocs']
} satisfies Meta<Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Center: Story = {
	args: {
		center: true
	}
};

export const Box: Story = {
	args: {
		box: true,
		class: 'rounded-md p-2 border-b border-red-500'
	}
};

export const Link: Story = {
	args: {
		href: 'https://example.com',
		class: 'rounded-md p-2 border-b border-red-500'
	}
};
