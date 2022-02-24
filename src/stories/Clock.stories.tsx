import React from 'react';
import Clock, { ClockProps } from 'components/Clock';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Controls/Clock',
  component: Clock,
} as Meta<ClockProps>;

const Template: Story<ClockProps> = (args: ClockProps) => <Clock {...args} />;

export const Default = Template.bind({});
Default.args = {} as ClockProps;
