import type { Meta, StoryObj } from '@storybook/svelte';
import SlotChecklist from 'slot/SlotChecklist.svelte';

// // More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'Slot/SlotChecklist',
	component: SlotChecklist,
	tags: ['autodocs']
} satisfies Meta<SlotChecklist>;

export default meta;
type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
const content = [
	{
		heading: 'heading title',
		textarea: 'check this out'
	},
	{
		heading: 'heading title 2',
		textarea: 'text area'
	}
];
export const Empty: Story = {
	args: {
		content: content
	}
};

export const Notcenter: Story = {
	args: {
		content: content,
		center: false
	}
};
