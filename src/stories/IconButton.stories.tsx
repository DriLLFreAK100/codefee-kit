import IconButton, { IconButtonProps } from 'components/IconButton';
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { Times } from 'components/Icons';
import styles from './assets/styles/IconButton.module.scss';
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
