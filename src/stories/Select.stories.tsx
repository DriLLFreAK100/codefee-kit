import Select, { SelectProps } from 'components/Select';
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
/* eslint-disable no-alert */

export default {
  title: 'Controls/Select',
  component: Select,
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { id: 1, label: 'Arabica', value: 'arabica' },
    { id: 2, label: 'Robusta', value: 'robusta' },
    { id: 3, label: 'Liberica', value: 'liberica' },
  ],
} as SelectProps;

export const CustomLabelField = Template.bind({});
CustomLabelField.args = {
  options: [
    { id: 1, name: 'Arabica', value: 'arabica' },
    { id: 2, name: 'Robusta', value: 'robusta' },
    { id: 3, name: 'Liberica', value: 'liberica' },
  ],
  getOptionLabel: (option) => option.name,
} as SelectProps;

export const CustomValueField = Template.bind({});
CustomValueField.args = {
  options: [
    { id: 1, label: 'Arabica', data: 'arabica' },
    { id: 2, label: 'Robusta', data: 'robusta' },
    { id: 3, label: 'Liberica', data: 'liberica' },
  ],
  getOptionValue: (option) => option.data,
} as SelectProps;
