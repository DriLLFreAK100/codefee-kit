/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { forwardRef, LabelHTMLAttributes } from 'react';
import * as S from './Label.styled';

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => (
  <S.Label ref={ref} {...props} />
));

Label.displayName = 'Label';

export default Label;
