import styled from 'styled-components';
import { cvar, rem } from 'utils/StyleHelper';
import { Typography } from 'components/Typography';

export const Label = styled(Typography)`
  flex: 1;
`;

export const Option = styled.li`
  box-sizing: border-box;
  cursor: pointer;
  height: ${cvar('--control-height')};
  padding: ${rem(8)};
  display: flex;
  align-items: center;
  transition: background-color ${cvar('--transition-hover')},
    color ${cvar('--transition-hover')};

  &:hover {
    color: ${cvar('--color-primary-on')};
    background-color: ${cvar('--color-primary-light')};
  }

  &:active {
    color: ${cvar('--color-primary-on')};
    background-color: ${cvar('--color-primary-dark')};
  }
`;
