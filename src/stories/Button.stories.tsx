/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Button, { ButtonProps } from 'components/Button';
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
  text: 'Click Me!',
} as ButtonProps;
