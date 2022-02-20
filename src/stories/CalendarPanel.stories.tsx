import React from 'react';
import CalendarPanel, { CalendarPanelProps } from 'components/CalendarPanel';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Controls/CalendarPanel',
  component: CalendarPanel,
} as Meta<CalendarPanelProps>;

const Template: Story<CalendarPanelProps> = (args: CalendarPanelProps) => {
  return (
    <CalendarPanel
      {...args}
      onDateChange={action('onDateChange')} />
  );
};

export const Default = Template.bind({});
Default.args = {} as CalendarPanelProps;

export const CustomDayIndicatorLabels = Template.bind({});
CustomDayIndicatorLabels.args = {
  dayIndicatorLabels: ['日', '一', '二', '三', '四', '五', '六'],
} as CalendarPanelProps;

export const CustomMonthLabels = Template.bind({});
CustomMonthLabels.args = {
  monthLabels: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
} as CalendarPanelProps;