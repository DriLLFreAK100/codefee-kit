import AppContainer from 'components/AppContainer';
import Figure, { FigureProps } from 'components/Figure';
import React from 'react';
import image from './assets/guin2.jpg';
import { Meta, Story } from '@storybook/react/types-6-0';
/* eslint-disable no-alert */

export default {
  title: 'Controls/Figure',
  component: Figure,
} as Meta;

const Template: Story<FigureProps> = (args) => {
  return (
    <AppContainer>
      <Figure {...args} />
    </AppContainer>
  );
};

export const Image = Template.bind({});
Image.args = {
  children: (
    <img src={image} />
  ),
  caption: (
    <>
      Penguin family from <a target="_blank" href="http://www.storytrender.com/wp-content/uploads/2018/11/19_MPM_PENGUIN_FAMILY.jpg">here</a>
    </>
  ),
} as FigureProps;
