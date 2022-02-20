import styled from 'styled-components';
import { cvar, rem } from 'utils/StyleHelper';

const StyledButton = styled.button`
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

export const PrimaryButton = styled(StyledButton)`
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

export const SubtleButton = styled(StyledButton)`
  background-color: inherit;
  border: ${rem(1)} solid ${cvar('--color-primary')};
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

export const InfoButton = styled(StyledButton)`
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

export const SuccessButton = styled(StyledButton)`
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

export const WarningButton = styled(StyledButton)`
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

export const ErrorButton = styled(StyledButton)`
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
