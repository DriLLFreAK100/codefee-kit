import React, { useEffect, useState } from 'react';
import { DatePicker, DatePickerProps } from 'components/DatePicker';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Controls/DatePicker',
  component: DatePicker,
} as Meta<DatePickerProps>;

const Template: Story<DatePickerProps> = (args: DatePickerProps) => {
  const [internalDate, setInternalDate] = useState(args.date);

  useEffect(() => {
    setInternalDate(args.date);
  }, [args.date]);

  const handleOnDateChange = (date: Date) => {
    setInternalDate(date);
    action('onDateChange')(date)
  }

  return (
    <DatePicker
      {...args}
      date={internalDate}
      onDateChange={handleOnDateChange}
    />
  )
};

export const Default = Template.bind({});
Default.args = {} as DatePickerProps;

export const WithInitialDate = Template.bind({});
WithInitialDate.args = {
  date: new Date(1993, 7, 8),
} as DatePickerProps;

export const CalendarPanelOptions = Template.bind({});
CalendarPanelOptions.args = {
  calendarPanelOptions: {
    dayIndicatorLabels: ['日', '一', '二', '三', '四', '五', '六'],
    monthLabels: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    placeholderYearLabel: '年份',
  },
} as DatePickerProps;