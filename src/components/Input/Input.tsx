import React, { forwardRef } from 'react';
import { InputProps } from './Common';
import * as S from './Input.styled';

const Input = forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => <S.Input ref={ref} {...props} />
);

Input.displayName = 'Input';
Input.defaultProps = {
  error: false,
};

export default Input;
