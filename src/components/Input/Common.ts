import { InputHTMLAttributes, ReactNode } from 'react';

export type InputProps = {
  id?: string;
  label?: ReactNode;
  error?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;
