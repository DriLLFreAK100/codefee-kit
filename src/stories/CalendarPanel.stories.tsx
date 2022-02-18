import React from 'react';
import CalendarPanel, { CalendarPanelProps } from 'components/CalendarPanel';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Controls/CalendarPanel',
  component: CalendarPanel,
} as Meta<CalendarPanelProps>;

const Template: Story<CalendarPanelProps> = (args: CalendarPanelProps) => <CalendarPanel {...args} />;

export const Default = Template.bind({});
Default.args = {} as CalendarPanelProps;
