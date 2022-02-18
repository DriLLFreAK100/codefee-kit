import styled from 'styled-components';
import { cvar, rem, makeCssVar } from 'utils/StyleHelper';
import TypographyStyles from 'components/Typography/Typography.styled';

export type InputCssVar = {
  '--cf-input-border-color': string;
  '--cf-input-background-color': string;
};

const [defaultCssVar, cssVar] = makeCssVar<InputCssVar>({
  '--cf-input-border-color': cvar('--color-gray-5'),
  '--cf-input-background-color': cvar('--control-bg-color'),
});

export const Input = styled.input`
  ${defaultCssVar};
  ${TypographyStyles.Body1Css()};
  height: ${cvar('--control-height')};
  min-width: ${rem(130)};
  border-radius: ${cvar('--control-border-radius')};
  box-sizing: border-box;
  border: ${rem(1)} solid ${cssVar('--cf-input-border-color')};
  background-color: ${cssVar('--cf-input-background-color')};
  padding: ${rem(14)} ${rem(16)};
`;
