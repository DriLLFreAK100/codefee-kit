import React, { useEffect, useState } from 'react';
import CircularProgress, { CircularProgressProps } from 'components/CircularProgress';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Controls/CircularProgress',
  component: CircularProgress,
} as Meta;

export const Indeterminate: Story<CircularProgressProps> = (args) => <CircularProgress {...args} />;

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
    <CircularProgress {...args} progress={loadProgress} />
  );
};

Determinate.args = {
  type: 'determinate',
} as CircularProgressProps;
