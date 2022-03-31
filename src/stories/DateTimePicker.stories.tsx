import React, { useEffect, useState } from 'react';
import { DateTimePicker, DateTimePickerProps } from 'components/DatePicker';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Controls/Date Time Picker/DateTime Picker',
  component: DateTimePicker,
} as Meta<DateTimePickerProps>;

const Template: Story<DateTimePickerProps> = (args: DateTimePickerProps) => {
  const [internalDateTime, setInternalDateTime] = useState(args.dateTime);

  useEffect(() => {
    setInternalDateTime(args.dateTime);
  }, [args.dateTime]);

  const handleOnDateTimeChange = (date: Date) => {
    setInternalDateTime(date);
    action('onDateChange')(date)
  }

  return (
    <DateTimePicker
      {...args}
      dateTime={internalDateTime}
      onDateTimeChange={handleOnDateTimeChange}
    />
  )
};

export const Default = Template.bind({});
Default.args = {} as DateTimePickerProps;

