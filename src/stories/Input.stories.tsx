import React, { ChangeEventHandler, useState, useEffect } from 'react';
import Input, { InputProps } from 'components/Input';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Controls/Input',
  component: Input,
} as Meta<InputProps>;

const Template: Story<InputProps> = (args: InputProps) => {
  const { value } = args;
  const [inputValue, setInputValue] = useState(value);

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    action('Input OnChange')(evt);
    setInputValue(evt.currentTarget.value);
  }

  useEffect(() => setInputValue(value), [value]);

  return (
    <Input
      {...args}
      value={inputValue}
      onChange={handleOnChange} />
  );
};

const baseProps: InputProps = {
  value: 'Coffee Time~',
};

export const Default = Template.bind({});
Default.args = { ...baseProps };

export const Disabled = Template.bind({});
Disabled.args = {
  ...baseProps,
  disabled: true,
} as InputProps;

export const Error = Template.bind({});
Error.args = {
  ...baseProps,
  error: true,
} as InputProps;

