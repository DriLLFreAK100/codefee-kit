import CircularProgress from 'components/CircularProgress';
import LoadArea, { LoadAreaProps } from 'components/LoadArea';
import React from 'react';
import styles from './assets/styles/LoadArea.module.scss';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Typography } from 'components/Typography';
/* eslint-disable no-alert */

export default {
  title: 'Layout/Load Area',
  component: LoadArea,
} as Meta;

const Template: Story<LoadAreaProps> = (args) => {
  return (
    <LoadArea
      className={styles.loadArea}
      {...args}
    >
      <Typography>
        Content
      </Typography>
    </LoadArea>
  );
};

export const Default = Template.bind({});
Default.args = {
  loading: true,
} as LoadAreaProps;

export const CustomLoader = Template.bind({});
CustomLoader.args = {
  loading: true,
  renderLoader: () => <CircularProgress color='secondary' />,
} as LoadAreaProps;

export const CustomHTMLTag = Template.bind({});
CustomHTMLTag.args = {
  loading: true,
  tag: 'div'
} as LoadAreaProps;
