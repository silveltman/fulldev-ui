import type { Meta, StoryObj } from '@storybook/svelte';
import Container from 'layout/Container.svelte';

// // More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'Layout/Container',
	component: Container,
	tags: ['autodocs']
} satisfies Meta<Container>;

export default meta;
type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Reguler: Story = {};

export const Custom: Story = {
	args: {
		as: 'span',
		class: 'rounded-md p-2 border-b border-red-500'
	}
};
