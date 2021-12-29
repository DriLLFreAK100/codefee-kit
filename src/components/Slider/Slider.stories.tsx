import Slider, { SliderProps } from 'components/Slider';
import React, { useEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'Controls/Slider',
  component: Slider,
} as Meta;

const Template: Story<SliderProps> = (args: SliderProps) => {
  const [value, setValue] = useState(args.value);

  const handleOnValueChange = (val: number) => {
    setValue(val);
  };

  useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  return (
    <Slider
      {...args}
      value={value}
      onValueChange={handleOnValueChange}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
} as SliderProps;
