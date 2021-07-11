import AppContainer from 'components/AppContainer';
import CircularProgress, { CircularProgressProps } from 'components/CircularProgress';
import React, { useEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'Controls/CircularProgress',
  component: CircularProgress,
} as Meta;

const Template: Story<CircularProgressProps> = (args) => {
  return (
    <AppContainer>
      <CircularProgress {...args} />
    </AppContainer>
  );
};

export const Determinate: Story<CircularProgressProps> = (args) => {
  const [loadProgress, setLoadProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadProgress((prev) => { return prev >= 100 ? 0 : prev + 10; });
    }, 200);

    return () => {
      clearTimeout(timeout);
    };
  }, [loadProgress]);

  return (
    <AppContainer>
      <CircularProgress
        {...args}
        progress={loadProgress}
      />
    </AppContainer>
  );
};

Determinate.args = {
  type: 'determinate',
} as CircularProgressProps;

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  type: 'indeterminate',
} as CircularProgressProps;

export const SecondaryColor = Template.bind({});
SecondaryColor.args = {
  type: 'indeterminate',
  color: 'secondary',
} as CircularProgressProps;
