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

export const WithInitialDate = Template.bind({});
WithInitialDate.args = {
  dateTime: new Date(1993, 7, 8, 8, 8),
} as DateTimePickerProps;

export const CalendarPanelOptions = Template.bind({});
CalendarPanelOptions.args = {
  calendarPanelOptions: {
    dayIndicatorLabels: ['日', '一', '二', '三', '四', '五', '六'],
    monthLabels: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    placeholderYearLabel: '年份',
  },
} as DateTimePickerProps;