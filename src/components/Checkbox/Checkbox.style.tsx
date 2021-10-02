import Typography from 'components/Typography';
import { cvar, rem } from 'utils/StyleHelper';
import styled from 'styled-components';

export const Checkbox = styled.label<{ disabled?: boolean }>`
  display: inline-block;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  height: ${rem(24)};
  position: relative;
`;

export const Input = styled.input`
  appearance: none;
  border: ${rem(1)} solid ${cvar('--color-primary')};
  border-radius: ${cvar('--control-border-radius')};
  box-sizing: border-box;
  margin-right: ${rem(4)};
  vertical-align: middle;
  width: ${rem(24)};
  height: ${rem(24)};

  &&{
    cursor: inherit;
  }

  &:hover{
    border-color: ${cvar('--color-primary-light')};
  }

  &:active{
    border-color: ${cvar('--color-primary-dark')};
  }

  &[type=checkbox]:checked:not(:disabled){
    background-color: ${cvar('--color-primary')};
  }

  &:disabled{
    background-color: ${cvar('--color-gray-4')};
    border-color: ${cvar('--color-gray-4')};
  }
`;

export const Label = styled(Typography)`
  display: inline-block;
  vertical-align: middle;
`;

export const Checkmark = styled.span<{ checked: boolean }>`
  position: absolute;
  left: ${rem(9)};
  top: ${rem(3)};
  width: ${rem(4)};
  height: ${rem(12)};
  border: solid ${cvar('--color-primary-on')};
  border-width: 0 ${rem(2)} ${rem(2)} 0;
  transform: rotate(405deg);
  visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
`;
