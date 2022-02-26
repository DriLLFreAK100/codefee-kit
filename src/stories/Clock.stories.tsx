import React from 'react';
import Clock, { ClockProps } from 'components/Clock';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Controls/Clock',
  component: Clock,
} as Meta<ClockProps>;

const current = new Date();
const baseProps: ClockProps = {
  clockMode: 'view',
  viewStyle: 'line',
  time: {
    hour: current.getHours(),
    minute: current.getMinutes(),
  },
  onTimeChange: action('onTimeChange'),
};

const Template: Story<ClockProps> = (args: ClockProps) => <Clock {...args} />;

export const ViewMode = Template.bind({});
ViewMode.args = {
  ...baseProps,
} as ClockProps;

export const HourTextViewStyle = Template.bind({});
HourTextViewStyle.args = {
  ...baseProps,
  viewStyle: 'hourText',
} as ClockProps;

export const EditHourMode = Template.bind({});
EditHourMode.args = {
  ...baseProps,
  clockMode: 'edit-hour',
} as ClockProps;

export const EditMinuteMode = Template.bind({});
EditMinuteMode.args = {
  ...baseProps,
  clockMode: 'edit-minute',
} as ClockProps;
