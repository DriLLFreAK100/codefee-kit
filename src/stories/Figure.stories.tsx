import Figure, { Image, FigureProps, Blockquote } from 'components/Figure';
import React from 'react';
import image from './assets/guin2.jpg';
import { Meta, Story } from '@storybook/react/types-6-0';
/* eslint-disable no-alert */

export default {
  title: 'Controls/Figure',
  component: Figure,
} as Meta;

const Template: Story<FigureProps> = (args) => <Figure {...args} />;

export const ImageFigure = Template.bind({});
ImageFigure.args = {
  children: (
    <Image src={image} />
  ),
  caption: <>
    Some caption and source <a target="_blank" href="http://www.storytrender.com/wp-content/uploads/2018/11/19_MPM_PENGUIN_FAMILY.jpg">here</a>
  </>,
} as FigureProps;

export const BlockquoteFigure = Template.bind({});
BlockquoteFigure.args = {
  children: (
    <Blockquote cite="https://martinfowler.com/books/refactoring.html">
      Any fool can write code that a computer can understand. Good programmers write code that humans can understand – Martin Fowler
    </Blockquote>
  ),
  caption: <>
    Some caption and source <a target="_blank" href="https://martinfowler.com/books/refactoring.html">here</a>
  </>,
} as FigureProps;
