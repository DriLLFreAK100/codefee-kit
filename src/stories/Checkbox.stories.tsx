import Checkbox, { CheckboxProps } from 'components/Checkbox';
import React, { useCallback, useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import styles from './assets/styles/Checkbox.module.scss';
/* eslint-disable no-alert */

export default {
  title: 'Controls/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  checked: true,
  label: 'Love Coffee?',
} as CheckboxProps;

const StatefulTemplate: Story<CheckboxProps> = (args) => {
  const [checked, setChecked] = useState(false);

  const handleValueChange = useCallback((value: boolean) => {
    setChecked(value);
  }, [checked]);

  return (
    <Checkbox
      {...args}
      checked={checked}
      onValueChange={handleValueChange}
    />
  );
}

export const StatefulSample = StatefulTemplate.bind({});
StatefulSample.args = {
  label: 'Love Coffee?',
} as CheckboxProps;

export const CustomColor = Template.bind({});
CustomColor.args = {
  className: styles.CustomColor,
  disabled: false,
  checked: true,
  label: 'Love Coffee?',
} as CheckboxProps;
