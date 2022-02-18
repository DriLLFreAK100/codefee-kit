import React, { forwardRef, InputHTMLAttributes } from 'react';
import * as S from './Input.styled';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => (
    <S.Input
      ref={ref}
      {...props}
    />
  ),
);

Input.displayName = 'Input';
Input.defaultProps = {
};

export default Input;
