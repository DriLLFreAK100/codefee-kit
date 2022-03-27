import React, { useEffect, useState } from 'react';
import { TimePicker, TimePickerProps } from 'components/DatePicker';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Time } from 'utils/TimeHelper';

export default {
  title: 'Controls/Date Time Picker/Time Picker',
  component: TimePicker,
} as Meta<TimePickerProps>;

const Template: Story<TimePickerProps> = (args: TimePickerProps) => {
  const [internalTime, setInternalTime] = useState(args.time);

  useEffect(() => {
    setInternalTime(args.time);
  }, [args.time]);

  const handleOnDateChange = (time: Time) => {
    setInternalTime(time);
    action('onTimeChange')(time)
  }

  return (
    <TimePicker
      {...args}
      time={internalTime}
      onTimeChange={handleOnDateChange}
    />
  )
};

export const Default = Template.bind({});
Default.args = {} as TimePickerProps;
