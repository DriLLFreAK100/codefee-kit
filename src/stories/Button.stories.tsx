import React from 'react';
import Button, { ButtonProps } from '../components/Button';

// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
    title: 'Controls/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text: 'Click Me!'
} as ButtonProps;
