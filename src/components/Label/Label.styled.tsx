import styled from 'styled-components';
import { TypographyStyles } from 'components/Typography';
import { cvar, makeCssVar, rem } from 'utils/StyleHelper';

export type LabelCssVar = {
  '--cf-label-color': string;
};

const [defaultCssVar, cssVar] = makeCssVar<LabelCssVar>({
  '--cf-label-color': cvar('--color-gray-6'),
});

export const Label = styled.label`
  ${defaultCssVar};
  ${TypographyStyles.Subtitle1Css()};
  display: block;
  margin-bottom: ${rem(8)};
  color: ${cssVar('--cf-label-color')};
`;
