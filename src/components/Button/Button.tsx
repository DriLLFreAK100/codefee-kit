import React, { FunctionComponent, ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children?: ReactNode;
  text: string;
  type?: 'primary' | 'subtle' | 'info' | 'success' | 'warning' | 'error';
}

const Button: FunctionComponent<ButtonProps> = ({
  children,
  text,
  type,
}: ButtonProps) => {
  const className = `${styles['button']} ${styles[`button--${type}`]}`;

  return (
    <button type="button" className={className}>
      {children ?? text}
    </button>
  );
};

Button.displayName = 'Button';
Button.defaultProps = {
  children: undefined,
  type: 'primary',
};

export default Button;
export type {
  ButtonProps,
};
