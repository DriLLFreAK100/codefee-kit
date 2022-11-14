import React, { forwardRef } from 'react';
import { InputProps } from './Common';
import * as S from './Input.styled';

const Input = forwardRef<HTMLDivElement, InputProps>(
  (props: InputProps, ref) => {
    const { id, label, ...passThrough } = props;

    if (label) {
      return (
        <S.InputContainer ref={ref}>
          <S.Label htmlFor={id}>{label}</S.Label>
          <S.Input id={id} {...passThrough} />
        </S.InputContainer>
      );
    }

    return (
      <S.InputContainer ref={ref}>
        <S.Input {...passThrough} />
      </S.InputContainer>
    );
  }
);

Input.displayName = 'Input';
Input.defaultProps = {
  id: '',
  label: '',
  error: false,
};

export default Input;
