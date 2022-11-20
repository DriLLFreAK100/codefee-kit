import React, { ReactNode, useState } from 'react';
import styles from './assets/styles/Select.module.scss';
import { action } from '@storybook/addon-actions';
import { Coffee } from 'components/Icons';
import { Meta, Story } from '@storybook/react';
import {
  Multiselect,
  MultiselectProps,
  Select,
  SelectOptionType,
  SelectProps,
} from 'components/Select';
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
  const [selected, setSelected] =
    useState<SelectOptionType | undefined>(undefined);

  const handleOnChange = (option: SelectOptionType) => {
    setSelected(option);
    action('selected')(option);
  };

  return (
    <Select {...args} selected={selected} onSelectedChange={handleOnChange} />
  );
};

export const Default = Template.bind({});
Default.args = {
  options: defaultOptions,
} as unknown as SelectProps;

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  options: defaultOptions,
} as unknown as SelectProps;

export const Error = Template.bind({});
Error.args = {
  error: true,
  options: defaultOptions,
} as unknown as SelectProps;

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: <div>Varietal</div>,
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
      <Coffee className={styles.customOptionTemplate__icon} />
      {option.label as ReactNode}
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
  selectedTemplate: (option?: SelectOptionType) =>
    option ? (
      <div className={styles.customSelectedTemplate}>
        <Coffee className={styles.customSelectedTemplate__icon} />
        {option?.label as ReactNode}
      </div>
    ) : undefined,
} as unknown as SelectProps;

const MultiSelectTemplate: Story<MultiselectProps> = (args) => {
  const [selected, setSelected] = useState<SelectOptionType[] | undefined>([]);

  const handleOnChange = (options: SelectOptionType[]) => {
    setSelected(options);
    action('selected')(options);
  };

  return (
    <Multiselect
      {...args}
      selected={selected}
      onSelectedChange={handleOnChange}
    />
  );
};

export const MultiselectDefault = MultiSelectTemplate.bind({});
MultiselectDefault.args = {
  options: defaultOptions,
} as unknown as MultiselectProps;
