import type { Meta, StoryObj } from '@storybook/svelte';
import Drawer from 'layout/Drawer.svelte';

// // More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'Layout/Drawer',
	component: Drawer,
	tags: ['autodocs'],
	argTypes: {
		position: {
			control: { type: 'select' },
			options: ['left', 'right', 'top', 'bottom']
		}
	}
} satisfies Meta<Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Left: Story = {
	args: {
		position: 'left'
	}
};

export const Right: Story = {
	args: {
		position: 'right',
		class: 'rounded-md p-2 border-b border-red-500'
	}
};

export const Top: Story = {
	args: {
		position: 'top'
	}
};

export const Bottom: Story = {
	args: {
		position: 'bottom'
	}
};
