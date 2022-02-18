import React, {
  forwardRef, InputHTMLAttributes, ChangeEvent,
} from 'react';
import * as S from './Slider.styled';

export type SliderProps = {
  onValueChange?: (value: number) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const Slider = forwardRef<HTMLInputElement, SliderProps>(
  (props: SliderProps, ref) => {
    const {
      onValueChange,
      ...passThrough
    } = props;

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      onValueChange?.(parseInt(e.currentTarget.value, 10));
    };

    return (
      <S.Slider
        ref={ref}
        onChange={handleOnChange}
        {...passThrough}
        type="range"
      />
    );
  },
);

Slider.displayName = 'Slider';
Slider.defaultProps = {
  value: 100,
  max: 100,
  onValueChange: undefined,
};

export default Slider;
