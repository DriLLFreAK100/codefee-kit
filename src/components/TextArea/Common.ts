import { FormControlProps } from 'common/Types';
import { TextareaHTMLAttributes, ReactNode } from 'react';

export type TextAreaProps = {
  id?: string;
  label?: ReactNode;
} & FormControlProps &
  TextareaHTMLAttributes<HTMLTextAreaElement>;
