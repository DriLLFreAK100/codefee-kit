import styled from 'styled-components';
import { cvar, rem } from 'utils/StyleHelper';
import React, {
  FC, ReactNode, forwardRef, memo, ButtonHTMLAttributes,
} from 'react';
import Typography from 'components/Typography';

export type ButtonType = 'primary' | 'subtle' | 'info' | 'success' | 'warning' | 'error';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  text?: string;
  variant?: ButtonType;
  onClick?: () => void;
}

const StyledButton = styled.button<ButtonProps>`
  border: none;
  border-radius: ${cvar('--control-border-radius')};
  box-sizing: border-box;
  box-shadow: ${cvar('--control-shadow')};
  cursor: pointer;
  height: ${cvar('--control-height')};
  min-width: ${rem(130)};
  outline: none;
  padding: ${rem(14)} ${rem(16)};
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
  border: ${rem(1)} solid  ${cvar('--color-primary')};
  padding: ${rem(13)} ${rem(16)};
  color: black;

  :hover {
    border: ${rem(1)} solid  ${cvar('--color-primary-light')};
    background: ${cvar('--color-primary-light')};
    color: ${cvar('--color-primary-on')};
  }

  :active {
    border: ${rem(1)} solid ${cvar('--color-primary-dark')};
    background: ${cvar('--color-primary-dark')};
    color:  ${cvar('--color-primary-on')};
  }

  :disabled {
    border: ${rem(1)} solid ${cvar('--color-primary')};
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

const getButtonComponent = (type: ButtonType) => {
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

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref) => {
    const {
      children,
      text,
      variant,
      onClick,
      ...passThrough
    } = props;

    const Component = getButtonComponent(variant as ButtonType);

    return (
      <Component
        ref={ref}
        variant={variant as ButtonType}
        onClick={onClick}
        {...passThrough}
      >
        {children ?? <Typography type="button">{text}</Typography>}
      </Component>
    );
  },
);

Button.displayName = 'Button';
Button.defaultProps = {
  children: undefined,
  variant: 'primary',
  onClick: undefined,
};

export default memo(Button);
