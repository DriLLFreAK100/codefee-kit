import React, { FunctionComponent, ReactNode } from 'react';
import styled, { StyledComponent, ThemeProvider } from 'styled-components';
import { CodefeeTheme, ITheme } from 'common/Theme';
import { Transitions } from 'common/StyleVariables';

type ButtonType = 'primary' | 'subtle' | 'info' | 'success' | 'warning' | 'error';

interface IButtonProps {
  children?: ReactNode;
  disabled?: boolean;
  text?: string;
  type?: ButtonType;
  onClick?: () => void;
}

const StyledButton = styled.button<IButtonProps>`
  border: none;
  border-radius: 0.4rem;
  cursor: pointer;
  outline: none;
  padding: 1.6rem;
  transition: background-color ${Transitions.hover} ease-in-out;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    transition: none;
  }
`;

const PrimaryButton = styled(StyledButton)`
  background-color: ${({ theme }) => (theme as ITheme).color.primary.default};
  color: ${({ theme }) => (theme as ITheme).color.primary.on};

  :hover {
    background: ${({ theme }) => (theme as ITheme).color.primary.light};
  }

  :active {
    background: ${({ theme }) => (theme as ITheme).color.primary.dark};
  }

  :disabled {
    background-color: ${({ theme }) => (theme as ITheme).color.primary.default};
  }
`;

const SubtleButton = styled(StyledButton)`
  background-color: white;
  border: 0.1rem solid ${({ theme }) => (theme as ITheme).color.primary.default};
  color: black;

  :hover {
    border: 0.1rem solid ${({ theme }) => (theme as ITheme).color.primary.light};
    background: ${({ theme }) => (theme as ITheme).color.primary.light};
    color: ${({ theme }) => (theme as ITheme).color.primary.on};
  }

  :active {
    border: 0.1rem solid ${({ theme }) => (theme as ITheme).color.primary.dark};
    background:  ${({ theme }) => (theme as ITheme).color.primary.dark};
    color:  ${({ theme }) => (theme as ITheme).color.primary.on};
  }

  :disabled {
    border: 0.1rem solid  ${({ theme }) => (theme as ITheme).color.primary.default};
    background-color: white;
    color: black;
  }
`;

const InfoButton = styled(StyledButton)`
  background-color: ${({ theme }) => (theme as ITheme).color.info.default};
  color: ${({ theme }) => (theme as ITheme).color.info.on};

  :hover {
    background: ${({ theme }) => (theme as ITheme).color.info.light};
  }

  :active {
    background: ${({ theme }) => (theme as ITheme).color.info.dark};
  }

  :disabled {
    background-color: ${({ theme }) => (theme as ITheme).color.info.default};
  }
`;
const SuccessButton = styled(StyledButton)`
  background-color: ${({ theme }) => (theme as ITheme).color.success.default};
  color: ${({ theme }) => (theme as ITheme).color.success.on};

  :hover {
    background: ${({ theme }) => (theme as ITheme).color.success.light};
  }

  :active {
    background: ${({ theme }) => (theme as ITheme).color.success.dark};
  }

  :disabled {
    background-color: ${({ theme }) => (theme as ITheme).color.success.default};
  }
`;

const WarningButton = styled(StyledButton)`
  background-color: ${({ theme }) => (theme as ITheme).color.warning.default};
  color: ${({ theme }) => (theme as ITheme).color.warning.on};

  :hover {
    background: ${({ theme }) => (theme as ITheme).color.warning.light};
  } 

  :active {
    background: ${({ theme }) => (theme as ITheme).color.warning.dark};
  } 
  
  :disabled {
    background-color: ${({ theme }) => (theme as ITheme).color.warning.default};
  }
`;

const ErrorButton = styled(StyledButton)`
  background-color: ${({ theme }) => (theme as ITheme).color.error.default};
  color: ${({ theme }) => (theme as ITheme).color.error.on};

  :hover {
    background: ${({ theme }) => (theme as ITheme).color.error.light};
  } 

  :active {
    background: ${({ theme }) => (theme as ITheme).color.error.dark};
  } 
  
  :disabled {
    background-color: ${({ theme }) => (theme as ITheme).color.error.default};
  }
`;

const getButtonComponent = (type: ButtonType): StyledComponent<'button', any, IButtonProps, never> => {
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

const Button: FunctionComponent<IButtonProps> = ({
  children,
  disabled,
  text,
  type,
  onClick,
}: IButtonProps) => {
  const Component = getButtonComponent(type as ButtonType);

  return (
    <ThemeProvider theme={CodefeeTheme}>
      <Component
        disabled={disabled}
        type={type as any}
        onClick={onClick}
      >
        {children ?? text}
      </Component>
    </ThemeProvider>
  );
};

Button.displayName = 'Button';
Button.defaultProps = {
  children: undefined,
  disabled: false,
  text: '',
  type: 'primary',
  onClick: undefined,
};

export default Button;
export type {
  IButtonProps,
};
