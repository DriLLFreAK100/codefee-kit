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
