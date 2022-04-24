import Button, { ButtonProps } from 'components/Button';
import React from 'react';
import { Meta, Story } from '@storybook/react';
/* eslint-disable no-alert */

export default {
  title: 'Controls/Button',
  component: Button,
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
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
  variant: 'subtle',
} as ButtonProps;

export const Info = Template.bind({});
Info.args = {
  text: 'Click Me!',
  variant: 'info',
} as ButtonProps;

export const Success = Template.bind({});
Success.args = {
  text: 'Click Me!',
  variant: 'success',
} as ButtonProps;

export const Warning = Template.bind({});
Warning.args = {
  text: 'Click Me!',
  variant: 'warning',
} as ButtonProps;

export const Error = Template.bind({});
Error.args = {
  text: 'Click Me!',
  variant: 'error',
} as ButtonProps;

export const Lite = Template.bind({});
Lite.args = {
  text: 'Click Me!',
  variant: 'lite',
} as ButtonProps;

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Click Me!',
  disabled: true,
} as ButtonProps;

export const ViaChildren = Template.bind({});
ViaChildren.args = {
  children: 'Click Me!',
} as ButtonProps;

export const OnClick = Template.bind({});
OnClick.args = {
  text: 'Click Me!',
  onClick: () => {
    alert('Click Action!');
  },
} as ButtonProps;
