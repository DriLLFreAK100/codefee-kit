import AppContainer from 'components/AppContainer';
import image from './assets/guin1.jpg';
import image2 from './assets/guin2.jpg';
import React from 'react';
import styles from './assets/styles/Typography.module.scss';
import Typography from 'components/Typography';
import { Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Foundation/Typography',
} as Meta;

export const Default = () => {
  return (
    <AppContainer>
      <Typography type="h1">Heading 1</Typography>
      <Typography type="h2">Heading 2</Typography>
      <Typography type="h3">Heading 3</Typography>
      <Typography type="h4">Heading 4</Typography>
      <Typography type="h5">Heading 5</Typography>
      <Typography type="h6">Heading 6</Typography>
      <Typography type="subtitle1">Subtitle 1</Typography>
      <Typography type="subtitle2">Subtitle 2</Typography>
      <Typography type="body1">Body 1</Typography>
      <Typography type="body2">Body 2</Typography>
      <Typography type="button">Button Text</Typography>
      <Typography type="caption">Figure Caption</Typography>
      <Typography type="p">Paragraph</Typography>
    </AppContainer>
  );
};

export const Sample = () => {
  return (
    <AppContainer>

      <div className={styles['typographySample']}>
        <div className={styles['typographySample__content']}>
          <Typography type="h1" gutter={40}>Typography Sample</Typography>
          <Typography type="h2">This is a testing platform</Typography>
          <Typography type="h3">This is a testing platform</Typography>
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

          <figure>
            <img src={image} alt="penguin" />
            <Typography type="caption">Kissing Penguins</Typography>
          </figure>

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

          <figure>
            <img src={image2} alt="penguin" />
            <Typography type="caption">Penguins Family</Typography>
          </figure>
          <hr />

          <Typography type="h5">Contact Us</Typography>
          <Typography type="h6">Email</Typography>
          <Typography type="body1">abc@test.com</Typography>
          <Typography type="h6">Contact Number</Typography>
          <Typography type="body2">12345678</Typography>
        </div>
      </div>
    </AppContainer>
  );
};
