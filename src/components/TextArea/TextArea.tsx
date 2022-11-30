import React, { forwardRef } from 'react';
import Label from 'components/Label';
import { TextAreaProps } from './Common';
import * as S from './TextArea.styled';

const TextArea = forwardRef<HTMLDivElement, TextAreaProps>(
  (props: TextAreaProps, ref) => {
    const { label, ...passThrough } = props;

    return (
      <S.TextAreaContainer ref={ref}>
        {label ? <Label htmlFor={passThrough.id}>{label}</Label> : null}
        <S.TextArea {...passThrough} />
      </S.TextAreaContainer>
    );
  }
);

TextArea.displayName = 'TextArea';
TextArea.defaultProps = {
  id: '',
  label: '',
  error: false,
};

export default TextArea;
