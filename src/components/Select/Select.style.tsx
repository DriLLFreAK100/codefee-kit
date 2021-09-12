import { Subtitle1Style } from 'components/Typography';
import styled from 'styled-components';
import { cvar, rem } from 'utils/StyleHelper';

export const Host = styled.div`
  border-radius: ${cvar('--control-border-radius')};
  border: ${rem(1)} solid ${cvar('--color-primary')};
  box-sizing: border-box;
  display: inline-block;
  height: ${cvar('--control-height')};
  min-width: ${rem(130)};
  appearance: none;
  position: relative;
  user-select: none;
  transition: border-color ${cvar('--transition-hover')} ease-in-out;
  ${Subtitle1Style()}

  &:hover{
    border-color: ${cvar('--color-primary-light')};
  }

  &:active{
    border-color: ${cvar('--color-primary-dark')};
  }
`;

export const Select = styled.div`
  cursor: pointer;
  height: 100%;
  width: 100%;
  padding: ${rem(8)};
  box-sizing: border-box;
`;

export const OptionContainer = styled.ul`
  border: ${rem(1)} solid transparent;
  position: absolute;
  top: 3rem;
  left: 0;
  width: 100%;
`;

export const Option = styled.li`
  height: ${cvar('--control-height')};
`;
