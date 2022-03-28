import React, { useCallback, useEffect, useState } from 'react';
import TimePanel, { TimePanelProps } from 'components/TimePanel';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import { Time } from 'utils/TimeHelper';

export default {
  title: 'Controls/TimePanel',
  component: TimePanel,
} as Meta<TimePanelProps>;

const current = new Date();

const Template: Story<TimePanelProps> = (args: TimePanelProps) => {
  const [internalTime, setInternalTime] = useState(args.time);

  const handleOnTimeChange = useCallback((time: Time) => {
    action('onTimeChange')(time);
    setInternalTime(time);
  }, []);

  useEffect(() => {
    setInternalTime(args.time);
  }, [args.time]);

  return (
    <TimePanel
      {...args}
      time={internalTime}
      onTimeChange={handleOnTimeChange} />
  );
};

const baseProps = {
  inputVariant: 'input',
  time: {
    hours: current.getHours(),
    minutes: current.getMinutes(),
  },
} as TimePanelProps;

export const InputVariant = Template.bind({});
InputVariant.args = {
  ...baseProps
} as TimePanelProps;

export const ClockVariant = Template.bind({});
ClockVariant.args = {
  ...baseProps,
  inputVariant: 'clock',
} as TimePanelProps;

