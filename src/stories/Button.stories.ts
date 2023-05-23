import type { Meta, StoryObj } from '@storybook/svelte';
import Button from 'base/Button.svelte';

// // More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'Base/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: ['solid', 'ringed', 'soft', 'ghost']
		},
		href: {
			control: { type: 'select' },
			options: ['url', undefined]
		}
	}
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Solid: Story = {
	args: {
		variant: 'solid',
		text: 'Button'
	}
};

export const Ringed: Story = {
	args: {
		variant: 'ringed',
		text: 'Button'
	}
};

export const Soft: Story = {
	args: {
		variant: 'soft',
		text: 'Button'
	}
};

export const Ghost: Story = {
	args: {
		variant: 'ghost',
		text: 'Button'
	}
};
