import { InputHTMLAttributes } from 'react';

export type InputProps = {
  error?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;
