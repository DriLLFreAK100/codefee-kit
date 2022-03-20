import React from 'react';
import DatePicker, { DatePickerProps } from 'components/DatePicker';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Controls/DatePicker',
  component: DatePicker,
} as Meta<DatePickerProps>;

const Template: Story<DatePickerProps> = (args: DatePickerProps) => (
  <DatePicker />
);

export const Default = Template.bind({});
Default.args = {} as DatePickerProps;
