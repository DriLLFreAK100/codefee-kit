import image from './assets/guin1.jpg';
import image2 from './assets/guin2.jpg';
import React from 'react';
import styles from './assets/styles/Typography.module.scss';
import { Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Foundation/Typography',
} as Meta;

export const Default = () => {
  return (
    <div>
      <h1>Headline 1</h1>
      <h2>Headline 2</h2>
      <h3>Headline 3</h3>
      <h4>Headline 4</h4>
      <h5>Headline 5</h5>
      <h6>Headline 6</h6>
      <div>Body</div>
      <div className="subtitle1">Subtitle 1</div>
      <div className="subtitle2">Subtitle 2</div>
      <p>Paragraph</p>
      <figcaption className="caption">Caption safafafd</figcaption>
      <div className="button">Button</div>
    </div>
  );
};

export const Sample = () => {
  return (
    <div className={styles['typographySample']}>
      <div className={styles['typographySample__content']}>
        <h1 className={styles['typographySample__content__title']}>Typography Sample</h1>
        <h3 className={styles['typographySample__content__subtitle']}>
          This is a testing platform
        </h3>
        <h4>What is Lorem Ipsum?</h4>
        <p>
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
        </p>
        <h4>Category</h4>
        <p>
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
        </p>
        <img src={image} alt="penguin" />
        <img src={image2} alt="penguin" />
        <p>
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
        </p>
        <h4>Menu</h4>
        <p>
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
        </p>
        <figure>
          <img src={image} alt="penguin" />
          <caption>Kissing Penguins</caption>
        </figure>
        <img src={image} alt="penguin" />
        <caption>Kissing Penguins</caption>
        <img src={image2} alt="penguin" />
        <caption>Penguins Family</caption>
        <table>
          <caption>Monthly savings</caption>
          <tr>
            <th>Month</th>
            <th>Savings</th>
          </tr>
          <tr>
            <td>January</td>
            <td>$100</td>
          </tr>
        </table>
        <h4>Contact Us</h4>
        <div>Email Address: abc@test.com</div>
        <div>Contact No.: 12345678</div>
      </div>
    </div>
  );
};
