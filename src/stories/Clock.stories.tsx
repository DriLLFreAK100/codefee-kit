import React, { useCallback, useEffect, useState } from 'react';
import Clock, { ClockProps, defaultHourMarks, defaultMinuteMarks, Time } from 'components/Clock';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Controls/Clock',
  component: Clock,
} as Meta<ClockProps>;

const current = new Date();
const baseProps: ClockProps = {
  time: {
    hours: current.getHours(),
    minutes: current.getMinutes(),
  },
  clockMode: 'view',
  viewStyle: 'line',
  hourMarks: defaultHourMarks,
  minuteMarks: defaultMinuteMarks,
};

const Template: Story<ClockProps> = (args: ClockProps) => {
  const [time, setTime] = useState(args.time);

  const handleOnTimeChange = useCallback((time: Time) => {
    action('onTimeChange')(time);
    setTime(time);
  }, []);

  useEffect(() => {
    setTime(args.time);
  }, [args.time]);

  return (
    <Clock
      {...args}
      time={time}
      onTimeChange={handleOnTimeChange}
    />
  );
};

export const ViewMode = Template.bind({});
ViewMode.args = {
  ...baseProps,
} as ClockProps;

export const ViewRealtime = Template.bind({});
ViewRealtime.args = {
  ...baseProps,
  clockMode: 'view-realtime',
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

export const HourTextViewStyle = Template.bind({});
HourTextViewStyle.args = {
  ...baseProps,
  viewStyle: 'hourText',
} as ClockProps;

export const CustomHourMarks = Template.bind({});
CustomHourMarks.args = {
  ...baseProps,
  clockMode: 'edit-hour',
  hourMarks: ['12', '', '', '3', '', '', '6', '', '', '9', '', '']
} as ClockProps;

export const CustomMinuteMarks = Template.bind({});
CustomMinuteMarks.args = {
  ...baseProps,
  clockMode: 'edit-minute',
  minuteMarks: ['60', '', '', '15', '', '', '30', '', '', '45', '', '']
} as ClockProps;
