import styled, { css } from 'styled-components';
import TypographyStyles from 'components/Typography/Typography.styled';
import { cvar, makeCssVar, rem } from 'utils/StyleHelper';
import { ErrorCss, NonErrorCss } from 'styles/FormControl.styled';
import { InputProps } from './Common';

export type InputCssVar = {
  '--cf-input-border': string;
  '--cf-input-background-color': string;
};

const [defaultCssVar, cssVar] = makeCssVar<InputCssVar>({
  '--cf-input-border': cvar('--control-border'),
  '--cf-input-background-color': cvar('--control-bg-color'),
});

export const InputContainer = styled.div`
  ${defaultCssVar};
`;

const InputErrorCss = css`
  ${ErrorCss};
  padding: ${rem(13)} ${rem(15)};
`;

const InputNonErrorCss = css`
  ${NonErrorCss};

  &:focus {
    padding: ${rem(13)} ${rem(15)};
  }
`;

export const Input = styled.input<InputProps>`
  ${TypographyStyles.Body1Css()};
  height: ${cvar('--control-height')};
  min-width: ${rem(130)};
  border-radius: ${cvar('--control-border-radius')};
  box-sizing: border-box;
  border: ${cssVar('--cf-input-border')};
  background-color: ${cssVar('--cf-input-background-color')};
  padding: ${rem(14)} ${rem(16)};

  ${({ error }) => (error ? InputErrorCss : InputNonErrorCss)};
`;
