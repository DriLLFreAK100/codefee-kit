import React, { ReactNode, forwardRef, ButtonHTMLAttributes } from 'react';
import * as S from './Button.styled';

export type ButtonType =
  | 'primary'
  | 'subtle'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'lite';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'submit' | 'reset' | 'button';
  children?: ReactNode;
  text?: string;
  variant?: ButtonType;
  onClick?: () => void;
}

const getButtonComponent = (type: ButtonType) => {
  switch (type) {
    case 'primary':
      return S.PrimaryButton;
    case 'subtle':
      return S.SubtleButton;
    case 'info':
      return S.InfoButton;
    case 'success':
      return S.SuccessButton;
    case 'warning':
      return S.WarningButton;
    case 'error':
      return S.ErrorButton;
    case 'lite':
      return S.LiteButton;
    default:
      return S.PrimaryButton;
  }
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref) => {
    const { children, text, variant, onClick, ...passThrough } = props;

    const Component = getButtonComponent(variant as ButtonType);

    return (
      <Component ref={ref} onClick={onClick} {...passThrough}>
        {children ?? text}
      </Component>
    );
  }
);

Button.displayName = 'Button';
Button.defaultProps = {
  children: undefined,
  variant: 'primary',
  onClick: undefined,
  type: 'button',
};

export default Button;
