import IconButton, { IconButtonProps } from 'components/IconButton';
import React from 'react';
import styles from './assets/styles/IconButton.module.scss';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import { Times } from 'components/Icons';
/* eslint-disable no-alert */

export default {
  title: 'Controls/IconButton',
  component: IconButton,
} as Meta;

const Template: Story<IconButtonProps> = (args) => (
  <IconButton {...args}>
    <Times className={styles.timesIcon} />
  </IconButton>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  onClick: action('Clicked!'),
} as IconButtonProps;

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  onClick: action('Clicked!'),
} as IconButtonProps;

export const Subtle = Template.bind({});
Subtle.args = {
  variant: 'subtle',
  onClick: action('Clicked!'),
} as IconButtonProps;
