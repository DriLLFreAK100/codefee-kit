import image from './assets/filter-coffee.jpg';
import MultiClickArea, { MultiClickAreaProps } from 'components/MultiClickArea';
import React from 'react';
import styles from './assets/styles/MultiClickArea.module.scss';
import withMultiClick from 'components/MultiClickArea/withMultiClick';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react/types-6-0';
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

export const WithMultiClickHoc = () => {
  const cssClass = `${styles.multiClickArea} ${styles['multiClickArea--img']}`;

  return withMultiClick(
    <img className={cssClass} src={image} />,
    {
      onClick: action('double click'),
      className: styles['multiClickArea--inlineBlock'],
    },
  );
}
