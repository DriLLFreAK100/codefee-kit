import Checkbox, { CheckboxProps } from 'components/Checkbox';
import React, { useCallback, useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
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