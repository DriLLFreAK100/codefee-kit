import styled from 'styled-components';
import { AngleDown } from 'components/Icons';
import { cvar, rem } from 'utils/StyleHelper';
import { TypographyStyles } from 'components/Typography';

export const Host = styled.div`
  box-sizing: border-box;
  background-color: inherit;
  display: inline-block;
  height: ${cvar('--control-height')};
  min-width: ${rem(200)};
  appearance: none;
  position: relative;
  user-select: none;
  ${TypographyStyles.Subtitle1Css()}
`;

export const Select = styled.div<{ open: boolean }>`
  display: flex;
  align-items: center;  
  background-color: inherit;
  box-sizing: border-box;
  cursor: pointer;
  height: 100%;
  width: 100%;
  padding: ${rem(8)};
  border-radius: ${({ open }) => (open ? `${cvar('--control-border-radius')} ${cvar('--control-border-radius')} 0 0` : cvar('--control-border-radius'))};
  border: ${rem(1)} solid ${cvar('--color-primary')};
  transition: border-color ${cvar('--transition-hover')} ease-in-out;

  &:hover{
    border-color: ${cvar('--color-primary-light')};
  }

  &:active{
    border-color: ${cvar('--color-primary-dark')};
  }
`;

export const AngleIcon = styled(AngleDown) <{ open: boolean }>`
  transition: transform ${cvar('--transition-toggle')};
  transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(360deg)')};
`;

export const OptionContainer = styled.div<{ open: boolean }>`
  background-color: inherit;
  box-sizing: border-box;
  border: ${rem(1)} solid ${cvar('--color-primary')};
  border-radius: 0 0 ${cvar('--control-border-radius')} ${cvar('--control-border-radius')};
  border-top: unset;
  position: absolute;
  top: 3rem;
  left: 0;
  width: 100%;
  max-height: ${rem(300)};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
`;