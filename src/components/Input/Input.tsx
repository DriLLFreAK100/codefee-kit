import Label from 'components/Label';
import React, { forwardRef } from 'react';
import { InputProps } from './Common';
import * as S from './Input.styled';

const Input = forwardRef<HTMLDivElement, InputProps>(
  (props: InputProps, ref) => {
    const { label, ...passThrough } = props;

    return (
      <S.InputContainer ref={ref}>
        {label ? <Label htmlFor={passThrough.id}>{label}</Label> : null}
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
