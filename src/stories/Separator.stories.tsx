import React from 'react';
import Separator, { SeparatorProps } from 'components/Separator';
import { Meta, Story } from '@storybook/react';
/* eslint-disable no-alert */

export default {
  title: 'Controls/Separator',
  component: Separator,
} as Meta;

const Template: Story<SeparatorProps> = (args) => <Separator {...args} />;

export const Line = Template.bind({});
Line.args = {
  type: 'line',
} as SeparatorProps;

export const Dot = Template.bind({});
Dot.args = {
  type: 'dot',
} as SeparatorProps;

