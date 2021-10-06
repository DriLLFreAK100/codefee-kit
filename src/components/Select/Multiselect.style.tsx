import Checkbox from 'components/Checkbox';
import styled, { css } from 'styled-components';
import { CheckboxCssVarProps } from 'components/Checkbox/Checkbox.style';
import { cvar, jsonToCss, rem } from 'utils/StyleHelper';
import { Typography } from 'components/Typography';
import { Option } from './Select.style';
import SelectLayout from './SelectLayout';

export { Label } from './Select.style';

export const MultiselectLayout = styled(SelectLayout)`
  &&{
    width: ${rem(300)};
  }
`;

export const CheckboxOption = styled(Checkbox)`
  pointer-events: none;
`;

const hoverCheckboxCss = css`${jsonToCss<Partial<CheckboxCssVarProps>>({
  '--cf-checkbox-color-border': cvar('--color-primary-on'),
  '--cf-checkbox-color-checked-bg': cvar('--color-primary-on'),
  '--cf-checkbox-color-checkmark': cvar('--color-primary'),
})}`;

export const MultiselectOption = styled(Option)`
  &:hover{
    ${CheckboxOption}{
      ${hoverCheckboxCss};
    }
  }
`;

export const ControlsLayout = styled.div`
  display: flex;
  box-sizing: border-box;
  height: ${rem(32)};
`;

export const HeaderControlsLayout = styled(ControlsLayout)`
  border-bottom: ${rem(1)} solid ${cvar('--color-primary')};
`;

export const FooterControlsLayout = styled(ControlsLayout)`
  border-top: ${rem(1)} solid ${cvar('--color-primary')};
`;

export const ControlButton = styled.button`
  border: none;
  background: inherit;
  flex: 1;
  transition: background-color ${cvar('--transition-hover')}, color ${cvar('--transition-hover')};

  &:hover, 
  &:active{
    color:${cvar('--color-primary-on')};
  }

  &:hover{
    background-color: ${cvar('--color-primary-light')};
  }

  &:active{
    background-color: ${cvar('--color-primary-dark')};
  }

  &:not(:last-child){
    border-right: ${rem(1)} solid ${cvar('--color-primary')};
  }
`;

export const ControlButtonText = styled(Typography)`
  color: ${cvar('--color-gray-7')};

  &:hover,
  &:active{
    color: ${cvar('--color-primary-on')};
  }
`;
