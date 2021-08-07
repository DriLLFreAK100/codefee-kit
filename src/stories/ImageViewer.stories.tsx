import image from './assets/filter-coffee.jpg';
import ImageViewer, { ImageViewerProps } from 'components/ImageViewer';
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import styles from './assets/styles/ImageViewer.module.scss';
import Figure from 'components/Figure';
/* eslint-disable no-alert */

export default {
  title: 'Controls/Image Viewer',
  component: ImageViewer,
} as Meta;

const Template: Story<ImageViewerProps> = (args) => (
  <Figure
    className={styles.Figure}
    caption={<>
      From a <a target="_blank" href="https://www.codefeetime.com/">Codefee Time</a>
    </>}
  >
    <ImageViewer {...args} />
  </Figure>
);

export const Default = Template.bind({});
Default.args = {
  src: image,
  alt: 'Filter Coffee',
} as ImageViewerProps;

