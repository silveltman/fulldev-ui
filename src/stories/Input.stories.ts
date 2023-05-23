import type { Meta, StoryObj } from '@storybook/svelte';
import Input from 'base/Input.svelte';

// // More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'Base/Input',
	component: Input,
	tags: ['autodocs'],
	argTypes: {
		type: {
			control: { type: 'select' },
			options: ['text', 'email', 'password', 'tel', 'url', 'search']
		}
	}
} satisfies Meta<Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Text: Story = {
	args: {
		type: 'text',
		label: 'enter your name',
		placeholder: 'name with initials',
		id: 'name'
	}
};

export const Email: Story = {
	args: {
		type: 'email',
		label: 'enter your email',
		placeholder: 'me@example.com',
		id: 'email'
	}
};

export const Password: Story = {
	args: {
		type: 'password',
		label: 'enter your password',
		placeholder: 'xxxxxxx',
		id: 'password'
	}
};

export const Tel: Story = {
	args: {
		type: 'tel',
		label: 'enter your phone number',
		placeholder: '+123 4567890',
		id: 'tel'
	}
};

export const Url: Story = {
	args: {
		type: 'url',
		label: 'enter url',
		placeholder: 'example.com/ui',
		id: 'url'
	}
};

export const Search: Story = {
	args: {
		type: 'search',
		label: 'enter keywords to search',
		placeholder: 'keyword',
		id: 'search'
	}
};
