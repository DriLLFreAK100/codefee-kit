import styled, { StyledComponent } from 'styled-components';
import { cvar, rem } from 'utils/StyleHelper';
import React, {
  FC, ReactNode, forwardRef, memo,
} from 'react';

export type ButtonType = 'primary' | 'subtle' | 'info' | 'success' | 'warning' | 'error';

export interface ButtonProps {
  children?: ReactNode;
  disabled?: boolean;
  text?: string;
  type?: ButtonType;
  onClick?: () => void;
}

const StyledButton = styled.button<ButtonProps>`
  border: none;
  border-radius: ${rem(4)};
  cursor: pointer;
  outline: none;
  padding: ${rem(16)};
  transition: background-color ${cvar('--transition-hover')} ease-in-out;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    transition: none;
  }
`;

const PrimaryButton = styled(StyledButton)`
  background-color: ${cvar('--color-primary')};
  color: ${cvar('--color-primary-on')};

  :hover {
    background:  ${cvar('--color-primary-light')};
  }

  :active {
    background:  ${cvar('--color-primary-dark')};
  }

  :disabled {
    background-color:  ${cvar('--color-primary')};
  }
`;

const SubtleButton = styled(StyledButton)`
  background-color: white;
  border: 0.1rem solid  ${cvar('--color-primary')};
  color: black;

  :hover {
    border: 0.1rem solid  ${cvar('--color-primary-light')};
    background: ${cvar('--color-primary-light')};
    color: ${cvar('--color-primary-on')};
  }

  :active {
    border: 0.1rem solid ${cvar('--color-primary-dark')};
    background: ${cvar('--color-primary-dark')};
    color:  ${cvar('--color-primary-on')};
  }

  :disabled {
    border: 0.1rem solid ${cvar('--color-primary')};
    background-color: white;
    color: black;
  }
`;

const InfoButton = styled(StyledButton)`
  background-color: ${cvar('--color-info')};
  color: ${cvar('--color-info-on')};

  :hover {
    background: ${cvar('--color-info-light')};
  }

  :active {
    background: ${cvar('--color-info-dark')};
  }

  :disabled {
    background-color: ${cvar('--color-info')};
  }
`;

const SuccessButton = styled(StyledButton)`
  background-color: ${cvar('--color-success')};
  color: ${cvar('--color-success-on')};

  :hover {
    background: ${cvar('--color-success-light')};
  }

  :active {
    background: ${cvar('--color-success-dark')};
  }

  :disabled {
    background-color: ${cvar('--color-success')};
  }
`;

const WarningButton = styled(StyledButton)`
  background-color: ${cvar('--color-warning')};
  color: ${cvar('--color-warning-on')};

  :hover {
    background: ${cvar('--color-warning-light')};
  } 

  :active {
    background: ${cvar('--color-warning-dark')};
  } 
  
  :disabled {
    background-color: ${cvar('--color-warning')};
  }
`;

const ErrorButton = styled(StyledButton)`
  background-color: ${cvar('--color-error')};
  color: ${cvar('--color-error-on')};

  :hover {
    background: ${cvar('--color-error-light')};
  } 

  :active {
    background: ${cvar('--color-error-dark')};
  } 
  
  :disabled {
    background-color: ${cvar('--color-error')};
  }
`;

const getButtonComponent = (type: ButtonType): StyledComponent<'button', any, ButtonProps, never> => {
  switch (type) {
    case 'primary':
      return PrimaryButton;
    case 'subtle':
      return SubtleButton;
    case 'info':
      return InfoButton;
    case 'success':
      return SuccessButton;
    case 'warning':
      return WarningButton;
    case 'error':
      return ErrorButton;
    default:
      return PrimaryButton;
  }
};

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  disabled,
  text,
  type,
  onClick,
}: ButtonProps, ref) => {
  const Component = getButtonComponent(type as ButtonType);

  return (
    <Component
      ref={ref}
      disabled={disabled}
      type={type as any}
      onClick={onClick}
    >
      {children ?? text}
    </Component>
  );
});

Button.displayName = 'Button';
Button.defaultProps = {
  children: undefined,
  disabled: false,
  text: '',
  type: 'primary',
  onClick: undefined,
};

export default memo(Button);
