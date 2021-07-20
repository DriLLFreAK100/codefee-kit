import image from './assets/guin1.jpg';
import image2 from './assets/guin2.jpg';
import React from 'react';
import styles from './assets/styles/Typography.module.scss';
import Typography from 'components/Typography';
import { Meta } from '@storybook/react/types-6-0';
import Figure from 'components/Figure';

export default {
  title: 'Foundation/Typography',

} as Meta;

export const Catalogue = () => <>
  <Typography type="h1">Heading 1</Typography>
  <Typography type="h2">Heading 2</Typography>
  <Typography type="h3">Heading 3</Typography>
  <Typography type="h4">Heading 4</Typography>
  <Typography type="h5" gutterBottom={12}>Heading 5</Typography>
  <Typography type="h6" gutterBottom={12}>Heading 6</Typography>
  <Typography type="subtitle1" gutterBottom={20}>Subtitle 1</Typography>
  <Typography type="subtitle2" gutterBottom={20}>Subtitle 2</Typography>
  <Typography type="body1" gutterBottom={20}>Body 1</Typography>
  <Typography type="body2" gutterBottom={20}>Body 2</Typography>
  <Typography type="button" gutterBottom={20}>Button Text</Typography>
  <Typography type="caption" gutterBottom={20}>Figure Caption</Typography>
  <Typography type="p">Paragraph</Typography>
</>

export const Sample = () => {
  return (
    <div className={styles['typographySample']}>
      <div className={styles['typographySample__content']}>
        <Typography
          className={styles['typographySample__title']}
          type="h1"
        >
          Typography Sample
        </Typography>

        <Typography
          className={styles['typographySample__title']}
          type="h3"
          subtle
          gutterBottom={32}
        >
          A sample article to walk to illustrate the typography output
        </Typography>

        <Typography type="h4">What is Lorem Ipsum?</Typography>
        <Typography type="p">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled
          it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
          It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software
          like Aldus PageMaker including versions of Lorem Ipsum.
        </Typography>

        <Typography type="h4">Category</Typography>

        <Typography type="p">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled
          it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
          It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software
          like Aldus PageMaker including versions of Lorem Ipsum.
        </Typography>

        <Figure caption="Kissing Penguins" gutter={12}>
          <img
            src={image}
            alt="penguin"
          />
        </Figure>

        <Typography type="p">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled
          it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
          It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software
          like Aldus PageMaker including versions of Lorem Ipsum.
        </Typography>

        <Typography type="p">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled
          it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
          It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software
          like Aldus PageMaker including versions of Lorem Ipsum.
        </Typography>

        <Figure caption="Penguins Family" gutter={12}>
          <img
            src={image2}
            alt="penguin"
          />
        </Figure>
        <hr />

        <Typography
          type="h5"
          gutterBottom={16}
        >
          Contact Us
        </Typography>

        <Typography type="h6">Email</Typography>
        <Typography
          type="body1"
          gutterBottom={8}
        >
          abc@test.com
        </Typography>

        <Typography type="h6">Contact Number</Typography>
        <Typography
          type="body2"
          gutterBottom={8}
        >
          12345678
        </Typography>
      </div>
    </div>
  );
};
