import AppContainer from 'components/AppContainer';
import CircularProgress, { ICircularProgressProps } from 'components/CircularProgress';
import React, { useEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'Controls/CircularProgress',
  component: CircularProgress,
} as Meta;

const Template: Story<ICircularProgressProps> = (args) => {
  return (
    <AppContainer>
      <CircularProgress {...args} />
    </AppContainer>
  );
};

export const Determinate: Story<ICircularProgressProps> = (args) => {
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
      <CircularProgress {...args} progress={loadProgress} />
    </AppContainer>
  );
};

Determinate.args = {
  type: 'determinate',
} as ICircularProgressProps;

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  type: 'indeterminate',
} as ICircularProgressProps;

export const SecondaryColor = Template.bind({});
SecondaryColor.args = {
  type: 'indeterminate',
  color: 'secondary',
} as ICircularProgressProps;
