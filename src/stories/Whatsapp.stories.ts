import type { Meta, StoryObj } from '@storybook/svelte';
import Whatsapp from 'base/Whatsapp.svelte';

// // More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'Base/Whatsapp',
	component: Whatsapp,
	tags: ['autodocs'],
	argTypes: {
		type: {
			control: { type: 'select' },
			options: ['text', 'email', 'password', 'tel', 'url', 'search']
		}
	}
} satisfies Meta<Whatsapp>;

export default meta;
type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Simple: Story = {
	args: {
		tel: '+98 76543210'
	}
};
