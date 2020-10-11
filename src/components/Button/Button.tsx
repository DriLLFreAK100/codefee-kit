import React, { FunctionComponent, ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children?: ReactNode;
  disabled?: boolean;
  text: string;
  type?: 'primary' | 'subtle' | 'info' | 'success' | 'warning' | 'error';
  onClick?: () => void;
}

const Button: FunctionComponent<ButtonProps> = ({
  children,
  disabled,
  text,
  type,
  onClick,
}: ButtonProps) => {
  const className = `${styles['button']} ${styles[`button--${type}`]}`;

  return (
    <button
      className={className}
      disabled={disabled}
      type="button"
      onClick={onClick}
    >
      {children ?? text}
    </button>
  );
};

Button.displayName = 'Button';
Button.defaultProps = {
  children: undefined,
  disabled: false,
  type: 'primary',
  onClick: undefined,
};

export default Button;
export type {
  ButtonProps,
};
