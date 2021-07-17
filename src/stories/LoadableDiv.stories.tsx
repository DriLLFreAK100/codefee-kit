import AppContainer from 'components/AppContainer';
import LoadableDiv, { LoadableDivProps } from 'components/LoadableDiv';
import React, { useEffect, useState } from 'react';
import styles from './assets/styles/LoadableDiv.module.scss';
import { Meta, Story } from '@storybook/react/types-6-0';
/* eslint-disable no-alert */

export default {
  title: 'Controls/LoadableDiv',
  component: LoadableDiv,
} as Meta;

const Template: Story<LoadableDivProps> = (args) => {
  return (
    <AppContainer>
      <LoadableDiv {...args} />
    </AppContainer>
  );
};

export const Sample: Story<LoadableDivProps> = (args) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AppContainer>
      <LoadableDiv
        {...args}
        loading={loading}
        className={styles.loadableDiv}
      >
        Testing
      </LoadableDiv>
    </AppContainer>
  );
};