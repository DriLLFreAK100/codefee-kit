import IconButton, { IconButtonProps } from 'components/IconButton';
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
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
} as IconButtonProps;

export const Subtle = Template.bind({});
Subtle.args = {
  variant: 'secondary',
} as IconButtonProps;