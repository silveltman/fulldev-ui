import type { Meta, StoryObj } from '@storybook/svelte';
import Form from 'layout/Form.svelte';

// // More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'Layout/Form',
	component: Form,
	tags: ['autodocs']
} satisfies Meta<Form>;

export default meta;
type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Reguler: Story = {};

export const Custom: Story = {
	args: {
		key: 'login',
		subject: 'email',
		action: 'login'
	}
};
