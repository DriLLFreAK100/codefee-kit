import styled from 'styled-components';
import { Gutter } from 'common';
import { GutterStyle } from 'styles';
import { Typography } from 'components/Typography';
import { cvar, makeCssVar, rem } from 'utils/StyleHelper';

export type CheckboxCssVarProps = {
  '--cf-checkbox-color-border': string;
  '--cf-checkbox-color-border-hover': string;
  '--cf-checkbox-color-border-active': string;
  '--cf-checkbox-color-checked-bg': string;
  '--cf-checkbox-color-disabled': string;
  '--cf-checkbox-color-checkmark': string;
  '--cf-checkbox-color-checkmark-disabled': string;
  '--cf-checkbox-color-label': string;
};

const [defaultCssVar, cssVar] = makeCssVar<CheckboxCssVarProps>({
  '--cf-checkbox-color-border': cvar('--color-primary'),
  '--cf-checkbox-color-border-hover': cvar('--color-primary-light'),
  '--cf-checkbox-color-border-active': cvar('--color-primary-dark'),
  '--cf-checkbox-color-checked-bg': cvar('--color-primary'),
  '--cf-checkbox-color-disabled': cvar('--color-gray-4'),
  '--cf-checkbox-color-checkmark': cvar('--color-primary-on'),
  '--cf-checkbox-color-checkmark-disabled': cvar('--color-primary-on'),
  '--cf-checkbox-color-label': 'unset',
});

export const Checkbox = styled.label<{
  disabled?: boolean;
  gutterBottom: Gutter;
}>`
  ${defaultCssVar}
  display: inline-block;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  height: ${rem(20)};
  position: relative;
  user-select: none;
  ${({ gutterBottom }) => GutterStyle({ bottom: gutterBottom })};
`;

export const Checkmark = styled.span<{ checked: boolean; disabled?: boolean }>`
  position: absolute;
  left: ${rem(7)};
  top: ${rem(1.5)};
  width: ${rem(4)};
  height: ${rem(11)};
  border-color: ${({ disabled }) =>
    cssVar(
      disabled
        ? '--cf-checkbox-color-checkmark-disabled'
        : '--cf-checkbox-color-checkmark'
    )};
  border-style: solid;
  border-width: 0 ${rem(2)} ${rem(2)} 0;
  transform: rotate(405deg);
  visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
`;

export const Input = styled.input`
  appearance: none;
  border: ${rem(1)} solid ${cssVar('--cf-checkbox-color-border')};
  border-radius: ${cvar('--control-border-radius')};
  box-sizing: border-box;
  margin-right: ${rem(8)};
  vertical-align: middle;
  width: ${rem(20)};
  height: ${rem(20)};

  && {
    cursor: inherit;
  }

  &:hover {
    border-color: ${cssVar('--cf-checkbox-color-border-hover')};
  }

  &:active {
    border-color: ${cssVar('--cf-checkbox-color-border-active')};
  }

  &[type='checkbox']:checked:not(:disabled) {
    background-color: ${cssVar('--cf-checkbox-color-checked-bg')};
  }

  &:disabled {
    background-color: ${cssVar('--cf-checkbox-color-disabled')};
    border-color: ${cssVar('--cf-checkbox-color-disabled')};
  }
`;

export const Label = styled(Typography)`
  display: inline-block;
  vertical-align: middle;
  color: ${cssVar('--cf-checkbox-color-label')};
`;
