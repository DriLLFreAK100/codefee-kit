import Slider, { SliderProps } from 'components/Slider';
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'Controls/Slider',
  component: Slider,
} as Meta;

const Template: Story<SliderProps> = (args: SliderProps) => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {
} as SliderProps;
