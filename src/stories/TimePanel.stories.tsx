import React from 'react';
import TimePanel, { TimePanelProps } from 'components/TimePanel';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Controls/TimePanel',
  component: TimePanel,
} as Meta<TimePanelProps>;

const current = new Date();

const Template: Story<TimePanelProps> = (args: TimePanelProps) => <TimePanel {...args} />;

export const Default = Template.bind({});
Default.args = {
  time: {
    hours: current.getHours(),
    minutes: current.getMinutes(),
  },
} as TimePanelProps;

