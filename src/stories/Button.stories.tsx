import AppContainer from 'components/AppContainer';
import Button, { IButtonProps } from 'components/Button';
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
/* eslint-disable no-alert */

export default {
  title: 'Controls/Button',
  component: Button,
} as Meta;

const Template: Story<IButtonProps> = (args) => {
  return (
    <AppContainer>
      <Button {...args} />
    </AppContainer>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  text: 'Click Me!',
} as IButtonProps;

export const Subtle = Template.bind({});
Subtle.args = {
  text: 'Click Me!',
  type: 'subtle',
} as IButtonProps;

export const Info = Template.bind({});
Info.args = {
  text: 'Click Me!',
  type: 'info',
} as IButtonProps;

export const Success = Template.bind({});
Success.args = {
  text: 'Click Me!',
  type: 'success',
} as IButtonProps;

export const Warning = Template.bind({});
Warning.args = {
  text: 'Click Me!',
  type: 'warning',
} as IButtonProps;

export const Error = Template.bind({});
Error.args = {
  text: 'Click Me!',
  type: 'error',
} as IButtonProps;

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Click Me!',
  disabled: true,
} as IButtonProps;

export const OnClick = Template.bind({});
OnClick.args = {
  text: 'Click Me!',
  onClick: () => {
    alert('Click Action!');
  },
} as IButtonProps;
