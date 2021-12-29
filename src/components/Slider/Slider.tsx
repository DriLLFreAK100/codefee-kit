import React, { forwardRef, HtmlHTMLAttributes } from 'react';
import * as S from './Slider.style';

export type SliderProps = {
  value?: number;
  max?: number;
} & HtmlHTMLAttributes<HTMLDivElement>;

const Slider = forwardRef<HTMLDivElement, SliderProps>(
  (props: SliderProps, ref) => {
    const {
      value,
      max,
      ...passThrough
    } = props;

    return (
      <S.Slider
        ref={ref}
        {...passThrough}
      >
        <S.Rail />
        <S.Track />
        <S.Knob />
      </S.Slider>
    );
  },
);

Slider.displayName = 'Slider';
Slider.defaultProps = {
  value: 100,
  max: 100,
};

export default Slider;
