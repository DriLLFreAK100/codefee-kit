import Select, { SelectOptionType, SelectProps } from 'components/Select';
import React, { ReactNode } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { useState } from '@storybook/addons';
import { Coffee, Times } from 'components/Icons';
import styles from './assets/styles/Select.module.scss';

/* eslint-disable no-alert */

export default {
  title: 'Controls/Select',
  component: Select,
} as Meta;

const defaultOptions = [
  { id: 1, label: 'Arabica', value: 'arabica' },
  { id: 2, label: 'Robusta', value: 'robusta' },
  { id: 3, label: 'Liberica', value: 'liberica' },
];

const Template: Story<SelectProps> = (args) => {
  const [selected, setSelected] = useState<SelectOptionType | undefined>(undefined);

  const handleOnChange = (option: SelectOptionType) => {
    setSelected(option);
  };

  const handleSetRef = (ref: HTMLDivElement) => {
    console.log(`Select Ref: ${ref}`);
  }

  return (
    <Select
      {...args}
      ref={handleSetRef}
      selected={selected}
      onChange={handleOnChange}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  options: defaultOptions,
} as unknown as SelectProps;

export const CustomLabelField = Template.bind({});
CustomLabelField.args = {
  options: [
    { id: 1, name: 'Arabica', value: 'arabica' },
    { id: 2, name: 'Robusta', value: 'robusta' },
    { id: 3, name: 'Liberica', value: 'liberica' },
  ],
  optionTemplate: (option: SelectOptionType) => option.name,
  selectedTemplate: (option?: SelectOptionType) => option?.name,
} as unknown as SelectProps;

export const CustomOptionTemplate = Template.bind({});
CustomOptionTemplate.args = {
  options: defaultOptions,
  optionTemplate: (option: SelectOptionType) => (
    <div className={styles.customOptionTemplate}>
      <div className={styles.customOptionTemplate__label}>
        {option.label as ReactNode}
      </div>
      <Times />
    </div>
  ),
} as unknown as SelectProps;

export const CustomSelectedTemplate = Template.bind({});
CustomSelectedTemplate.args = {
  options: [
    { id: 1, label: 'Arabica', data: 'arabica' },
    { id: 2, label: 'Robusta', data: 'robusta' },
    { id: 3, label: 'Liberica', data: 'liberica' },
  ],
  selectedTemplate: (option?: SelectOptionType) => option ? (
    <div className={styles.customSelectedTemplate}>
      <Coffee className={styles.customSelectedTemplate__icon} />
      {option?.label as ReactNode}
    </div>
  ) : undefined,
} as unknown as SelectProps;
