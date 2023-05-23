import type { Meta, StoryObj } from '@storybook/svelte';
import Stack from 'layout/Stack.svelte';

// // More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'Layout/Stack',
	component: Stack,
	tags: ['autodocs']
} satisfies Meta<Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args

export const Empty: Story = {};

export const Center: Story = {
	args: {
		center: true,
		class: 'bg-rose-200'
	}
};

const Template = ({ ...args }) => ({
	Component: Stack,
	args: args
});

export const Regular = Template.bind({});
