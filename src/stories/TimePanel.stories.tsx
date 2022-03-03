import React, { useCallback, useEffect, useState } from 'react';
import TimePanel, { TimePanelProps } from 'components/TimePanel';
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

export const Default = Template.bind({});
Default.args = {
  time: {
    hours: current.getHours(),
    minutes: current.getMinutes(),
  },
} as TimePanelProps;
