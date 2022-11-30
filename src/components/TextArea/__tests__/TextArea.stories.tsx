import React, { ChangeEventHandler, useState, useEffect } from 'react';
import TextArea, { TextAreaProps } from 'components/TextArea';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import { Star } from 'components/Icons';

export default {
  title: 'Controls/TextArea',
  component: TextArea,
} as Meta<TextAreaProps>;

const Template: Story<TextAreaProps> = (args: TextAreaProps) => {
  const { value } = args;
  const [TextAreaValue, setTextAreaValue] = useState(value);

  const handleOnChange: ChangeEventHandler<HTMLTextAreaElement> = (evt) => {
    action('TextArea OnChange')(evt);
    setTextAreaValue(evt.currentTarget.value);
  };

  useEffect(() => setTextAreaValue(value), [value]);

  return <TextArea {...args} value={TextAreaValue} onChange={handleOnChange} />;
};

const baseProps: TextAreaProps = {
  value: 'Coffee Time~',
};

export const Default = Template.bind({});
Default.args = { ...baseProps };

export const Disabled = Template.bind({});
Disabled.args = {
  ...baseProps,
  disabled: true,
} as TextAreaProps;

export const Error = Template.bind({});
Error.args = {
  ...baseProps,
  error: true,
} as TextAreaProps;

export const Label = Template.bind({});
Label.args = {
  ...baseProps,
  label: 'Favorite moment',
} as TextAreaProps;

export const CustomLabel = Template.bind({});
CustomLabel.args = {
  ...baseProps,
  label: (
    <>
      <Star color="orange" /> Moment
    </>
  ),
} as TextAreaProps;
