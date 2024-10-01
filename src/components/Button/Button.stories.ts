import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimarySmall: Story = {
    args: {
        intent: "primary",
        size: 'small',
        value: 'Test'
    },
};

export const Primary: Story = {
    args: {
        intent: "primary",
        size: 'medium',
        value: 'Test'
    },
};

export const PrimaryLarge: Story = {
    args: {
        intent: "primary",
        size: 'large',
        value: 'Test'
    },
};

export const SecondarySmall: Story = {
    args: {
        intent: "secondary",
        size: 'small',
        value: 'Best'
    },
};

export const Secondary: Story = {
    args: {
        intent: "secondary",
        size: 'medium',
        value: 'Best'
    },
};

export const SecondaryLarge: Story = {
    args: {
        intent: "secondary",
        size: 'large',
        value: 'Best'
    },
};