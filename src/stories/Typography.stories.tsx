import Blockquote from 'components/Blockquote';
import image from './assets/guin1.jpg';
import image2 from './assets/guin2.jpg';
import ImageViewer from 'components/ImageViewer';
import React from 'react';
import Separator from 'components/Separator';
import styles from './assets/styles/Typography.module.scss';
import Typography, { TypographyProps } from 'components/Typography';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'Foundation/Typography',
  component: Typography,
} as Meta;

const Template: Story<TypographyProps> = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'What about a cup of Typography? 😜',
} as TypographyProps;

export const Subtle = Template.bind({});
Subtle.args = {
  children: 'What about a cup of Typography? 😜',
  subtle: true,
} as TypographyProps;

export const WithClassName = Template.bind({});
WithClassName.args = {
  children: 'With CSS class applied',
  className: styles.typographyCustomClassName,
} as TypographyProps;

export const WithStyle = Template.bind({});
WithStyle.args = {
  children: 'With inline CSS style applied',
  style: { textTransform: 'uppercase' },
} as TypographyProps;

export const WithGutterBottom: Story<TypographyProps> = (args) => <>
  <Typography {...args}>First</Typography>
  <Typography {...args}>Middle</Typography>
  <Typography {...args}>Last </Typography>
</>;
WithGutterBottom.args = {
  gutterBottom: 60,
} as TypographyProps;


export const Showcase = () => <>
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
  <Typography type="caption" gutterBottom={12}>Figure Caption</Typography>
  <Typography type="quote" gutterBottom={12}>Quote</Typography>
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

        <ImageViewer
          src={image}
          alt="penguin"
          caption="Penguin Family"
          gutter={12}
        />

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

        <Blockquote cite="https://martinfowler.com/books/refactoring.html" caption="Martin Fowler">
          Any fool can write code that a computer can understand.
          Good programmers write code that humans can understand.
        </Blockquote>

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

        <ImageViewer
          src={image2}
          alt="penguin"
          caption="Penguin Family"
          gutter={12}
        />

        <Separator />

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
