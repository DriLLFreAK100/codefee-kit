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

export const Subtle = Template.bind({});
Subtle.args = {
  text: 'Click Me!',
  type: 'subtle',
} as ButtonProps;

export const Info = Template.bind({});
Info.args = {
  text: 'Click Me!',
  type: 'info',
} as ButtonProps;

export const Success = Template.bind({});
Success.args = {
  text: 'Click Me!',
  type: 'success',
} as ButtonProps;

export const Warning = Template.bind({});
Warning.args = {
  text: 'Click Me!',
  type: 'warning',
} as ButtonProps;

export const Error = Template.bind({});
Error.args = {
  text: 'Click Me!',
  type: 'error',
} as ButtonProps;
