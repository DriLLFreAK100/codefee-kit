import styled, { css } from 'styled-components';
import TypographyStyles from 'components/Typography/Typography.styled';
import { cvar, makeCssVar, rem } from 'utils/StyleHelper';
import { InputProps } from './Common';

export type InputCssVar = {
  '--cf-input-border-color': string;
  '--cf-input-border-color-hover': string;
  '--cf-input-border-color-error': string;
  '--cf-input-border-color-focus': string;
  '--cf-input-background-color': string;
  '--cf-input-label-color': string;
};

const [defaultCssVar, cssVar] = makeCssVar<InputCssVar>({
  '--cf-input-border-color': cvar('--color-gray-5'),
  '--cf-input-border-color-hover': cvar('--color-gray-4'),
  '--cf-input-border-color-error': cvar('--color-error'),
  '--cf-input-border-color-focus': cvar('--color-gray-6'),
  '--cf-input-background-color': cvar('--control-bg-color'),
  '--cf-input-label-color': cvar('--color-gray-6'),
});

export const InputContainer = styled.div`
  ${defaultCssVar};
`;

const ErrorCss = css`
  border: ${rem(2)} solid ${cssVar('--cf-input-border-color-error')};
  padding: ${rem(13)} ${rem(15)};
`;

const NonErrorCss = css`
  &:disabled {
    opacity: 0.7;
  }

  &:hover {
    border-color: ${cssVar('--cf-input-border-color-hover')};
  }

  &:focus {
    border: ${rem(2)} solid ${cssVar('--cf-input-border-color-focus')};
    padding: ${rem(13)} ${rem(15)};
  }
`;

export const Input = styled.input<InputProps>`
  ${TypographyStyles.Body1Css()};
  height: ${cvar('--control-height')};
  min-width: ${rem(130)};
  border-radius: ${cvar('--control-border-radius')};
  box-sizing: border-box;
  border: ${rem(1)} solid ${cssVar('--cf-input-border-color')};
  background-color: ${cssVar('--cf-input-background-color')};
  padding: ${rem(14)} ${rem(16)};

  ${({ error }) => (error ? ErrorCss : NonErrorCss)};
`;

export const Label = styled.label`
  ${TypographyStyles.Subtitle1Css()};
  display: block;
  margin-bottom: ${rem(8)};
  color: ${cssVar('--cf-input-label-color')};
`;
