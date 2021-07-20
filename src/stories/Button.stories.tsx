import Button, { ButtonProps } from 'components/Button';
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
/* eslint-disable no-alert */

export default {
  title: 'Controls/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Click Me!',
} as ButtonProps;

export const Subtle = Template.bind({});
Subtle.args = {
  text: 'Click Me!',
  buttonType: 'subtle',
} as ButtonProps;

export const Info = Template.bind({});
Info.args = {
  text: 'Click Me!',
  buttonType: 'info',
} as ButtonProps;

export const Success = Template.bind({});
Success.args = {
  text: 'Click Me!',
  buttonType: 'success',
} as ButtonProps;

export const Warning = Template.bind({});
Warning.args = {
  text: 'Click Me!',
  buttonType: 'warning',
} as ButtonProps;

export const Error = Template.bind({});
Error.args = {
  text: 'Click Me!',
  buttonType: 'error',
} as ButtonProps;

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Click Me!',
  disabled: true,
} as ButtonProps;

export const OnClick = Template.bind({});
OnClick.args = {
  text: 'Click Me!',
  onClick: () => {
    alert('Click Action!');
  },
} as ButtonProps;
