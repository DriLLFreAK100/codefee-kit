import MultiClickArea, { MultiClickAreaProps } from 'components/MultiClickArea';
import React from 'react';
import styles from './assets/styles/MultiClickArea.module.scss';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { Typography } from 'components/Typography';
/* eslint-disable no-alert */

export default {
  title: 'Layout/Multi Click Area',
  component: MultiClickArea,
} as Meta;

const Template: Story<MultiClickAreaProps> = (args) => {
  return (
    <MultiClickArea
      className={styles.multiClickArea}
      {...args}
    >
      <Typography>
        Content
      </Typography>
    </MultiClickArea>
  );
};

export const DoubleClick = Template.bind({});
DoubleClick.args = {
  countTarget: 2,
  debounceTime: 500,
  onClick: action('double click'),
} as MultiClickAreaProps;

export const TripleClick = Template.bind({});
TripleClick.args = {
  countTarget: 3,
  debounceTime: 500,
  onClick: action('triple click'),
} as MultiClickAreaProps;
