import React from 'react';
import { Blockquote, BlockquoteProps } from 'components/Blockquote';
import { Meta, Story } from '@storybook/react';
/* eslint-disable no-alert */

export default {
  title: 'Controls/Blockquote',
  component: Blockquote,
} as Meta;

const Template: Story<BlockquoteProps> = (args) => <Blockquote {...args} />;

export const Default = Template.bind({});
Default.args = {
  cite: 'https://martinfowler.com/books/refactoring.html',
  children: <>Any fool can write code that a computer can understand. Good programmers write code that humans can understand – Martin Fowler</>,
  caption: <>
    Some caption and source <a target="_blank" href="https://martinfowler.com/books/refactoring.html">here</a>
  </>,
} as BlockquoteProps;
