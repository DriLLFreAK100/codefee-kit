import { FormControlProps } from 'common/Types';
import { InputHTMLAttributes, ReactNode } from 'react';

export type InputProps = {
  id?: string;
  label?: ReactNode;
} & FormControlProps &
  InputHTMLAttributes<HTMLInputElement>;
