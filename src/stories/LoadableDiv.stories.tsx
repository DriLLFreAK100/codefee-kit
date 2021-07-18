import AppContainer from 'components/AppContainer';
import LoadableDiv, { LoadableDivProps } from 'components/LoadableDiv';
import React from 'react';
import styles from './assets/styles/LoadableDiv.module.scss';
import { Meta, Story } from '@storybook/react/types-6-0';
import Typography from 'components/Typography';
import CircularProgress from 'components/CircularProgress';
/* eslint-disable no-alert */

export default {
  title: 'Controls/LoadableDiv',
  component: LoadableDiv,
} as Meta;

const Template: Story<LoadableDivProps> = (args) => {
  return (
    <AppContainer>
      <LoadableDiv
        {...args}
        className={styles.loadableDiv}
      >
        <Typography>
          Content
        </Typography>
      </LoadableDiv>
    </AppContainer>
  );
};

export const Default = Template.bind({});
Default.args = {
  loading: true,
} as LoadableDivProps;

export const CustomLoader = Template.bind({});
CustomLoader.args = {
  loading: true,
  renderLoader: () => <CircularProgress color='secondary' />,
} as LoadableDivProps;
