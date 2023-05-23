import type { Meta, StoryObj } from '@storybook/svelte';
import Navbar from 'layout/Navbar.svelte';

// // More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'Layout/Navbar',
	component: Navbar,
	tags: ['autodocs'],
	argTypes: {
		position: {
			control: { type: 'select' },
			options: ['relative', 'fixed', 'absolute', 'sticky']
		}
	}
} satisfies Meta<Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Relative: Story = {
	args: {
		position: 'relative'
	}
};

export const Fixed: Story = {
	args: {
		position: 'fixed',
		class: 'rounded-md p-2 border-b border-red-500'
	}
};

export const Absolute: Story = {
	args: {
		position: 'absolute'
	}
};

export const Sticky: Story = {
	args: {
		position: 'sticky'
	}
};
