import styled from 'styled-components';
import { cvar } from 'utils/StyleHelper';

const IconButton = styled.button`
  height: ${cvar('--control-height')};
  width: ${cvar('--control-height')};
  border: 0;
  border-radius: 50%;
  box-shadow: ${cvar('--control-shadow')};
  transition: background-color ${cvar('--transition-hover')} ease-in-out;
`;

export const PrimaryIconButton = styled(IconButton)`
  background-color: ${cvar('--color-primary')};
  color: ${cvar('--color-primary-on')};

  &:hover{
    background-color: ${cvar('--color-primary-light')};
  }

  &:active{
    background-color: ${cvar('--color-primary-dark')};
  }
`;

export const SecondaryIconButton = styled(IconButton)`
  background-color: ${cvar('--color-secondary')};
  color: ${cvar('--color-secondary-on')};

  &:hover{
    background-color: ${cvar('--color-secondary-light')};
  }

  &:active{
    background-color: ${cvar('--color-secondary-dark')};
  }
`;

export const SubtleIconButton = styled(IconButton)`
  background-color: inherit;
  box-shadow: unset;

  &:hover{
    background-color: ${cvar('--color-gray-2')};
  }

  &:active{
    background-color: ${cvar('--color-gray-3')};
  }
`;
