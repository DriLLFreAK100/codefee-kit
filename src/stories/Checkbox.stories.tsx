import Checkbox, { CheckboxProps } from 'components/Checkbox';
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { useCallback, useState } from '@storybook/client-api';
/* eslint-disable no-alert */

export default {
  title: 'Controls/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: true,
  checked: true,
  label: 'Love Coffee?',
  name: 'is-coffee-lover'
} as CheckboxProps;

export const StatefulSample: Story<CheckboxProps> = (args) => {
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