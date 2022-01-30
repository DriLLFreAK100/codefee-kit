import CircularProgress, { CircularProgressProps } from 'components/CircularProgress';
import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Controls/Circular Progress',
  component: CircularProgress,
} as Meta;

const Template: Story<CircularProgressProps> = (args) => <CircularProgress {...args} />;

export const Determinate: Story<CircularProgressProps> = (args) => {
  const [loadProgress, setLoadProgress] = useState(0);
  const requestRef = useRef<any>(undefined);

  const animate = () => {
    setLoadProgress((prev) => { return prev + 1; });
    requestRef.current = requestAnimationFrame(animate);
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <CircularProgress
      {...args}
      progress={loadProgress}
    />
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
