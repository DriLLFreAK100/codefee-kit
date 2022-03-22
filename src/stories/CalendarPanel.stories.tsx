import React, { useEffect, useState } from 'react';
import CalendarPanel, { CalendarPanelProps } from 'components/CalendarPanel';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Controls/CalendarPanel',
  component: CalendarPanel,
} as Meta<CalendarPanelProps>;

const Template: Story<CalendarPanelProps> = (args: CalendarPanelProps) => {
  const [internalDate, setInternalDate] = useState(args.date);

  useEffect(() => {
    setInternalDate(args.date);
  }, [args.date]);

  const handleOnDateChange = (date: Date) => {
    setInternalDate(date);
    action('onDateChange')(date)
  }

  return (
    <CalendarPanel
      {...args}
      date={internalDate}
      onDateChange={handleOnDateChange}
      onMonthChange={action('onMonthChange')}
      onYearChange={action('onYearChange')} />
  );
};

export const Default = Template.bind({});
Default.args = {
  date: undefined,
} as CalendarPanelProps;

export const WithInitialDate = Template.bind({});
WithInitialDate.args = {
  date: new Date(1993, 7, 8),
} as CalendarPanelProps;

export const CustomDayIndicatorLabels = Template.bind({});
CustomDayIndicatorLabels.args = {
  dayIndicatorLabels: ['日', '一', '二', '三', '四', '五', '六'],
} as CalendarPanelProps;

export const CustomMonthLabels = Template.bind({});
CustomMonthLabels.args = {
  monthLabels: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
} as CalendarPanelProps;