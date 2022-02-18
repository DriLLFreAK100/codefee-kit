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

export const Default = Template.bind({});
Default.args = {
  value: 'Coffee Time~',
} as InputProps;
