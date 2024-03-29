import styled, { css } from 'styled-components';
import { AngleDown } from 'components/Icons';
import { cvar, makeCssVar, rem } from 'utils/StyleHelper';
import { TypographyStyles } from 'components/Typography';
import { DisabledCss, ErrorCss, NonErrorCss } from 'styles/FormControl.styled';
import { FormControlProps } from 'common/Types';

export type SelectCssVarProps = {
  '--cf-select-border': string;
  '--cf-select-border-color-hover': string;
  '--cf-select-border-color-focus': string;
  '--cf-select-background-color': string;
};

const [defaultCssVar, cssVar] = makeCssVar<SelectCssVarProps>({
  '--cf-select-border': cvar('--control-border'),
  '--cf-select-border-color-hover': cvar('--control-border-color-hover'),
  '--cf-select-border-color-focus': cvar('--control-border-color-focus'),
  '--cf-select-background-color': cvar('--control-bg-color'),
});

export const Host = styled.div`
  ${defaultCssVar};
  box-sizing: border-box;
  background-color: ${cssVar('--cf-select-background-color')};
  display: inline-block;
  height: ${cvar('--control-height')};
  min-width: ${rem(200)};
  appearance: none;
  position: relative;
  user-select: none;
  ${TypographyStyles.Subtitle1Css()}
`;

const OpenCss = css`
  border: ${rem(2)} solid ${cssVar('--cf-select-border-color-focus')};
  padding: ${rem(7)};

  &:hover {
    border-color: ${cssVar('--cf-select-border-color-focus')};
  }
`;

export const Select = styled.div<{ open: boolean } & FormControlProps>`
  display: flex;
  align-items: center;
  background-color: inherit;
  box-sizing: border-box;
  cursor: pointer;
  height: 100%;
  width: 100%;
  padding: ${rem(8)};
  border-radius: ${({ open }) =>
    open
      ? `${cvar('--control-border-radius')} ${cvar(
          '--control-border-radius'
        )} 0 0`
      : cvar('--control-border-radius')};
  border: ${cssVar('--cf-select-border')};
  transition: border-color ${cvar('--transition-hover')} ease-in-out;

  &:hover {
    border-color: ${cssVar('--cf-select-border-color-hover')};
  }

  ${({ open }) => open && OpenCss};
  ${({ disabled }) => (disabled ? DisabledCss : null)};
  ${({ error }) => (error ? ErrorCss : NonErrorCss)};
`;

export const AngleIcon = styled(AngleDown)<{ open: boolean }>`
  transition: transform ${cvar('--transition-toggle')};
  transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(360deg)')};
`;

export const OptionContainer = styled.div<{ open: boolean }>`
  background-color: inherit;
  box-sizing: border-box;
  border: ${rem(1)} solid ${cvar('--color-primary')};
  // prettier-ignore
  border-radius: 0 0 ${cvar('--control-border-radius')} ${cvar(
    '--control-border-radius'
  )};
  border-top: unset;
  position: absolute;
  top: ${cvar('--control-height')};
  left: 0;
  width: 100%;
  max-height: ${rem(300)};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
`;
