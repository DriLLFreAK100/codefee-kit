import styled, { css } from 'styled-components';
import TypographyStyles from 'components/Typography/Typography.styled';
import { ErrorCss, NonErrorCss } from 'styles/FormControl.styled';
import { cvar, makeCssVar, rem } from 'utils/StyleHelper';
import { TextAreaProps } from './Common';

export type TextAreaCssVar = {
  '--cf-textarea-border': string;
  '--cf-textarea-background-color': string;
};

const [defaultCssVar, cssVar] = makeCssVar<TextAreaCssVar>({
  '--cf-textarea-border': cvar('--control-border'),
  '--cf-textarea-background-color': cvar('--control-bg-color'),
});

export const TextAreaContainer = styled.div`
  ${defaultCssVar};
`;

const TextAreaErrorCss = css`
  ${ErrorCss};
  padding: ${rem(13)} ${rem(15)};
`;

const TextAreaNonErrorCss = css`
  ${NonErrorCss};

  &:focus {
    padding: ${rem(13)} ${rem(15)};
  }
`;

export const TextArea = styled.textarea<TextAreaProps>`
  ${TypographyStyles.Body1Css()};
  height: calc(3 * ${cvar('--control-height')});
  min-width: ${rem(130)};
  border-radius: ${cvar('--control-border-radius')};
  box-sizing: border-box;
  border: ${cssVar('--cf-textarea-border')};
  background-color: ${cssVar('--cf-textarea-background-color')};
  padding: ${rem(14)} ${rem(16)};

  ${({ error }) => (error ? TextAreaErrorCss : TextAreaNonErrorCss)};
`;
