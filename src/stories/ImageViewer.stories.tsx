import image from './assets/guin2.jpg';
import ImageViewer, { ImageViewerProps } from 'components/ImageViewer';
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
/* eslint-disable no-alert */

export default {
  title: 'Controls/Image Viewer',
  component: ImageViewer,
} as Meta;

const Template: Story<ImageViewerProps> = (args) => <ImageViewer {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: image,
  alt: 'Peguin family photo',
  caption: <>
    Some caption and source <a target="_blank" href="http://www.storytrender.com/wp-content/uploads/2018/11/19_MPM_PENGUIN_FAMILY.jpg">here</a>
  </>,
} as ImageViewerProps;

